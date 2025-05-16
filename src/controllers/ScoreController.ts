import { Request, Response } from 'express';
import domainMapping from '../mockup/DomainMapping';

export const calcScore = (req: Request, res: Response) => {
  const { answers } = req.body;
  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: "Invalid input format" });
  }

  // Calculate total score per domain
  const domainScores: Record<string, number> = {};

  for (const answer of answers) {
    const { question_id, value } = answer;
    if (typeof question_id !== "string" || typeof value !== "number") {
      return res.status(400).json({ error: "Invalid answer format" });
    }
    const domainEntry = domainMapping.find(d => d.question_id === question_id);
    if (!domainEntry) {
      return res.status(400).json({ error: `Unknown question_id: ${question_id}` });
    }
    domainScores[domainEntry.domain] = (domainScores[domainEntry.domain] || 0) + value;
  }

  // Determine assessments to assign
  const results: string[] = [];
  if ((domainScores.depression || 0) >= 2) results.push("PHQ-9");
  if ((domainScores.mania || 0) >= 2) results.push("ASRM");
  if ((domainScores.anxiety || 0) >= 2) results.push("PHQ-9");
  if ((domainScores.substance_use || 0) >= 1) results.push("ASSIST");

  res.json({ results });
};