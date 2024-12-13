/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { PoolClient } from 'pg';

export async function run(client: PoolClient): Promise<void> {
  await client.query(
    'CREATE INDEX CONCURRENTLY IF NOT EXISTS "SubscriptionStatus__security_idx" ON "SubscriptionStatus" USING gin ("_security")'
  );
  await client.query(
    'CREATE INDEX CONCURRENTLY IF NOT EXISTS "UserSecurityRequest__security_idx" ON "UserSecurityRequest" USING gin ("_security")'
  );

  // Drop the old btree indexes
  await client.query('DROP INDEX IF EXISTS "usersecurityrequest__security_idx"');
  await client.query('DROP INDEX IF EXISTS "subscriptionstatus__security_idx"');
}