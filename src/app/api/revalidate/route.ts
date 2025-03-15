import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path, token } = req.query;

  if (token !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  } else if (!path || typeof path !== "string" || path.length === 0) {
    return res.status(401).json({ message: "Path is required" });
  }

  try {
    await res.revalidate(path);
  } catch (err) {
    console.error("Error revalidating path:", err);
    return res.status(500).send("Error revalidating page");
  }

  return res.status(200).json({
    revalidated: true,
    message: `Path ${path} revalidated successfully`,
  });
}
