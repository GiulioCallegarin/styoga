import { Resend } from 'resend';
import EmailTemplate from '~/app/components/EmailTemplate';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const BodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const json = (await req.json().catch(() => null)) as unknown;
    if (!json || typeof json !== 'object') {
      return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const parse = BodySchema.safeParse(json);
    if (!parse.success) {
      return Response.json({ error: 'Invalid body', issues: parse.error.flatten() }, { status: 400 });
    }
    const { name, email, message } = parse.data;

    const { data, error } = await resend.emails.send({
      from: 'Sentiero Yoga <onboarding@resend.dev>',
      to: ['spazzaturadigiulietto@gmail.com'],
      subject: `Richiesta da ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}