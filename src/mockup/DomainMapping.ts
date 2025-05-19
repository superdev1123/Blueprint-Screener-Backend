// This file contains the mapping of question IDs to their respective domains.
// This mapping is used to calculate scores for each domain based on the answers provided by the user.
// Each entry in the array represents a question and its associated domain.
// The domain is used to categorize the question and determine which assessment to assign based on the scores.
// The mapping is essential for the backend logic to process the answers and provide appropriate results.
const domains = [
  { "question_id": "question_a", "domain": "depression" },
  { "question_id": "question_b", "domain": "depression" },
  { "question_id": "question_c", "domain": "mania" },
  { "question_id": "question_d", "domain": "mania" },
  { "question_id": "question_e", "domain": "anxiety" },
  { "question_id": "question_f", "domain": "anxiety" },
  { "question_id": "question_g", "domain": "anxiety" },
  { "question_id": "question_h", "domain": "substance_use" }
]

export default domains;