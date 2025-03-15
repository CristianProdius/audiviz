export default async function handler(
  req: { query: { path: any; secret: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
      send: { (arg0: string): any; new (): any };
    };
    revalidate: (arg0: any) => any;
    json: (arg0: { revalidated: boolean }) => any;
  }
) {
  const { path, secret } = req.query;

  // Check for valid secret token
  if (secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
