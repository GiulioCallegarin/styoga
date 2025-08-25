import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Preview>
          SENTIERO YOGA - Nuova richiesta da {name}
        </Preview>
        <Container>
          <Section style={main}>
            <Section style={header}>
              <Row>
                <Column style={{ textAlign: "center" }}>
                  <Section>
                    <Row>
                      <Column style={{ textAlign: "center" }}>
                        <Text style={brandInline}>SENTIERO YOGA</Text>
                      </Column>
                    </Row>
                  </Section>
                  <Heading style={title}>Nuova richiesta</Heading>
                </Column>
              </Row>
            </Section>
            <Section style={card}>
              <Row>
                <Column>
                  <Text style={label}>Nome</Text>
                  <Text style={value}>{name}</Text>
                </Column>
              </Row>
              <Hr style={divider} />
              <Row>
                <Column>
                  <Text style={label}>Email</Text>
                  <Text style={value}>{email}</Text>
                </Column>
              </Row>
              <Hr style={divider} />
              <Row>
                <Column>
                  <Text style={label}>Messaggio</Text>
                  <Section style={messageBox}>
                    <Text style={messageText}>{message}</Text>
                  </Section>
                </Column>
              </Row>
            </Section>
            <Text style={footer}>Sentiero Yoga • www.sentieroyoga.it</Text>

          </Section>
        </Container>
      </Body>
    </Html>
  );
}

EmailTemplate.PreviewProps = {
  name: "Giulia Rossi",
  email: "giulia.rossi@example.com",
  message:
    "Ciao! Vorrei avere maggiori informazioni sui corsi serali di Hatha Yoga. Sono disponibile dopo le 18:00. Grazie mille!",
} as EmailTemplateProps;

const main = {
  backgroundColor: "#09090b",
  color: "#a1a1aa",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
  padding: "24px",
  borderRadius: 8,
  border: "1px solid #2a2a32",
};

const header = {
  padding: "8px 20px 16px 20px",
};

const title = {
  color: "#9f9fa9",
  fontSize: 20,
  fontWeight: 700,
  margin: "24px 0 0 0",
  textAlign: "center" as const,
};

const card = {
  backgroundColor: "#18181b",
  border: "1px solid #2a2a32",
  borderRadius: 8,
  padding: 20,
};

const label = {
  color: "#9f9fa9",
  fontSize: 12,
  letterSpacing: 0.4,
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const value = {
  color: "#9f9fa9",
  fontSize: 16,
  margin: 0,
};

const brandInline = {
  color: "#9f9fa9",
  fontSize: 24,
  fontWeight: 700,
  fontFamily: "Georgia, 'Times New Roman', Times, serif",
  letterSpacing: 0.2,
  textTransform: "uppercase" as const,
  display: "inline-block",
  verticalAlign: "middle",
};

const divider = {
  borderColor: "#2a2a32",
  margin: "16px 0",
};

const messageBox = {
  backgroundColor: "#18181b",
  border: "1px solid #2a2a32",
  borderRadius: 6,
  padding: "12px 14px",
};

const messageText = {
  color: "#9f9fa9",
  fontSize: 15,
  margin: 0,
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  textAlign: "center" as const,
  fontSize: 12,
  color: "#9f9fa9",
  marginTop: 16,
};
