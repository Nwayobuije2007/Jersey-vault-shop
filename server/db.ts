import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, products, InsertProduct, cartItems, orders, InsertOrder, blogPosts, InsertBlogPost, newsletterSubscribers } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Products queries
export async function getProducts(filters?: { team?: string; league?: string; featured?: boolean }) {
  const db = await getDb();
  if (!db) return [];

  let query: any = db.select().from(products);
  if (filters?.team) {
    query = query.where(eq(products.team, filters.team));
  }
  if (filters?.league) {
    query = query.where(eq(products.league, filters.league));
  }
  if (filters?.featured) {
    query = query.where(eq(products.featured, 1));
  }
  return await query;
}

export async function getProductById(id: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(products).where(eq(products.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function createProduct(product: InsertProduct) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.insert(products).values(product);
  return result;
}

// Cart queries
export async function getCartItems(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(cartItems).where(eq(cartItems.userId, userId));
}

export async function addToCart(userId: number, productId: number, size: string, quantity: number = 1) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.insert(cartItems).values({ userId, productId, size, quantity });
  return result;
}

export async function removeFromCart(cartItemId: number) {
  const db = await getDb();
  if (!db) return null;
  return db.delete(cartItems).where(eq(cartItems.id, cartItemId));
}

export async function updateCartItem(cartItemId: number, quantity: number) {
  const db = await getDb();
  if (!db) return null;
  return db.update(cartItems).set({ quantity }).where(eq(cartItems.id, cartItemId));
}

// Orders queries
export async function createOrder(order: InsertOrder) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.insert(orders).values(order);
  return result;
}

export async function getOrdersByUserId(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(orders).where(eq(orders.userId, userId));
}

export async function getOrderById(orderId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(orders).where(eq(orders.id, orderId)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateOrderStatus(orderId: number, status: string) {
  const db = await getDb();
  if (!db) return null;
  return db.update(orders).set({ status: status as any }).where(eq(orders.id, orderId));
}

// Blog queries
export async function getBlogPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function createBlogPost(post: InsertBlogPost) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(blogPosts).values(post);
}

// Newsletter queries
export async function subscribeNewsletter(email: string) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(newsletterSubscribers).values({ email });
}

export async function unsubscribeNewsletter(email: string) {
  const db = await getDb();
  if (!db) return null;
  return db.update(newsletterSubscribers).set({ unsubscribedAt: new Date() }).where(eq(newsletterSubscribers.email, email));
}
