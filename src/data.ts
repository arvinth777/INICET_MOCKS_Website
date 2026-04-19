import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    subject: "INI-CET (Batch 6)",
    text: "A 22-year-old male falls on an outstretched hand. He has tenderness in the anatomical snuffbox. Initial X-rays are completely normal. What is the next best step in management?",
    options: {
      A: "Reassure and discharge with NSAIDs",
      B: "Apply a thumb spica cast and repeat X-ray in 2 weeks",
      C: "Immediate open reduction and internal fixation",
      D: "Corticosteroid injection"
    },
    correctAnswer: "B",
    explanation: "Occult scaphoid fractures often don't show on initial X-rays. Cast them and re-Xray in 10-14 days to prevent avascular necrosis."
  },
  {
    id: 2,
    subject: "INI-CET (Batch 6)",
    text: "A drug follows zero-order elimination kinetics. Which of the following statements is true regarding its clearance?",
    options: {
      A: "A constant fraction of the drug is eliminated per unit time.",
      B: "The half-life remains constant regardless of the dose.",
      C: "A constant amount of the drug is eliminated per unit time.",
      D: "The rate of elimination is directly proportional to plasma concentration."
    },
    correctAnswer: "C",
    explanation: "Zero-order kinetics means a constant amount (e.g., 10mg/hr) is eliminated, regardless of plasma concentration (e.g., Alcohol, Phenytoin)."
  },
  {
    id: 3,
    subject: "INI-CET (Batch 6)",
    text: "A researcher wants to study the association between a rare occupational chemical exposure and the subsequent development of leukemia over 20 years. The most appropriate study design is:",
    options: {
      A: "Case-control study",
      B: "Cross-sectional study",
      C: "Retrospective cohort study",
      D: "Randomized controlled trial"
    },
    correctAnswer: "C",
    explanation: "Looking back (retrospectively) at an exposed group to see who developed the disease is a Retrospective Cohort Study."
  },
  {
    id: 4,
    subject: "INI-CET (Batch 6)",
    text: "A 45-year-old male presents with massive splenomegaly. His TLC is 100,000/mm³ with a left shift. To differentiate Chronic Myeloid Leukemia (CML) from a leukemoid reaction, which test is most useful?",
    options: {
      A: "Bone marrow biopsy",
      B: "Leukocyte Alkaline Phosphatase (LAP) score",
      C: "Vitamin B12 levels",
      D: "Peripheral blood smear"
    },
    correctAnswer: "B",
    explanation: "LAP score is low in CML (malignant, useless WBCs) and high in a leukemoid reaction (normal, reactive WBCs fighting infection)."
  },
  {
    id: 5,
    subject: "INI-CET (Batch 6)",
    text: "A 60-year-old smoker with a central lung mass presents with lethargy, constipation, and polyuria. Labs show a serum calcium of 14 mg/dL and a low PTH. This paraneoplastic syndrome is most commonly associated with:",
    options: {
      A: "Small cell carcinoma",
      B: "Squamous cell carcinoma",
      C: "Adenocarcinoma",
      D: "Large cell carcinoma"
    },
    correctAnswer: "B",
    explanation: "Squamous cell carcinoma of the lung classically produces PTHrP (parathyroid hormone-related peptide), causing severe hypercalcemia."
  },
  {
    id: 6,
    subject: "INI-CET (Batch 6)",
    text: "A 32-week pregnant female with severe preeclampsia is on a magnesium sulfate infusion. She develops a respiratory rate of 8/min and absent deep tendon reflexes. The immediate antidote is:",
    options: {
      A: "Flumazenil",
      B: "Naloxone",
      C: "Calcium gluconate",
      D: "Protamine sulfate"
    },
    correctAnswer: "C",
    explanation: "IV Calcium Gluconate is the direct physiological antagonist to Magnesium toxicity."
  },
  {
    id: 7,
    subject: "INI-CET (Batch 6)",
    text: "A 25-year-old male arrives in the ER after a stab wound to the right chest. He is hypotensive, tachycardic, and has distended neck veins. Trachea is deviated to the left. Breath sounds are absent on the right. Immediate management is:",
    options: {
      A: "Intubation and mechanical ventilation",
      B: "Needle thoracostomy in the 5th intercostal space",
      C: "Pericardiocentesis",
      D: "Urgent chest X-ray"
    },
    correctAnswer: "B",
    explanation: "Tension pneumothorax is a clinical diagnosis. Do not wait for an X-ray. Decompress immediately with a needle (followed by a chest tube)."
  },
  {
    id: 8,
    subject: "INI-CET (Batch 6)",
    text: "A 6-month-old infant presents with cyanotic spells that worsen when crying. The mother notes the baby feels better when his knees are pulled to his chest. A chest X-ray shows a \"boot-shaped\" heart. Diagnosis is:",
    options: {
      A: "Transposition of the Great Arteries",
      B: "Tetralogy of Fallot",
      C: "Patent Ductus Arteriosus",
      D: "Ventricular Septal Defect"
    },
    correctAnswer: "B",
    explanation: "\"Tet spells\" (cyanosis relieved by squatting/knees-to-chest) + Boot-shaped heart = Tetralogy of Fallot."
  },
  {
    id: 9,
    subject: "INI-CET (Batch 6)",
    text: "A 65-year-old hypertensive male presents with sudden, painless loss of vision in his right eye. Fundoscopy reveals a pale retina with a \"cherry-red spot\" at the macula. The diagnosis is:",
    options: {
      A: "Central Retinal Vein Occlusion",
      B: "Central Retinal Artery Occlusion",
      C: "Retinal Detachment",
      D: "Macular Degeneration"
    },
    correctAnswer: "B",
    explanation: "Painless vision loss with a pale retina and a Cherry-red spot = Central Retinal Artery Occlusion (CRAO)."
  },
  {
    id: 10,
    subject: "INI-CET (Batch 6)",
    text: "A 20-year-old male presents with auditory hallucinations, delusions, and disorganized speech for the past 8 months. He also exhibits flat affect and avolition. These \"negative symptoms\" of schizophrenia are primarily linked to dopaminergic dysfunction in which pathway?",
    options: {
      A: "Mesolimbic pathway",
      B: "Mesocortical pathway",
      C: "Nigrostriatal pathway",
      D: "Tuberoinfundibular pathway"
    },
    correctAnswer: "B",
    explanation: "Positive symptoms (hallucinations) = Mesolimbic pathway. Negative symptoms (flat affect) = Mesocortical pathway deficit."
  },
  {
    id: 11,
    subject: "INI-CET (Batch 6)",
    text: "A 40-year-old female presents with flaccid blisters over her body and painful oral ulcers. Biopsy shows intraepidermal splitting. Immunofluorescence shows a \"fish-net\" pattern of IgG deposition. The autoantibodies are directed against:",
    options: {
      A: "Hemidesmosomes",
      B: "Desmoglein 1 and 3",
      C: "Type IV collagen",
      D: "Transglutaminase"
    },
    correctAnswer: "B",
    explanation: "Pemphigus Vulgaris involves IgG against Desmoglein 1 & 3, causing flaccid bullae and oral ulcers."
  },
  {
    id: 12,
    subject: "INI-CET (Batch 6)",
    text: "A patient in hemorrhagic shock requires induction of anesthesia. Which intravenous induction agent is preferred because it stimulates the sympathetic nervous system, increasing heart rate and blood pressure?",
    options: {
      A: "Propofol",
      B: "Thiopental",
      C: "Ketamine",
      D: "Etomidate"
    },
    correctAnswer: "C",
    explanation: "Ketamine is a sympathomimetic induction agent, ideal for maintaining BP in shock patients."
  },
  {
    id: 13,
    subject: "INI-CET (Batch 6)",
    text: "A 50-year-old female complains of \"the worst headache of her life\" followed by neck stiffness and vomiting. Non-contrast CT reveals hyperdensity in the basal cisterns. This is classic for:",
    options: {
      A: "Epidural hematoma",
      B: "Subdural hematoma",
      C: "Subarachnoid hemorrhage",
      D: "Intraparenchymal bleed"
    },
    correctAnswer: "C",
    explanation: "\"Worst headache of life\" + basal cistern hyperdensity = Subarachnoid Hemorrhage (ruptured berry aneurysm)."
  },
  {
    id: 14,
    subject: "INI-CET (Batch 6)",
    text: "A patient presents with macrocytic anemia and peripheral neuropathy. To differentiate Vitamin B12 deficiency from Folic acid deficiency, which metabolite will be uniquely elevated in B12 deficiency?",
    options: {
      A: "Homocysteine",
      B: "Methylmalonic acid",
      C: "Formiminoglutamic acid (FIGLU)",
      D: "Uric acid"
    },
    correctAnswer: "B",
    explanation: "Both have high Homocysteine, but ONLY Vitamin B12 deficiency has high Methylmalonic Acid (MMA)."
  },
  {
    id: 15,
    subject: "INI-CET (Batch 6)",
    text: "A forensic expert is examining a body. Rigor mortis has completely developed in the face, neck, upper limbs, and lower limbs. Based on the \"Rule of 12\" in temperate climates, what is the approximate minimum time since death?",
    options: {
      A: "2 hours",
      B: "6 hours",
      C: "12 hours",
      D: "24 hours"
    },
    correctAnswer: "C",
    explanation: "Rigor mortis takes ~12 hours to fully establish across the whole body."
  },
  {
    id: 16,
    subject: "INI-CET (Batch 6)",
    text: "A 25-year-old Type 1 Diabetic presents with vomiting, Kussmaul breathing, and a fruity breath odor. ABG shows pH 7.2. Which of the following defines the primary mechanism of his metabolic acidosis?",
    options: {
      A: "High Anion Gap due to accumulation of unmeasured ketoacids",
      B: "Normal Anion Gap due to loss of bicarbonate",
      C: "Low Anion Gap due to hypoalbuminemia",
      D: "High Anion Gap due to lactic acidosis"
    },
    correctAnswer: "A",
    explanation: "DKA is a High Anion Gap Metabolic Acidosis due to the addition of unmeasured anions (beta-hydroxybutyrate and acetoacetate)."
  },
  {
    id: 17,
    subject: "INI-CET (Batch 6)",
    text: "A 35-year-old female is stabilized on Lithium for bipolar disorder. She develops hypertension and is started on a new medication by her primary care doctor. Two weeks later, she presents with severe Lithium toxicity (ataxia, tremors). Which drug was most likely prescribed?",
    options: {
      A: "Amlodipine",
      B: "Hydrochlorothiazide",
      C: "Metoprolol",
      D: "Prazosin"
    },
    correctAnswer: "B",
    explanation: "Thiazide diuretics deplete sodium, causing the kidneys to reabsorb Lithium (which looks like sodium), triggering massive toxicity."
  },
  {
    id: 18,
    subject: "INI-CET (Batch 6)",
    text: "According to Starling forces, which of the following changes will most directly INCREASE the Glomerular Filtration Rate (GFR) in a healthy kidney?",
    options: {
      A: "Increased Bowman's capsule hydrostatic pressure",
      B: "Decreased glomerular capillary hydrostatic pressure",
      C: "Increased glomerular capillary oncotic pressure",
      D: "Decreased plasma oncotic pressure"
    },
    correctAnswer: "D",
    explanation: "Decreased plasma oncotic pressure (less protein holding water in the blood) allows more fluid to be pushed into Bowman's space, increasing GFR."
  },
  {
    id: 19,
    subject: "INI-CET (Batch 6)",
    text: "A 25-year-old male presents with a painless neck mass. Biopsy reveals large, binucleated cells with prominent eosinophilic nucleoli resembling \"owl eyes.\" What is the classic CD marker profile for these Reed-Sternberg cells?",
    options: {
      A: "CD15+, CD30+",
      B: "CD20+, CD10+",
      C: "CD3+, CD4+",
      D: "CD5+, CD23+"
    },
    correctAnswer: "A",
    explanation: "Classic Reed-Sternberg cells in Hodgkin Lymphoma are CD15+ and CD30+."
  },
  {
    id: 20,
    subject: "INI-CET (Batch 6)",
    text: "A patient is treated for primary syphilis. To monitor the response to treatment over the next year, which serological test is the most appropriate?",
    options: {
      A: "Dark-field microscopy",
      B: "FTA-ABS",
      C: "VDRL or RPR",
      D: "TPHA"
    },
    correctAnswer: "C",
    explanation: "Non-treponemal tests (VDRL/RPR) titers decline with successful treatment. (Treponemal tests like FTA-ABS stay positive for life)."
  },
  {
    id: 21,
    subject: "INI-CET (Batch 6)",
    text: "A new screening test for breast cancer has a sensitivity of 95% and a specificity of 90%. If this test is applied to a population where the prevalence of breast cancer is extremely LOW, what will happen to the test's predictive values?",
    options: {
      A: "Positive Predictive Value (PPV) will be high",
      B: "Positive Predictive Value (PPV) will be low",
      C: "Negative Predictive Value (NPV) will be low",
      D: "Predictive values do not change with prevalence"
    },
    correctAnswer: "B",
    explanation: "PPV is highly dependent on prevalence. In a very rare disease, most positive results are False Positives, making the PPV incredibly low."
  },
  {
    id: 22,
    subject: "INI-CET (Batch 6)",
    text: "A 28-year-old female presents with an unruptured ectopic pregnancy measuring 3 cm with no fetal cardiac activity. Her $\\beta$-hCG is 3,000 mIU/mL. She is hemodynamically stable. The medical treatment of choice is:",
    options: {
      A: "Misoprostol",
      B: "Mifepristone",
      C: "Methotrexate",
      D: "Laparoscopic salpingostomy"
    },
    correctAnswer: "C",
    explanation: "Methotrexate is the gold standard for stable, unruptured ectopic pregnancy <4cm."
  },
  {
    id: 23,
    subject: "INI-CET (Batch 6)",
    text: "A 40-year-old female undergoes screening mammography. Which of the following findings is most highly suspicious for malignancy?",
    options: {
      A: "Large, coarse \"popcorn\" calcifications",
      B: "Clustered, pleomorphic microcalcifications",
      C: "Well-circumscribed, anechoic cysts",
      D: "Diffuse, bilateral increased stromal density"
    },
    correctAnswer: "B",
    explanation: "Clustered pleomorphic (varying sizes/shapes) microcalcifications strongly suggest Ductal Carcinoma in Situ (DCIS) or invasive cancer."
  },
  {
    id: 24,
    subject: "INI-CET (Batch 6)",
    text: "A 2-day-old full-term neonate has not yet passed meconium and presents with bilious vomiting and abdominal distension. A barium enema shows a narrow rectum with a dilated transition zone above it. The pathogenesis involves:",
    options: {
      A: "Failure of neural crest cell migration",
      B: "Hypertrophy of the pyloric sphincter",
      C: "Intrauterine vascular accident",
      D: "CFTR gene mutation"
    },
    correctAnswer: "A",
    explanation: "Hirschsprung disease is caused by the failure of neural crest cells to migrate, leaving an aganglionic, constricted rectal segment."
  },
  {
    id: 25,
    subject: "INI-CET (Batch 6)",
    text: "A 25-year-old male sustains a mid-shaft tibial fracture. Twelve hours later, he complains of severe, unrelenting leg pain that is out of proportion to the injury and worsened by passive stretch of the toes. Distal pulses are palpable. Diagnosis?",
    options: {
      A: "Deep Vein Thrombosis",
      B: "Acute Compartment Syndrome",
      C: "Fat Embolism Syndrome",
      D: "Osteomyelitis"
    },
    correctAnswer: "B",
    explanation: "Pain out of proportion, especially with passive stretch, is the absolute hallmark of Acute Compartment Syndrome."
  },
  {
    id: 26,
    subject: "INI-CET (Batch 6)",
    text: "A 60-year-old female presents with sudden onset, severe right eye pain, halos around lights, and vomiting. The eye is red, the pupil is mid-dilated and fixed, and the globe feels hard to palpation. First-line medical therapy includes:",
    options: {
      A: "Topical Atropine",
      B: "Intravenous Acetazolamide",
      C: "Topical Corticosteroids",
      D: "Oral Acyclovir"
    },
    correctAnswer: "B",
    explanation: "Acute Angle-Closure Glaucoma is an emergency. IV Acetazolamide rapidly decreases aqueous humor production."
  },
  {
    id: 27,
    subject: "INI-CET (Batch 6)",
    text: "A 45-year-old male complains of episodic, brief spinning vertigo lasting 10-20 seconds that occurs specifically when he rolls over in bed. Hearing is perfectly normal. The most appropriate diagnostic maneuver is:",
    options: {
      A: "Epley maneuver",
      B: "Dix-Hallpike maneuver",
      C: "Caloric testing",
      D: "Pure tone audiometry"
    },
    correctAnswer: "B",
    explanation: "Dix-Hallpike is the diagnostic maneuver for BPPV. (Epley is the treatment maneuver)."
  },
  {
    id: 28,
    subject: "INI-CET (Batch 6)",
    text: "A patient on Lithium therapy must have their blood levels monitored regularly. The standard therapeutic index (window) for maintenance therapy of Lithium is:",
    options: {
      A: "0.2 - 0.4 mEq/L",
      B: "0.6 - 1.2 mEq/L",
      C: "1.5 - 2.5 mEq/L",
      D: "5.0 - 10.0 mEq/L"
    },
    correctAnswer: "B",
    explanation: "Lithium has a narrow therapeutic window of 0.6 - 1.2 mEq/L."
  },
  {
    id: 29,
    subject: "INI-CET (Batch 6)",
    text: "A 10-year-old boy presents with intense itching, especially at night. Examination shows excoriated papules in the web spaces of his fingers, wrists, and axillae. The drug of choice for this condition is:",
    options: {
      A: "Topical Corticosteroids",
      B: "Permethrin 5% cream",
      C: "Oral Fluconazole",
      D: "Topical Mupirocin"
    },
    correctAnswer: "B",
    explanation: "Permethrin 5% cream applied from the neck down is the treatment for Scabies."
  },
  {
    id: 30,
    subject: "INI-CET (Batch 6)",
    text: "During general anesthesia using Halothane and Succinylcholine, a patient suddenly develops severe muscle rigidity, tachycardia, and a rapid rise in body temperature. The specific antidote (Dantrolene) works by:",
    options: {
      A: "Blocking NMDA receptors",
      B: "Inhibiting Ryanodine receptors (RYR1) to prevent calcium release",
      C: "Antagonizing malignant acetylcholine release",
      D: "Directly vasodilating skeletal muscle beds"
    },
    correctAnswer: "B",
    explanation: "Dantrolene binds RYR1 receptors, blocking the massive calcium release from the sarcoplasmic reticulum that causes malignant hyperthermia."
  },
  {
    id: 31,
    subject: "INI-CET (Batch 6)",
    text: "In an MRI scan of the brain, fluid (such as CSF in the ventricles) appears bright white on which specific sequence?",
    options: {
      A: "T1-weighted image",
      B: "T2-weighted image",
      C: "Diffusion-Weighted Imaging (DWI)",
      D: "FLAIR"
    },
    correctAnswer: "B",
    explanation: "Remember: \"H2O is bright on T2.\""
  },
  {
    id: 32,
    subject: "INI-CET (Batch 6)",
    text: "A 6-month-old infant presents with developmental delay, fair skin, blonde hair, and a distinct \"mousy\" or \"musty\" body odor. This metabolic disorder is caused by a deficiency of:",
    options: {
      A: "Homogentisate oxidase",
      B: "Phenylalanine hydroxylase",
      C: "Branched-chain ketoacid dehydrogenase",
      D: "Galactose-1-phosphate uridyltransferase"
    },
    correctAnswer: "B",
    explanation: "Phenylketonuria (PKU) is caused by a deficiency of Phenylalanine hydroxylase (mousy odor, fair skin, ID)."
  },
  {
    id: 33,
    subject: "INI-CET (Batch 6)",
    text: "In forensic medicine, which of the following findings is highly characteristic of antemortem hanging rather than postmortem suspension?",
    options: {
      A: "Cyanosis of the fingertips",
      B: "Salivary dribbling from the angle of the mouth",
      C: "Complete absence of rigor mortis",
      D: "Postmortem lividity in the lower limbs"
    },
    correctAnswer: "B",
    explanation: "Salivary dribbling indicates the person was alive (glands functioning) when suspended."
  },
  {
    id: 34,
    subject: "INI-CET (Batch 6)",
    text: "A 20-year-old male presents with gross hematuria 2 days after recovering from a viral upper respiratory tract infection. Renal biopsy shows mesangial proliferation. This \"synpharyngitic\" presentation is classic for:",
    options: {
      A: "Post-Streptococcal Glomerulonephritis (PSGN)",
      B: "Minimal Change Disease",
      C: "IgA Nephropathy (Berger's Disease)",
      D: "Membranous Nephropathy"
    },
    correctAnswer: "C",
    explanation: "IgA Nephropathy (Berger's) happens concurrently with a URI (synpharyngitic). PSGN happens 1-3 weeks after a strep infection."
  },
  {
    id: 35,
    subject: "INI-CET (Batch 6)",
    text: "A patient is initiated on Warfarin for atrial fibrillation. To accurately monitor the anticoagulant effect of this drug, the physician should regularly check the:",
    options: {
      A: "Bleeding Time (BT)",
      B: "Activated Partial Thromboplastin Time (aPTT)",
      C: "Prothrombin Time (PT/INR)",
      D: "Thrombin Time (TT)"
    },
    correctAnswer: "C",
    explanation: "Warfarin affects the extrinsic pathway (Factor VII), monitored by PT/INR. Heparin affects the intrinsic, monitored by aPTT."
  },
  {
    id: 36,
    subject: "INI-CET (Batch 6)",
    text: "During the rapid depolarization phase (Phase 0) of a ventricular cardiac muscle cell action potential, which ion current is primarily responsible?",
    options: {
      A: "Inward Calcium current",
      B: "Outward Potassium current",
      C: "Inward Sodium current",
      D: "Inward Chloride current"
    },
    correctAnswer: "C",
    explanation: "Phase 0 (rapid upstroke) in ventricular cells is driven by the rapid influx of Sodium (Na+)."
  },
  {
    id: 37,
    subject: "INI-CET (Batch 6)",
    text: "The intrinsic pathway of apoptosis is triggered by cellular stress or DNA damage. This pathway centers around the release of which specific molecule from the mitochondria?",
    options: {
      A: "Cytochrome c",
      B: "Caspase-8",
      C: "Fas Ligand",
      D: "Bcl-2"
    },
    correctAnswer: "A",
    explanation: "Mitochondria release Cytochrome c, which activates Apaf-1 and Caspase-9, initiating apoptosis."
  },
  {
    id: 38,
    subject: "INI-CET (Batch 6)",
    text: "A patient presents with lockjaw (trismus) and severe muscle spasms. He recently stepped on a rusty nail. The causative toxin (Tetanospasmin) produces these symptoms by:",
    options: {
      A: "Inhibiting the release of acetylcholine at the NMJ",
      B: "Inhibiting the release of inhibitory neurotransmitters (GABA and Glycine) in the spinal cord",
      C: "Directly stimulating nicotinic receptors",
      D: "Activating adenylate cyclase"
    },
    correctAnswer: "B",
    explanation: "Tetanus toxin blocks the release of inhibitory neurotransmitters (GABA/Glycine), leading to unchecked muscle spasms."
  },
  {
    id: 39,
    subject: "INI-CET (Batch 6)",
    text: "According to the National Immunization Schedule, which of the following is an example of a Live Attenuated Vaccine?",
    options: {
      A: "Hepatitis B",
      B: "DPT",
      C: "BCG",
      D: "Inactivated Polio Vaccine (IPV)"
    },
    correctAnswer: "C",
    explanation: "BCG, OPV, MMR, Varicella, and Yellow Fever are live attenuated vaccines. (Hep B, DPT, IPV are inactivated/toxoids)."
  },
  {
    id: 40,
    subject: "INI-CET (Batch 6)",
    text: "A 28-year-old female experiences severe postpartum hemorrhage immediately after delivering a 4.2 kg baby. The uterus is palpated as soft and \"boggy.\" The most common cause of this condition is:",
    options: {
      A: "Retained placental fragments",
      B: "Vaginal laceration",
      C: "Uterine atony",
      D: "Coagulation disorder"
    },
    correctAnswer: "C",
    explanation: "Uterine atony (boggy uterus) is responsible for 80% of postpartum hemorrhages."
  },
  {
    id: 41,
    subject: "INI-CET (Batch 6)",
    text: "A 22-year-old male presents with migratory RLQ pain, anorexia, and nausea. His Alvarado score is 8. The most appropriate management is:",
    options: {
      A: "Discharge with oral antibiotics",
      B: "Ultrasound-guided drainage",
      C: "Appendectomy",
      D: "Barium enema"
    },
    correctAnswer: "C",
    explanation: "An Alvarado score $\\ge$ 7 strongly indicates acute appendicitis, warranting surgical appendectomy."
  },
  {
    id: 42,
    subject: "INI-CET (Batch 6)",
    text: "A neonate is born limp and apneic. After clearing the airway and stimulating the baby, the heart rate is 80 bpm. According to NRP guidelines, the immediate next step is:",
    options: {
      A: "Chest compressions",
      B: "Intravenous epinephrine",
      C: "Positive Pressure Ventilation (PPV)",
      D: "Routine care"
    },
    correctAnswer: "C",
    explanation: "In NRP, if the heart rate is < 100 bpm after initial steps, you must immediately start Positive Pressure Ventilation (PPV)."
  },
  {
    id: 43,
    subject: "INI-CET (Batch 6)",
    text: "A 65-year-old female falls on an outstretched hand and sustains a distal radius fracture with dorsal displacement. This classic \"dinner fork\" deformity is known as:",
    options: {
      A: "Smith's fracture",
      B: "Colles' fracture",
      C: "Barton's fracture",
      D: "Monteggia fracture"
    },
    correctAnswer: "B",
    explanation: "Colles fracture = dorsal displacement (\"dinner fork\"). Smith fracture = volar displacement (\"garden spade\")."
  },
  {
    id: 44,
    subject: "INI-CET (Batch 6)",
    text: "A 55-year-old diabetic patient undergoes fundoscopy. The defining feature that upgrades his diagnosis to Proliferative Diabetic Retinopathy (PDR) is the presence of:",
    options: {
      A: "Hard exudates",
      B: "Dot and blot hemorrhages",
      C: "Neovascularization",
      D: "Cotton wool spots"
    },
    correctAnswer: "C",
    explanation: "Neovascularization (new, fragile blood vessels) is the strict dividing line between Non-Proliferative and Proliferative DR."
  },
  {
    id: 45,
    subject: "INI-CET (Batch 6)",
    text: "A 45-year-old female complains of episodic spinning vertigo, fluctuating low-frequency sensorineural hearing loss, and a \"roaring\" tinnitus. The underlying pathophysiology is:",
    options: {
      A: "Demyelination of the VIIIth cranial nerve",
      B: "Otoconia dislodged into the posterior semicircular canal",
      C: "Endolymphatic hydrops",
      D: "Fixation of the stapes footplate"
    },
    correctAnswer: "C",
    explanation: "Episodic vertigo + roaring tinnitus + low-frequency hearing loss = Meniere's disease (Endolymphatic hydrops)."
  },
  {
    id: 46,
    subject: "INI-CET (Batch 6)",
    text: "A 45-year-old male is admitted for a fractured femur. On day 3, he develops severe agitation, disorientation, visual hallucinations (seeing insects), tachycardia, and profuse sweating. He has a known history of heavy alcohol use. Diagnosis?",
    options: {
      A: "Wernicke's encephalopathy",
      B: "Delirium Tremens",
      C: "Alcoholic hallucinosis",
      D: "Korsakoff syndrome"
    },
    correctAnswer: "B",
    explanation: "Delirium Tremens peaks at 48-72 hours post-alcohol cessation, featuring autonomic hyperactivity and terrifying visual hallucinations."
  },
  {
    id: 47,
    subject: "INI-CET (Batch 6)",
    text: "A 30-year-old male presents with a pigmented skin lesion. Which of the following features (from the ABCDE criteria) is most indicative of Melanoma?",
    options: {
      A: "Asymmetry and irregular Borders",
      B: "Diameter less than 6 mm",
      C: "Uniform brown Color",
      D: "Static, non-Evolving size over 5 years"
    },
    correctAnswer: "A",
    explanation: "Melanoma ABCDEs: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving."
  },
  {
    id: 48,
    subject: "INI-CET (Batch 6)",
    text: "A patient with Chronic Kidney Disease misses his dialysis appointment and presents with weakness. His ECG reveals tall, peaked T waves and widened QRS complexes. These findings strictly indicate:",
    options: {
      A: "Hypokalemia",
      B: "Hyperkalemia",
      C: "Hypocalcemia",
      D: "Hypercalcemia"
    },
    correctAnswer: "B",
    explanation: "Tall peaked T waves followed by a widened QRS is the deadly progression of Hyperkalemia."
  },
  {
    id: 49,
    subject: "INI-CET (Batch 6)",
    text: "A 24-year-old female presents with primary amenorrhea. She has normal breast development but absent axillary and pubic hair. Pelvic ultrasound reveals an absent uterus and blind-ending vagina. Karyotype is 46,XY. Diagnosis?",
    options: {
      A: "Turner syndrome",
      B: "Mullerian agenesis (MRKH syndrome)",
      C: "Complete Androgen Insensitivity Syndrome (CAIS)",
      D: "5-alpha-reductase deficiency"
    },
    correctAnswer: "C",
    explanation: "CAIS: 46,XY but totally insensitive to testosterone. They develop into phenotypic females with breast development (aromatization) but absent uterus/hair."
  },
  {
    id: 50,
    subject: "INI-CET (Batch 6)",
    text: "A 50-year-old male presents with severe crushing chest pain. The ECG shows ST-segment elevation in leads V1 to V4. Which coronary artery is most likely occluded?",
    options: {
      A: "Right Coronary Artery (RCA)",
      B: "Left Circumflex Artery (LCx)",
      C: "Left Anterior Descending (LAD) Artery",
      D: "Posterior Descending Artery (PDA)"
    },
    correctAnswer: "C",
    explanation: "ST elevation in the anterior precordial leads (V1-V4) indicates an Anteroseptal MI, supplied by the Left Anterior Descending (LAD) artery."
  },
  {
    id: 51,
    subject: "INI-CET (Batch 7)",
    text: "A 45-year-old female presents with diarrhea, dementia, and a hyperpigmented, symmetrical rash on her sun-exposed neck (Casal's necklace). This classic triad is caused by a deficiency of which vitamin?",
    options: {
      A: "Vitamin B1 (Thiamine)",
      B: "Vitamin B3 (Niacin)",
      C: "Vitamin B6 (Pyridoxine)",
      D: "Vitamin B12 (Cobalamin)"
    },
    correctAnswer: "B",
    explanation: "Casal's necklace + 3Ds (Dementia, Diarrhea, Dermatitis) $\\rightarrow$ Pellagra (Vitamin B3 / Niacin deficiency)."
  },
  {
    id: 52,
    subject: "INI-CET (Batch 7)",
    text: "A 30-year-old male is admitted with a massive pulmonary embolism and started on an unfractionated heparin infusion. He rapidly develops severe bleeding. The specific pharmacological antidote to reverse heparin acts by:",
    options: {
      A: "Competitively blocking the antithrombin III receptor",
      B: "Binding and neutralizing heparin via acid-base ionic interaction",
      C: "Directly synthesizing new clotting factors",
      D: "Inhibiting Vitamin K epoxide reductase"
    },
    correctAnswer: "B",
    explanation: "Heparin antidote $\\rightarrow$ Protamine Sulfate (It binds the acidic heparin with its highly alkaline/positive charge, neutralizing it directly)."
  },
  {
    id: 53,
    subject: "INI-CET (Batch 7)",
    text: "A 25-year-old male is involved in a high-speed RTA. His knee hits the dashboard violently. In the ER, his right leg is shortened, adducted, and internally rotated. The most likely diagnosis is:",
    options: {
      A: "Fracture neck of femur",
      B: "Anterior dislocation of the hip",
      C: "Posterior dislocation of the hip",
      D: "Trochanteric fracture"
    },
    correctAnswer: "C",
    explanation: "Dashboard injury + Shortened, Adducted, Internally Rotated leg $\\rightarrow$ Posterior Hip Dislocation."
  },
  {
    id: 54,
    subject: "INI-CET (Batch 7)",
    text: "A 22-year-old female presents with intensely pruritic, purple, polygonal, flat-topped papules on her wrists and ankles. Close inspection reveals fine white lines on the surface of the lesions (Wickham striae). The most likely diagnosis is:",
    options: {
      A: "Psoriasis",
      B: "Lichen Planus",
      C: "Pityriasis Rosea",
      D: "Erythema Multiforme"
    },
    correctAnswer: "B",
    explanation: "Pruritic, Purple, Polygonal papules + Wickham striae $\\rightarrow$ Lichen Planus."
  },
  {
    id: 55,
    subject: "INI-CET (Batch 7)",
    text: "A 40-year-old male is diagnosed with acute schizophrenia. To officially meet the DSM-5 criteria for Schizophrenia rather than Schizophreniform disorder, the continuous signs of the illness (including prodromal or residual phases) must persist for at least:",
    options: {
      A: "1 month",
      B: "3 months",
      C: "6 months",
      D: "12 months"
    },
    correctAnswer: "C",
    explanation: "Schizophrenia timeline cutoff $\\rightarrow$ 6 months. (<1 month = Brief Psychotic; 1-6 months = Schizophreniform)."
  },
  {
    id: 56,
    subject: "INI-CET (Batch 7)",
    text: "A 55-year-old male with long-standing GERD presents with progressive dysphagia to both solids and liquids simultaneously. Barium swallow reveals a dilated esophagus tapering to a smooth \"bird's beak\" appearance at the lower esophageal sphincter. The primary mechanism of this disease is:",
    options: {
      A: "Metaplasia of the squamous epithelium",
      B: "Degeneration of the inhibitory ganglion cells in the myenteric (Auerbach's) plexus",
      C: "Autoimmune destruction of the mucosal lining",
      D: "Hypertrophy of the esophageal skeletal muscle"
    },
    correctAnswer: "B",
    explanation: "Bird's beak on Barium + dysphagia to liquids/solids $\\rightarrow$ Achalasia (Loss of myenteric ganglion cells = no relaxation of LES)."
  },
  {
    id: 57,
    subject: "INI-CET (Batch 7)",
    text: "A 60-year-old female with atrial fibrillation is on maintenance Digoxin. She is prescribed a diuretic for mild edema and subsequently develops nausea, vomiting, and visual halos. Her ECG shows scooped ST segments. Which diuretic is most likely responsible for precipitating this toxicity?",
    options: {
      A: "Spironolactone",
      B: "Eplerenone",
      C: "Hydrochlorothiazide",
      D: "Acetazolamide"
    },
    correctAnswer: "C",
    explanation: "Digoxin toxicity trigger $\\rightarrow$ Hypokalemia. (Thiazides/Loop diuretics deplete potassium, allowing Digoxin to bind more easily and cause toxicity)."
  },
  {
    id: 58,
    subject: "INI-CET (Batch 7)",
    text: "A neonate is born limp and apneic. After clearing the airway and providing 30 seconds of effective Positive Pressure Ventilation (PPV), the heart rate is reassessed. According to NRP guidelines, chest compressions must be initiated if the heart rate strictly falls below:",
    options: {
      A: "100 bpm",
      B: "80 bpm",
      C: "60 bpm",
      D: "40 bpm"
    },
    correctAnswer: "C",
    explanation: "NRP Chest compressions cutoff $\\rightarrow$ Heart Rate < 60 bpm."
  },
  {
    id: 59,
    subject: "INI-CET (Batch 7)",
    text: "A 35-year-old African American male with advanced HIV (CD4 < 200) presents with massive proteinuria and rapidly progressive renal failure. Renal biopsy shows focal sclerosis and collapse of the glomerular tuft. The most likely histological diagnosis is:",
    options: {
      A: "Membranous Nephropathy",
      B: "Minimal Change Disease",
      C: "Focal Segmental Glomerulosclerosis (FSGS)",
      D: "IgA Nephropathy"
    },
    correctAnswer: "C",
    explanation: "HIV + Massive proteinuria in an adult $\\rightarrow$ Focal Segmental Glomerulosclerosis (FSGS)."
  },
  {
    id: 60,
    subject: "INI-CET (Batch 7)",
    text: "A 14-year-old boy presents with recurrent, severe, unprovoked epistaxis. Examination reveals a smooth, lobulated, highly vascular mass in the nasal cavity. Which of the following is the most likely diagnosis?",
    options: {
      A: "Nasopharyngeal carcinoma",
      B: "Juvenile Nasopharyngeal Angiofibroma (JNA)",
      C: "Inverted papilloma",
      D: "Antrochoanal polyp"
    },
    correctAnswer: "B",
    explanation: "Adolescent male + severe epistaxis + nasal mass $\\rightarrow$ Juvenile Nasopharyngeal Angiofibroma."
  },
  {
    id: 61,
    subject: "INI-CET (Batch 7)",
    text: "A 50-year-old male complains of right-sided hearing loss. On the Weber test, the sound lateralizes to the RIGHT ear. The Rinne test is negative (Bone Conduction > Air Conduction) in the RIGHT ear and positive in the LEFT ear. The diagnosis is:",
    options: {
      A: "Right-sided sensorineural hearing loss",
      B: "Right-sided conductive hearing loss",
      C: "Left-sided conductive hearing loss",
      D: "Left-sided sensorineural hearing loss"
    },
    correctAnswer: "B",
    explanation: "Weber lateralizes to affected ear + Rinne Negative (BC>AC) $\\rightarrow$ Conductive Hearing Loss on that side."
  },
  {
    id: 62,
    subject: "INI-CET (Batch 7)",
    text: "A 24-year-old female presents with unilateral painful loss of vision and impaired color vision. When a light is swung from the normal eye to the affected eye, the affected pupil paradoxically dilates. This finding is known as:",
    options: {
      A: "Argyll Robertson pupil",
      B: "Adie's tonic pupil",
      C: "Marcus Gunn pupil (Relative Afferent Pupillary Defect)",
      D: "Horner's syndrome"
    },
    correctAnswer: "C",
    explanation: "Pupil dilates when light swings to it $\\rightarrow$ Marcus Gunn Pupil (RAPD), indicating optic nerve damage."
  },
  {
    id: 63,
    subject: "INI-CET (Batch 7)",
    text: "In the management of the third stage of labor, active management (AMTSL) is routinely performed to prevent postpartum hemorrhage. Which of the following is the preferred uterotonic agent recommended by WHO for this purpose?",
    options: {
      A: "Intravenous Ergometrine",
      B: "Intramuscular Oxytocin (10 IU)",
      C: "Rectal Misoprostol",
      D: "Intravenous Tranexamic Acid"
    },
    correctAnswer: "B",
    explanation: "AMTSL Uterotonic of choice $\\rightarrow$ IM Oxytocin (10 IU)."
  },
  {
    id: 64,
    subject: "INI-CET (Batch 7)",
    text: "A 28-year-old female requests a long-acting reversible contraceptive. She is counseled about the Levonorgestrel-releasing Intrauterine System (LNG-IUS / Mirena). The primary mechanism by which it prevents pregnancy is:",
    options: {
      A: "Inhibition of ovulation via HPO axis suppression",
      B: "Copper-induced spermicidal inflammatory reaction",
      C: "Thickening of cervical mucus and endometrial suppression",
      D: "Direct destruction of the implanted blastocyst"
    },
    correctAnswer: "C",
    explanation: "Mirena (LNG-IUS) mechanism $\\rightarrow$ Progestin thickens cervical mucus and thins the endometrium. (It does not primarily inhibit ovulation)."
  },
  {
    id: 65,
    subject: "INI-CET (Batch 7)",
    text: "A public health officer checks the Vaccine Vial Monitor (VVM) on an OPV vial. The inner square is lighter than the outer circle. What does this specifically indicate?",
    options: {
      A: "The vaccine has frozen and must be discarded.",
      B: "The vaccine is expired and must be discarded.",
      C: "The vaccine has been exposed to heat but is still usable.",
      D: "The vaccine has reached the discard point and must NOT be used."
    },
    correctAnswer: "C",
    explanation: "VVM: Inner square lighter than outer circle $\\rightarrow$ Usable. (If they match or inner is darker, discard)."
  },
  {
    id: 66,
    subject: "INI-CET (Batch 7)",
    text: "According to the Indian Penal Code (IPC), causing the death of a pregnant woman by doing an act with the intent to cause a miscarriage (without her consent) is punishable under which section?",
    options: {
      A: "Section 314",
      B: "Section 302",
      C: "Section 320",
      D: "Section 376"
    },
    correctAnswer: "A",
    explanation: "IPC 314 $\\rightarrow$ Death caused by an act done with intent to cause miscarriage."
  },
  {
    id: 67,
    subject: "INI-CET (Batch 7)",
    text: "A 25-year-old male sustains a blow to the side of the head. A non-contrast CT shows a biconvex (lens-shaped) hyperdensity that does not cross suture lines. This hematoma is most commonly caused by the rupture of which vessel?",
    options: {
      A: "Bridging veins",
      B: "Middle meningeal artery",
      C: "Superior sagittal sinus",
      D: "Anterior cerebral artery"
    },
    correctAnswer: "B",
    explanation: "Biconvex (lens-shaped) hematoma $\\rightarrow$ Epidural Hematoma (Middle Meningeal Artery tear)."
  },
  {
    id: 68,
    subject: "INI-CET (Batch 7)",
    text: "An elderly patient on Warfarin for a prosthetic heart valve requires emergency surgery for a ruptured appendix. His INR is 4.5. The most rapid and effective way to reverse his anticoagulation for immediate surgery is the administration of:",
    options: {
      A: "Intravenous Vitamin K",
      B: "Fresh Frozen Plasma (FFP) or Prothrombin Complex Concentrate (PCC)",
      C: "Protamine sulfate",
      D: "Tranexamic acid"
    },
    correctAnswer: "B",
    explanation: "Rapid reversal of Warfarin for emergency surgery $\\rightarrow$ FFP or Prothrombin Complex Concentrate (PCC). (Vitamin K takes 12-24 hours)."
  },
  {
    id: 69,
    subject: "INI-CET (Batch 7)",
    text: "A 3-year-old child presents with microcytic, hypochromic anemia. To differentiate between Iron Deficiency Anemia (IDA) and Beta-Thalassemia Trait, the Mentzer Index (MCV/RBC count) is calculated. A Mentzer index of less than 13 strongly suggests:",
    options: {
      A: "Iron Deficiency Anemia",
      B: "Thalassemia Trait",
      C: "Sideroblastic Anemia",
      D: "Megaloblastic Anemia"
    },
    correctAnswer: "B",
    explanation: "Mentzer Index (MCV/RBC) < 13 $\\rightarrow$ Thalassemia Trait. (> 13 is Iron Deficiency)."
  },
  {
    id: 70,
    subject: "INI-CET (Batch 7)",
    text: "A 55-year-old female presents with painless jaundice, weight loss, and a palpable, non-tender gallbladder (Courvoisier's sign). CT scan confirms a mass in the head of the pancreas. Which tumor marker is most likely elevated?",
    options: {
      A: "CA-125",
      B: "CEA",
      C: "CA 19-9",
      D: "AFP"
    },
    correctAnswer: "C",
    explanation: "Tumor marker for Pancreatic Cancer $\\rightarrow$ CA 19-9."
  },
  {
    id: 71,
    subject: "INI-CET (Batch 7)",
    text: "A 10-year-old boy presents with a history of self-mutilation (biting his lips and fingers), severe gout, and intellectual disability. This X-linked recessive disorder is caused by a complete deficiency of:",
    options: {
      A: "Adenosine deaminase",
      B: "Hypoxanthine-guanine phosphoribosyltransferase (HGPRT)",
      C: "Glucose-6-phosphatase",
      D: "Phenylalanine hydroxylase"
    },
    correctAnswer: "B",
    explanation: "Self-mutilation + severe gout in a boy $\\rightarrow$ Lesch-Nyhan Syndrome (HGPRT deficiency)."
  },
  {
    id: 72,
    subject: "INI-CET (Batch 7)",
    text: "A 20-year-old male complains of severe muscle cramps and early fatigue during strenuous exercise. He notes that his urine sometimes turns burgundy-colored after workouts. Ischemic forearm exercise test shows no rise in blood lactate. The deficient enzyme is:",
    options: {
      A: "Muscle glycogen phosphorylase (McArdle's Disease)",
      B: "Liver glycogen phosphorylase (Hers' Disease)",
      C: "Lysosomal alpha-1,4-glucosidase (Pompe's Disease)",
      D: "Glucose-6-phosphatase (Von Gierke's Disease)"
    },
    correctAnswer: "A",
    explanation: "Muscle cramps + burgundy urine + no lactate rise on exercise $\\rightarrow$ McArdle's Disease (Muscle phosphorylase deficiency)."
  },
  {
    id: 73,
    subject: "INI-CET (Batch 7)",
    text: "During a total thyroidectomy, the surgeon must carefully identify and preserve the recurrent laryngeal nerve. This nerve supplies all the intrinsic muscles of the larynx EXCEPT the:",
    options: {
      A: "Posterior cricoarytenoid",
      B: "Lateral cricoarytenoid",
      C: "Thyroarytenoid",
      D: "Cricothyroid"
    },
    correctAnswer: "D",
    explanation: "Recurrent laryngeal nerve exception $\\rightarrow$ Cricothyroid muscle. (It is supplied by the External laryngeal nerve)."
  },
  {
    id: 74,
    subject: "INI-CET (Batch 7)",
    text: "A patient returning from a tropical region presents with high-grade fever, chills, and severe headache. Peripheral blood smear reveals multiple ring forms within RBCs and classic \"banana-shaped\" or \"crescent-shaped\" gametocytes. The causative organism is:",
    options: {
      A: "Plasmodium vivax",
      B: "Plasmodium falciparum",
      C: "Plasmodium ovale",
      D: "Plasmodium malariae"
    },
    correctAnswer: "B",
    explanation: "Banana/Crescent-shaped gametocytes $\\rightarrow$ Plasmodium falciparum."
  },
  {
    id: 75,
    subject: "INI-CET (Batch 7)",
    text: "A 22-year-old female uses tampons and presents with sudden onset high fever, vomiting, diarrhea, a diffuse macular erythematous rash (resembling a sunburn), and severe hypotension. The bacterial toxin responsible for this syndrome acts primarily as a:",
    options: {
      A: "Pore-forming cytolysin",
      B: "Superantigen, causing massive, non-specific T-cell activation",
      C: "Ribosylating enzyme inhibiting EF-2",
      D: "Protease cleaving SNARE proteins"
    },
    correctAnswer: "B",
    explanation: "Toxic Shock Syndrome Toxin (TSST-1) mechanism $\\rightarrow$ Superantigen (bridges MHC-II and TCR outside the normal groove, causing cytokine storm)."
  },
  {
    id: 76,
    subject: "INI-CET (Batch 7)",
    text: "A medical student evaluating a patient's visual fields notes a \"pie in the sky\" defect (contralateral superior quadrantanopia). This specific visual field defect is caused by a lesion in Meyer's loop, which runs through the:",
    options: {
      A: "Parietal lobe",
      B: "Temporal lobe",
      C: "Occipital lobe",
      D: "Frontal lobe"
    },
    correctAnswer: "B",
    explanation: "Pie in the sky (Superior quadrantanopia) $\\rightarrow$ Meyer's loop in the Temporal lobe."
  },
  {
    id: 77,
    subject: "INI-CET (Batch 7)",
    text: "In a randomized controlled trial (RCT), the primary purpose of \"randomization\" is to:",
    options: {
      A: "Ensure the study is double-blinded",
      B: "Eliminate known and unknown confounding variables by equally distributing them",
      C: "Increase the sample size",
      D: "Ensure 100% compliance from all participants"
    },
    correctAnswer: "B",
    explanation: "RCT Randomization purpose $\\rightarrow$ Equally distributes known AND unknown confounders."
  },
  {
    id: 78,
    subject: "INI-CET (Batch 7)",
    text: "A forensic pathologist notes that postmortem lividity (livor mortis) on a body is fully developed and does not blanch upon firm pressure. In a temperate climate, lividity typically becomes \"fixed\" at approximately:",
    options: {
      A: "1 - 2 hours",
      B: "6 - 8 hours",
      C: "12 - 14 hours",
      D: "24 - 36 hours"
    },
    correctAnswer: "B",
    explanation: "Livor mortis (lividity) fixation threshold $\\rightarrow$ 6 to 8 hours."
  },
  {
    id: 79,
    subject: "INI-CET (Batch 7)",
    text: "A 40-year-old male with acute pancreatitis is evaluated in the ER. According to the Ranson Criteria, which of the following parameters is assessed at 48 hours, NOT at admission?",
    options: {
      A: "Age > 55 years",
      B: "WBC > 16,000/mm³",
      C: "Blood glucose > 200 mg/dL",
      D: "Fall in Hematocrit > 10%"
    },
    correctAnswer: "D",
    explanation: "Ranson Criteria Exception $\\rightarrow$ Fall in Hematocrit > 10% is measured at 48 hours, NOT admission."
  },
  {
    id: 80,
    subject: "INI-CET (Batch 7)",
    text: "A 5-year-old child presents with chronic diarrhea, failure to thrive, and abdominal distension. Serology is positive for Anti-tissue transglutaminase (anti-tTG) IgA antibodies. Biopsy of the duodenum will most likely show:",
    options: {
      A: "Non-caseating granulomas",
      B: "Crypt abscesses",
      C: "Villous atrophy and crypt hyperplasia",
      D: "Abundant eosinophils"
    },
    correctAnswer: "C",
    explanation: "Anti-tTG + chronic diarrhea $\\rightarrow$ Celiac Disease (shows villous atrophy)."
  },
  {
    id: 81,
    subject: "INI-CET (Batch 7)",
    text: "A 30-year-old male sustains a stab wound to the neck. He is hemodynamically stable. Examination reveals an ipsilateral loss of motor function and fine touch, with a contralateral loss of pain and temperature below the level of the lesion. This is classic for:",
    options: {
      A: "Anterior cord syndrome",
      B: "Central cord syndrome",
      C: "Brown-Séquard syndrome",
      D: "Posterior cord syndrome"
    },
    correctAnswer: "C",
    explanation: "Hemisection of cord (Ipsi motor/touch loss, Contra pain/temp loss) $\\rightarrow$ Brown-Séquard Syndrome."
  },
  {
    id: 82,
    subject: "INI-CET (Batch 7)",
    text: "A 60-year-old female presents with severe pain and stiffness in her shoulders and hips, especially in the morning. Her ESR is 85 mm/hr. She also reports a new-onset, unilateral throbbing headache and jaw claudication. The most critical immediate step in management is:",
    options: {
      A: "MRI of the brain",
      B: "High-dose oral corticosteroids",
      C: "NSAIDs and physical therapy",
      D: "Temporal artery biopsy before starting any medication"
    },
    correctAnswer: "B",
    explanation: "Temporal Arteritis (Giant Cell Arteritis) emergency step $\\rightarrow$ High-dose steroids IMMEDIATELY to prevent blindness. (Do not wait for the biopsy)."
  },
  {
    id: 83,
    subject: "INI-CET (Batch 7)",
    text: "A 28-year-old primigravida at 34 weeks presents with intense, generalized pruritus that is worse at night and involves the palms and soles. She has no rash. Labs show elevated serum bile acids. Diagnosis?",
    options: {
      A: "Intrahepatic Cholestasis of Pregnancy (ICP)",
      B: "Pruritic Urticarial Papules and Plaques of Pregnancy (PUPPP)",
      C: "Pemphigoid Gestationis",
      D: "Acute Fatty Liver of Pregnancy"
    },
    correctAnswer: "A",
    explanation: "Pruritus of palms/soles in 3rd trimester + High bile acids $\\rightarrow$ Intrahepatic Cholestasis of Pregnancy."
  },
  {
    id: 84,
    subject: "INI-CET (Batch 7)",
    text: "A neonate presents with severe hypotonia, a large protruding tongue, umbilical hernia, and prolonged neonatal jaundice. The mother had poor prenatal care. This clinical picture strongly points to:",
    options: {
      A: "Down syndrome",
      B: "Congenital Hypothyroidism",
      C: "Beckwith-Wiedemann syndrome",
      D: "Phenylketonuria"
    },
    correctAnswer: "B",
    explanation: "Hypotonia + Large tongue + Prolonged jaundice in neonate $\\rightarrow$ Congenital Hypothyroidism."
  },
  {
    id: 85,
    subject: "INI-CET (Batch 7)",
    text: "A 45-year-old male with a history of alcohol use disorder presents with hematemesis. He has a history of severe, repeated retching and vomiting following a binge. Endoscopy shows a longitudinal mucosal tear at the gastroesophageal junction. Diagnosis?",
    options: {
      A: "Boerhaave syndrome",
      B: "Mallory-Weiss tear",
      C: "Esophageal varices",
      D: "Barrett's esophagus"
    },
    correctAnswer: "B",
    explanation: "Hematemesis after retching + mucosal tear at GE junction $\\rightarrow$ Mallory-Weiss tear."
  },
  {
    id: 86,
    subject: "INI-CET (Batch 7)",
    text: "A 55-year-old male complains of a resting tremor in his right hand. Examination reveals cogwheel rigidity and bradykinesia. The drug of choice for initiating treatment in this patient is:",
    options: {
      A: "Haloperidol",
      B: "Levodopa/Carbidopa",
      C: "Donepezil",
      D: "Fluoxetine"
    },
    correctAnswer: "B",
    explanation: "Resting tremor + Rigidity + Bradykinesia $\\rightarrow$ Parkinson's Disease. (Levodopa/Carbidopa is the primary treatment)."
  },
  {
    id: 87,
    subject: "INI-CET (Batch 7)",
    text: "A 25-year-old female presents with a painless, highly mobile, rubbery mass in her left breast. Ultrasound shows a well-circumscribed, solid oval lesion. This is the classic presentation of a:",
    options: {
      A: "Fibroadenoma",
      B: "Breast cyst",
      C: "Intraductal papilloma",
      D: "Phyllodes tumor"
    },
    correctAnswer: "A",
    explanation: "Painless, mobile, rubbery breast mass in young female $\\rightarrow$ Fibroadenoma."
  },
  {
    id: 88,
    subject: "INI-CET (Batch 7)",
    text: "A 30-year-old pregnant female at 16 weeks gestation undergoes a maternal serum quad screen. The results show low AFP, low Estriol, high hCG, and high Inhibin A. This pattern is highly suggestive of a fetal risk for:",
    options: {
      A: "Neural tube defects",
      B: "Trisomy 18 (Edwards syndrome)",
      C: "Trisomy 21 (Down syndrome)",
      D: "Trisomy 13 (Patau syndrome)"
    },
    correctAnswer: "C",
    explanation: "Quad screen: HIgh hCG & HIgh Inhibin A $\\rightarrow$ Trisomy 21 (Down syndrome)."
  },
  {
    id: 89,
    subject: "INI-CET (Batch 7)",
    text: "A patient is brought to the ER with severe, crushing substernal chest pain. The ECG shows ST-segment elevations in leads II, III, and aVF. Which wall of the heart is experiencing the infarction?",
    options: {
      A: "Anterior wall",
      B: "Lateral wall",
      C: "Inferior wall",
      D: "Posterior wall"
    },
    correctAnswer: "C",
    explanation: "ST elevation in II, III, aVF $\\rightarrow$ Inferior Wall MI (RCA territory)."
  },
  {
    id: 90,
    subject: "INI-CET (Batch 7)",
    text: "A 22-year-old male presents with acute severe scrotal pain. Examination reveals a high-riding, transversely oriented testis with an absent cremasteric reflex. The most critical next step is:",
    options: {
      A: "Urine culture",
      B: "Scrotal ultrasound with Doppler",
      C: "Trial of antibiotics",
      D: "Immediate surgical exploration"
    },
    correctAnswer: "D",
    explanation: "Acute scrotal pain + high-riding testis + absent cremasteric reflex $\\rightarrow$ Testicular Torsion (Needs immediate surgery, do not delay for USG if classic)."
  },
  {
    id: 91,
    subject: "INI-CET (Batch 7)",
    text: "A 60-year-old male with a 40-pack-year smoking history presents with painless, gross hematuria. This is the classic, high-yield presentation for which malignancy?",
    options: {
      A: "Renal cell carcinoma",
      B: "Prostate cancer",
      C: "Urothelial (Bladder) carcinoma",
      D: "Testicular cancer"
    },
    correctAnswer: "C",
    explanation: "Painless gross hematuria in a smoker $\\rightarrow$ Bladder (Urothelial) Cancer."
  },
  {
    id: 92,
    subject: "INI-CET (Batch 7)",
    text: "A 35-year-old female with hyperthyroidism undergoes a total thyroidectomy. On post-op day 1, she develops stridor and severe respiratory distress. Her calcium levels are completely normal. The most likely complication is:",
    options: {
      A: "Hypocalcemia-induced laryngospasm",
      B: "Bilateral recurrent laryngeal nerve injury",
      C: "Unilateral recurrent laryngeal nerve injury",
      D: "Tracheomalacia"
    },
    correctAnswer: "B",
    explanation: "Post-thyroidectomy immediate stridor + normal calcium $\\rightarrow$ Bilateral Recurrent Laryngeal Nerve injury."
  },
  {
    id: 93,
    subject: "INI-CET (Batch 7)",
    text: "A 45-year-old male presents with sudden onset, excruciating, tearing pain radiating to his back. His blood pressure is 210/110 mmHg. A chest X-ray shows a widened mediastinum. Diagnosis?",
    options: {
      A: "Acute myocardial infarction",
      B: "Pulmonary embolism",
      C: "Aortic dissection",
      D: "Cardiac tamponade"
    },
    correctAnswer: "C",
    explanation: "Tearing chest/back pain + very high BP + widened mediastinum $\\rightarrow$ Aortic Dissection."
  },
  {
    id: 94,
    subject: "INI-CET (Batch 7)",
    text: "A 28-year-old female presents with a malar rash, joint pain, and photosensitivity. She has a positive ANA and a positive Anti-Smith antibody. Which type of hypersensitivity reaction primarily drives the tissue damage (e.g., nephritis) in this disease?",
    options: {
      A: "Type I Hypersensitivity",
      B: "Type II Hypersensitivity",
      C: "Type III Hypersensitivity",
      D: "Type IV Hypersensitivity"
    },
    correctAnswer: "C",
    explanation: "SLE tissue damage mechanism $\\rightarrow$ Type III Hypersensitivity (Immune complex deposition in glomeruli/skin)."
  },
  {
    id: 95,
    subject: "INI-CET (Batch 7)",
    text: "A 50-year-old female presents with fatigue and a completely smooth, beefy red tongue. Labs reveal macrocytic anemia and hypersegmented neutrophils. What is the fundamental cause of her condition?",
    options: {
      A: "Autoantibodies against gastric parietal cells",
      B: "Chronic blood loss",
      C: "Dietary deficiency of Iron",
      D: "Mutation in the beta-globin gene"
    },
    correctAnswer: "A",
    explanation: "Megaloblastic anemia + neurological signs $\\rightarrow$ Pernicious anemia (caused by Autoantibodies against parietal cells $\\rightarrow$ loss of Intrinsic Factor $\\rightarrow$ B12 deficiency)."
  },
  {
    id: 96,
    subject: "INI-CET (Batch 7)",
    text: "A 15-month-old child is brought to the clinic for a well-child check. According to standard developmental milestones, which of the following fine motor tasks should a child typically be able to perform by 15 months?",
    options: {
      A: "Build a tower of 2 cubes",
      B: "Build a tower of 6 cubes",
      C: "Use a neat pincer grasp",
      D: "Copy a circle"
    },
    correctAnswer: "A",
    explanation: "Fine motor milestone cutoff: 15 months $\\rightarrow$ Tower of 2 cubes. (Tower of 6 cubes is 24 months)."
  },
  {
    id: 97,
    subject: "INI-CET (Batch 7)",
    text: "A 30-year-old male is evaluated for infertility. Semen analysis shows a normal sperm count but entirely immotile sperm. He also has a history of chronic sinusitis and situs inversus. This triad defines:",
    options: {
      A: "Cystic Fibrosis",
      B: "Kartagener syndrome (Primary Ciliary Dyskinesia)",
      C: "Klinefelter syndrome",
      D: "Kallmann syndrome"
    },
    correctAnswer: "B",
    explanation: "Immotile sperm + chronic sinusitis + situs inversus $\\rightarrow$ Kartagener syndrome."
  },
  {
    id: 98,
    subject: "INI-CET (Batch 7)",
    text: "A patient is prescribed an ACE inhibitor (Lisinopril) for hypertension. After a week, he develops a persistent, dry, hacking cough. This common side effect is caused by the accumulation of:",
    options: {
      A: "Angiotensin II",
      B: "Bradykinin",
      C: "Aldosterone",
      D: "Renin"
    },
    correctAnswer: "B",
    explanation: "ACE Inhibitor cough mechanism $\\rightarrow$ Accumulation of Bradykinin."
  },
  {
    id: 99,
    subject: "INI-CET (Batch 7)",
    text: "A 25-year-old male presents with a painful, swollen right knee. Joint aspiration reveals cloudy synovial fluid. Under polarized light microscopy, there are numerous needle-shaped, strongly negatively birefringent crystals. Diagnosis?",
    options: {
      A: "Pseudogout",
      B: "Gout",
      C: "Septic arthritis",
      D: "Rheumatoid arthritis"
    },
    correctAnswer: "B",
    explanation: "Needle-shaped, negative birefringent crystals $\\rightarrow$ Gout (Monosodium urate)."
  },
  {
    id: 100,
    subject: "INI-CET (Batch 7)",
    text: "A 55-year-old male is brought to the ER following an MVA. He has a fractured pelvis and blood at the urethral meatus. He is unable to void. What is the absolute CONTRAINDICATION in his immediate management?",
    options: {
      A: "Suprapubic cystostomy",
      B: "Retrograde urethrogram",
      C: "Insertion of a Foley catheter",
      D: "Intravenous fluids"
    },
    correctAnswer: "C",
    explanation: "Blood at urethral meatus + pelvic fracture $\\rightarrow$ Absolute contraindication to Foley catheter insertion (Requires retrograde urethrogram first)."
  },
];
