# PII Handling & Data Privacy

## What PII We Collect

Walsh West collects the following personally identifiable information (PII) through web forms:

1. **Inquiry Form** (Contact page)
   - Name
   - Email
   - Phone number
   - Message (free text - may contain additional PII)

2. **Work With Us Form** (Contact page)
   - Name
   - Email
   - Phone number
   - Operation type (optional - may contain business details)
   - Message (free text - may contain additional PII)

3. **Newsletter Signup** (Newsletter page)
   - Email (required)
   - Name (optional)

## Storage

- All PII is stored in a PostgreSQL database
- Database provider (Vercel Postgres or Supabase) provides encryption at rest
- No PII is stored in application logs
- No PII is stored in local storage, cookies, or browser cache

## Logging & Monitoring

- Application logs use structured logging with allow-listed fields only
- PII fields are **never** included in logs
- Error tracking (if added) must sanitize PII before sending to third-party services

## Third-Party Sharing

### Current integrations:

1. **Resend (Email)**: Receives email addresses and names for sending confirmation emails. This is necessary for the service and disclosed to users.
2. **Newsletter provider (TBD)**: Will receive email addresses and optional names. Must include unsubscribe mechanism per CAN-SPAM.

### Prohibited:
- Sharing PII with LLM APIs (OpenAI, Anthropic, etc.) - sanitize before sending if ever needed
- Sharing PII with analytics providers beyond what's required (avoid GA; prefer privacy-focused tools like Plausible)
- Selling or sharing PII with third parties for marketing purposes

## User Rights

Users have the right to:

1. **Unsubscribe** from the newsletter at any time (unsubscribe link required in every email)
2. **Request deletion** of their data

### Data Deletion Process

To be implemented by the branch manager or admin:

1. User submits deletion request via email or contact form
2. Admin verifies identity (email confirmation)
3. Admin deletes records from database:
   ```sql
   -- Example for newsletter subscriber
   DELETE FROM newsletter_subscribers WHERE email = 'user@example.com';
   
   -- Example for inquiries (if requested)
   DELETE FROM inquiries WHERE email = 'user@example.com';
   ```
4. Confirm deletion with user

**TODO**: Build an admin panel (future task) to streamline this process.

## Compliance

### CAN-SPAM (Email)
- All newsletter emails must include:
  - Clear "From" line identifying Walsh West
  - Accurate subject line
  - Physical postal address in footer
  - Unsubscribe link (honored within 10 business days)

### GDPR (if applicable)
- If serving EU residents, additional disclosures and consent mechanisms may be required
- Consult legal counsel before marketing to EU

### CCPA (California)
- If serving California residents, additional disclosures about data collection may be required
- Right to deletion applies

## Security Best Practices

- Use HTTPS everywhere (enforced by Vercel)
- Database credentials stored in environment variables, never in code
- No sensitive data in client-side JavaScript
- Server actions re-validate all input server-side (never trust client)
- Prisma prevents SQL injection via parameterized queries

## Incident Response

If PII is inadvertently exposed (e.g., in logs, public repo, etc.):

1. **Immediately** remove/redact the exposed data
2. Rotate any compromised credentials (DB passwords, API keys)
3. Notify affected users if required by law
4. Document the incident and mitigation steps

## Future Enhancements

- Implement data export feature (user can request their data)
- Add CAPTCHA to forms to prevent spam/bots from filling database with fake PII
- Implement automated data retention policy (e.g., delete inquiries older than 2 years if not converted to clients)
