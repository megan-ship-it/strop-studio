// ============================================================
// Valkyrie Protocol — Exercise Library
// ============================================================
// Each exercise entry contains:
//   name        – display name (matches the fantasy-themed name)
//   category    – exercise grouping
//   aka         – { name, url } alternate real-world name + Wikipedia link
// ============================================================

const ALL_EXERCISES = {

  // ── WARMUP ────────────────────────────────────────────────
  "Barefoot Run in Place": {
    name: "Barefoot Run in Place",
    category: "warmup",
    aka: { name: "stationary running", url: "https://en.wikipedia.org/wiki/Running" },
  },
  "Arm Circles": {
    name: "Arm Circles",
    category: "warmup",
    aka: { name: "shoulder circumduction", url: "https://en.wikipedia.org/wiki/Circumduction_(anatomy)" },
  },
  "Hip Openers": {
    name: "Hip Openers",
    category: "warmup",
    aka: { name: "hip circumduction", url: "https://en.wikipedia.org/wiki/Hip" },
  },
  "Spinal Waves": {
    name: "Spinal Waves",
    category: "warmup",
    aka: { name: "vertebral roll-down", url: "https://en.wikipedia.org/wiki/Vertebral_column" },
  },
  "Shoulder Pass-Throughs": {
    name: "Shoulder Pass-Throughs",
    category: "warmup",
    aka: { name: "shoulder dislocates", url: "https://en.wikipedia.org/wiki/Shoulder_mobility" },
  },
  "Ankle Rolls": {
    name: "Ankle Rolls",
    category: "warmup",
    aka: { name: "ankle circumduction", url: "https://en.wikipedia.org/wiki/Ankle" },
  },
  "Bodyweight Good Mornings": {
    name: "Bodyweight Good Mornings",
    category: "warmup",
    aka: { name: "standing hip hinge", url: "https://en.wikipedia.org/wiki/Good-morning_(exercise)" },
  },
  "Cat-Cow Stretches": {
    name: "Cat-Cow Stretches",
    category: "warmup",
    aka: { name: "Marjaryasana-Bitilasana", url: "https://en.wikipedia.org/wiki/Cat%E2%80%93cow_stretch" },
  },
  "Light Jumping Jacks": {
    name: "Light Jumping Jacks",
    category: "warmup",
    aka: { name: "side-straddle hops", url: "https://en.wikipedia.org/wiki/Jumping_jack_(exercise)" },
  },
  "Wrist Circles": {
    name: "Wrist Circles",
    category: "warmup",
    aka: { name: "wrist circumduction", url: "https://en.wikipedia.org/wiki/Wrist" },
  },
  "Chest Openers": {
    name: "Chest Openers",
    category: "warmup",
    aka: { name: "pectoral stretch", url: "https://en.wikipedia.org/wiki/Pectoralis_major" },
  },
  "Scapular Push-ups": {
    name: "Scapular Push-ups",
    category: "warmup",
    aka: { name: "serratus push-ups", url: "https://en.wikipedia.org/wiki/Serratus_anterior_muscle" },
  },
  "Leg Swings Front-to-Back": {
    name: "Leg Swings Front-to-Back",
    category: "warmup",
    aka: { name: "sagittal leg pendulums", url: "https://en.wikipedia.org/wiki/Hip_flexor" },
  },
  "Walking Knee Hugs": {
    name: "Walking Knee Hugs",
    category: "warmup",
    aka: { name: "walking glute stretch", url: "https://en.wikipedia.org/wiki/Gluteus_maximus" },
  },
  "Deep Squat Hold": {
    name: "Deep Squat Hold",
    category: "warmup",
    aka: { name: "third-world squat", url: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
  },
  "March in Place": {
    name: "March in Place",
    category: "warmup",
    aka: { name: "stationary marching", url: "https://en.wikipedia.org/wiki/Warming_up" },
  },
  "Butt Kickers": {
    name: "Butt Kickers",
    category: "warmup",
    aka: { name: "heel-to-glute drill", url: "https://en.wikipedia.org/wiki/Hamstring" },
  },
  "High Knee Pulls": {
    name: "High Knee Pulls",
    category: "warmup",
    aka: { name: "standing hip flexion drill", url: "https://en.wikipedia.org/wiki/Hip_flexor" },
  },

  // ── LOWER BODY ────────────────────────────────────────────
  "Shieldwall Squats": {
    name: "Shieldwall Squats",
    category: "lower-body",
    aka: { name: "air squats", url: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
  },
  "Lunge Advances": {
    name: "Lunge Advances",
    category: "lower-body",
    aka: { name: "walking lunges", url: "https://en.wikipedia.org/wiki/Lunge_(exercise)" },
  },
  "Glute Bridges": {
    name: "Glute Bridges",
    category: "lower-body",
    aka: { name: "supine hip extension", url: "https://en.wikipedia.org/wiki/Glute_bridge" },
  },
  "Wall Sit": {
    name: "Wall Sit",
    category: "lower-body",
    aka: { name: "isometric squat hold", url: "https://en.wikipedia.org/wiki/Wall_sit" },
  },
  "Sumo Squats": {
    name: "Sumo Squats",
    category: "lower-body",
    aka: { name: "plie squats", url: "https://en.wikipedia.org/wiki/Squat_(exercise)#Sumo_squat" },
  },
  "Hip Thrusts": {
    name: "Hip Thrusts",
    category: "lower-body",
    aka: { name: "glute bridge off bench", url: "https://en.wikipedia.org/wiki/Hip_thrust" },
  },
  "Stone Lift Deadlifts": {
    name: "Stone Lift Deadlifts",
    category: "lower-body",
    aka: { name: "Romanian deadlifts", url: "https://en.wikipedia.org/wiki/Deadlift#Romanian_deadlift" },
  },
  "Lateral Lunges": {
    name: "Lateral Lunges",
    category: "lower-body",
    aka: { name: "side lunges", url: "https://en.wikipedia.org/wiki/Lunge_(exercise)" },
  },
  "Single Leg Deadlift": {
    name: "Single Leg Deadlift",
    category: "lower-body",
    aka: { name: "stork deadlift", url: "https://en.wikipedia.org/wiki/Deadlift" },
  },
  "Bulgarian Split Squats": {
    name: "Bulgarian Split Squats",
    category: "lower-body",
    aka: { name: "rear-foot elevated split squats", url: "https://en.wikipedia.org/wiki/Lunge_(exercise)#Bulgarian_split_squat" },
  },
  "Single Leg Glute Bridge": {
    name: "Single Leg Glute Bridge",
    category: "lower-body",
    aka: { name: "unilateral hip extension", url: "https://en.wikipedia.org/wiki/Glute_bridge" },
  },
  "Pistol Squats": {
    name: "Pistol Squats",
    category: "lower-body",
    aka: { name: "single-leg deep knee bend", url: "https://en.wikipedia.org/wiki/Squat_(exercise)#Pistol_squat" },
  },
  "Slow Squats": {
    name: "Slow Squats",
    category: "lower-body",
    aka: { name: "time-under-tension squats", url: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
  },

  // ── UPPER BODY — PUSH ────────────────────────────────────
  "Ground-to-Shield Push-ups": {
    name: "Ground-to-Shield Push-ups",
    category: "upper-body-push",
    aka: { name: "floor presses (bodyweight)", url: "https://en.wikipedia.org/wiki/Push-up" },
  },
  "Tricep Dips": {
    name: "Tricep Dips",
    category: "upper-body-push",
    aka: { name: "bench dips", url: "https://en.wikipedia.org/wiki/Dip_(exercise)" },
  },
  "Diamond Push-ups": {
    name: "Diamond Push-ups",
    category: "upper-body-push",
    aka: { name: "close-grip push-ups", url: "https://en.wikipedia.org/wiki/Push-up#Diamond_push-up" },
  },
  "Pike Push-ups": {
    name: "Pike Push-ups",
    category: "upper-body-push",
    aka: { name: "downward dog press", url: "https://en.wikipedia.org/wiki/Push-up#Pike_push-up" },
  },
  "Archer Push-ups": {
    name: "Archer Push-ups",
    category: "upper-body-push",
    aka: { name: "unilateral push-ups", url: "https://en.wikipedia.org/wiki/Push-up#Archer_push-up" },
  },
  "Dive Bomber Push-ups": {
    name: "Dive Bomber Push-ups",
    category: "upper-body-push",
    aka: { name: "Hindu push-ups", url: "https://en.wikipedia.org/wiki/Hindu_push-up" },
  },
  "Plank to Push-up": {
    name: "Plank to Push-up",
    category: "upper-body-push",
    aka: { name: "up-downs", url: "https://en.wikipedia.org/wiki/Push-up" },
  },

  // ── UPPER BODY — PULL ────────────────────────────────────
  "Table Body Rows": {
    name: "Table Body Rows",
    category: "upper-body-pull",
    aka: { name: "inverted rows", url: "https://en.wikipedia.org/wiki/Bodyweight_row" },
  },
  "Prone Y Raises": {
    name: "Prone Y Raises",
    category: "upper-body-pull",
    aka: { name: "lower trapezius raises", url: "https://en.wikipedia.org/wiki/Trapezius_muscle" },
  },
  "Superman Rows": {
    name: "Superman Rows",
    category: "upper-body-pull",
    aka: { name: "prone pull-backs", url: "https://en.wikipedia.org/wiki/Bent-over_row" },
  },
  "Prone W Pulls": {
    name: "Prone W Pulls",
    category: "upper-body-pull",
    aka: { name: "scapular retraction holds", url: "https://en.wikipedia.org/wiki/Trapezius_muscle" },
  },

  // ── CORE ──────────────────────────────────────────────────
  "Plank Hold": {
    name: "Plank Hold",
    category: "core",
    aka: { name: "front support hold", url: "https://en.wikipedia.org/wiki/Plank_(exercise)" },
  },
  "Dead Bug": {
    name: "Dead Bug",
    category: "core",
    aka: { name: "contralateral limb extension", url: "https://en.wikipedia.org/wiki/Dead_bug_(exercise)" },
  },
  "Bicycle Crunches": {
    name: "Bicycle Crunches",
    category: "core",
    aka: { name: "cross-body crunches", url: "https://en.wikipedia.org/wiki/Crunch_(exercise)#Bicycle_crunch" },
  },
  "Plank Shoulder Taps": {
    name: "Plank Shoulder Taps",
    category: "core",
    aka: { name: "anti-rotation plank", url: "https://en.wikipedia.org/wiki/Plank_(exercise)" },
  },
  "V-Ups": {
    name: "V-Ups",
    category: "core",
    aka: { name: "jackknife sit-ups", url: "https://en.wikipedia.org/wiki/Crunch_(exercise)" },
  },
  "Hollow Body Hold": {
    name: "Hollow Body Hold",
    category: "core",
    aka: { name: "dish hold", url: "https://en.wikipedia.org/wiki/Core_stability" },
  },
  "Plank Pull-Throughs": {
    name: "Plank Pull-Throughs",
    category: "core",
    aka: { name: "anti-rotation drag", url: "https://en.wikipedia.org/wiki/Plank_(exercise)" },
  },

  // ── EXPLOSIVE ─────────────────────────────────────────────
  "Horse Vault Jumps": {
    name: "Horse Vault Jumps",
    category: "explosive",
    aka: { name: "jump squats", url: "https://en.wikipedia.org/wiki/Plyometrics" },
  },
  "High Knees": {
    name: "High Knees",
    category: "explosive",
    aka: { name: "running A-skips", url: "https://en.wikipedia.org/wiki/High_knees" },
  },
  "Star Jumps": {
    name: "Star Jumps",
    category: "explosive",
    aka: { name: "squat jumping jacks", url: "https://en.wikipedia.org/wiki/Jumping_jack_(exercise)" },
  },
  "Mountain Climbers": {
    name: "Mountain Climbers",
    category: "explosive",
    aka: { name: "running planks", url: "https://en.wikipedia.org/wiki/Mountain_climber_(exercise)" },
  },
  "Sprawl & Rise": {
    name: "Sprawl & Rise",
    category: "explosive",
    aka: { name: "sprawl drill", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },
  "Speed Skaters": {
    name: "Speed Skaters",
    category: "explosive",
    aka: { name: "lateral bounds", url: "https://en.wikipedia.org/wiki/Plyometrics" },
  },
  "Tuck Jumps": {
    name: "Tuck Jumps",
    category: "explosive",
    aka: { name: "knee-to-chest jumps", url: "https://en.wikipedia.org/wiki/Plyometrics" },
  },
  "Broad Jumps": {
    name: "Broad Jumps",
    category: "explosive",
    aka: { name: "standing long jumps", url: "https://en.wikipedia.org/wiki/Plyometrics" },
  },

  // ── BLADE ─────────────────────────────────────────────────
  "Sword Raises": {
    name: "Sword Raises",
    category: "blade",
    aka: { name: "anterior delt raises", url: "https://en.wikipedia.org/wiki/Deltoid_muscle" },
  },
  "Shield Hold": {
    name: "Shield Hold",
    category: "blade",
    aka: { name: "isometric lateral hold", url: "https://en.wikipedia.org/wiki/Deltoid_muscle" },
  },
  "Blade Arm Curls": {
    name: "Blade Arm Curls",
    category: "blade",
    aka: { name: "hammer curls", url: "https://en.wikipedia.org/wiki/Bicep_curl" },
  },
  "War Chops": {
    name: "War Chops",
    category: "blade",
    aka: { name: "woodchoppers", url: "https://en.wikipedia.org/wiki/Core_stability" },
  },
  "Halo Circles": {
    name: "Halo Circles",
    category: "blade",
    aka: { name: "around-the-world press", url: "https://en.wikipedia.org/wiki/Shoulder_exercise" },
  },
  "Cross-Body Strikes": {
    name: "Cross-Body Strikes",
    category: "blade",
    aka: { name: "cable chops (floor to ceiling)", url: "https://en.wikipedia.org/wiki/Core_stability" },
  },
  "Overhead Skull Crushers": {
    name: "Overhead Skull Crushers",
    category: "blade",
    aka: { name: "French press", url: "https://en.wikipedia.org/wiki/Skull_crusher" },
  },
  "Lateral Raise to Press": {
    name: "Lateral Raise to Press",
    category: "blade",
    aka: { name: "Lu raises", url: "https://en.wikipedia.org/wiki/Shoulder_exercise" },
  },
  "Figure Eight Passes": {
    name: "Figure Eight Passes",
    category: "blade",
    aka: { name: "kettlebell figure-8s", url: "https://en.wikipedia.org/wiki/Kettlebell" },
  },
  "Blade Thrusters": {
    name: "Blade Thrusters",
    category: "blade",
    aka: { name: "dumbbell thrusters", url: "https://en.wikipedia.org/wiki/Thruster_(exercise)" },
  },
  "Arnold Press": {
    name: "Arnold Press",
    category: "blade",
    aka: { name: "rotating shoulder press", url: "https://en.wikipedia.org/wiki/Arnold_press" },
  },
  "Weighted Warrior Jacks": {
    name: "Weighted Warrior Jacks",
    category: "blade",
    aka: { name: "overhead jumping jacks", url: "https://en.wikipedia.org/wiki/Jumping_jack_(exercise)" },
  },

  // ── SKIRMISH ──────────────────────────────────────────────
  "Standing Knee Drives": {
    name: "Standing Knee Drives",
    category: "skirmish",
    aka: { name: "standing hip flexion drill", url: "https://en.wikipedia.org/wiki/Hip_flexor" },
  },
  "Calf Raises (Tempo)": {
    name: "Calf Raises (Tempo)",
    category: "skirmish",
    aka: { name: "heel raises", url: "https://en.wikipedia.org/wiki/Calf_raise" },
  },
  "Banded Walks": {
    name: "Banded Walks",
    category: "skirmish",
    aka: { name: "lateral monster walks", url: "https://en.wikipedia.org/wiki/Gluteus_medius" },
  },
  "Hamstring Walkouts": {
    name: "Hamstring Walkouts",
    category: "skirmish",
    aka: { name: "supine leg walkouts", url: "https://en.wikipedia.org/wiki/Hamstring" },
  },
  "Single Leg Hip Thrust": {
    name: "Single Leg Hip Thrust",
    category: "skirmish",
    aka: { name: "unilateral glute bridge off bench", url: "https://en.wikipedia.org/wiki/Hip_thrust" },
  },
  "Stiff Leg Bounds": {
    name: "Stiff Leg Bounds",
    category: "skirmish",
    aka: { name: "pogo hops", url: "https://en.wikipedia.org/wiki/Plyometrics" },
  },
  "Single Leg Calf Raise": {
    name: "Single Leg Calf Raise",
    category: "skirmish",
    aka: { name: "unilateral heel raise", url: "https://en.wikipedia.org/wiki/Calf_raise" },
  },
  "Lateral Bound & Stick": {
    name: "Lateral Bound & Stick",
    category: "skirmish",
    aka: { name: "skater hops", url: "https://en.wikipedia.org/wiki/Plyometrics" },
  },
  "Sprinter Step-Ups": {
    name: "Sprinter Step-Ups",
    category: "skirmish",
    aka: { name: "explosive step-ups", url: "https://en.wikipedia.org/wiki/Step_up_(exercise)" },
  },
  "Box Jump & Stick": {
    name: "Box Jump & Stick",
    category: "skirmish",
    aka: { name: "depth landings", url: "https://en.wikipedia.org/wiki/Box_jump" },
  },
  "Single Leg Box Step-Up to Knee Drive": {
    name: "Single Leg Box Step-Up to Knee Drive",
    category: "skirmish",
    aka: { name: "unilateral step-up with drive", url: "https://en.wikipedia.org/wiki/Step_up_(exercise)" },
  },

  // ── GRIND ─────────────────────────────────────────────────
  "Tempo Squats (4-1-4)": {
    name: "Tempo Squats (4-1-4)",
    category: "grind",
    aka: { name: "slow eccentrics", url: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
  },
  "Pause Push-ups": {
    name: "Pause Push-ups",
    category: "grind",
    aka: { name: "isometric push-ups", url: "https://en.wikipedia.org/wiki/Push-up" },
  },
  "Iso Lunge Hold": {
    name: "Iso Lunge Hold",
    category: "grind",
    aka: { name: "split squat isometric hold", url: "https://en.wikipedia.org/wiki/Lunge_(exercise)" },
  },
  "Slow Eccentric Push-ups": {
    name: "Slow Eccentric Push-ups",
    category: "grind",
    aka: { name: "negative push-ups", url: "https://en.wikipedia.org/wiki/Push-up" },
  },
  "1.5 Rep Squats": {
    name: "1.5 Rep Squats",
    category: "grind",
    aka: { name: "one-and-a-quarter squats", url: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
  },
  "Wall Sit March": {
    name: "Wall Sit March",
    category: "grind",
    aka: { name: "isometric squat leg alternation", url: "https://en.wikipedia.org/wiki/Wall_sit" },
  },
  "Eccentric Single Leg Deadlift": {
    name: "Eccentric Single Leg Deadlift",
    category: "grind",
    aka: { name: "slow negative stork deadlift", url: "https://en.wikipedia.org/wiki/Deadlift" },
  },
  "Plank Body Saw": {
    name: "Plank Body Saw",
    category: "grind",
    aka: { name: "ab wheel rollout (bodyweight)", url: "https://en.wikipedia.org/wiki/Plank_(exercise)" },
  },
  "Tempo Bulgarian Split Squats": {
    name: "Tempo Bulgarian Split Squats",
    category: "grind",
    aka: { name: "slow rear-foot elevated split squats", url: "https://en.wikipedia.org/wiki/Lunge_(exercise)#Bulgarian_split_squat" },
  },
  "Dead Stop Push-ups": {
    name: "Dead Stop Push-ups",
    category: "grind",
    aka: { name: "reset push-ups", url: "https://en.wikipedia.org/wiki/Push-up" },
  },
  "Hollow Body Rocks": {
    name: "Hollow Body Rocks",
    category: "grind",
    aka: { name: "dish rocks", url: "https://en.wikipedia.org/wiki/Core_stability" },
  },
  "Wall Sit to Single Leg Extension": {
    name: "Wall Sit to Single Leg Extension",
    category: "grind",
    aka: { name: "isometric single-leg quad hold", url: "https://en.wikipedia.org/wiki/Wall_sit" },
  },

  // ── BLITZ ─────────────────────────────────────────────────
  "Burpee Broad Jumps": {
    name: "Burpee Broad Jumps",
    category: "blitz",
    aka: { name: "traveling burpees", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },
  "Squat Jump to Push-up": {
    name: "Squat Jump to Push-up",
    category: "blitz",
    aka: { name: "squat thrust complex", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },
  "High Knees to Drop Squat": {
    name: "High Knees to Drop Squat",
    category: "blitz",
    aka: { name: "sprint-to-squat drill", url: "https://en.wikipedia.org/wiki/High_knees" },
  },
  "Plank Jack to Tuck Jump": {
    name: "Plank Jack to Tuck Jump",
    category: "blitz",
    aka: { name: "plank jacks with plyometric finish", url: "https://en.wikipedia.org/wiki/Plyometrics" },
  },
  "Devil Press": {
    name: "Devil Press",
    category: "blitz",
    aka: { name: "dumbbell burpee snatch", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },
  "Chest-to-Floor Burpees": {
    name: "Chest-to-Floor Burpees",
    category: "blitz",
    aka: { name: "full-contact burpees", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },
  "Lateral Burpees": {
    name: "Lateral Burpees",
    category: "blitz",
    aka: { name: "transverse burpees", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },
  "Storm Mountain Climbers": {
    name: "Storm Mountain Climbers",
    category: "blitz",
    aka: { name: "Tabata mountain climbers", url: "https://en.wikipedia.org/wiki/High-intensity_interval_training" },
  },
  "Burpee to Box Jump": {
    name: "Burpee to Box Jump",
    category: "blitz",
    aka: { name: "burpee box jump", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },

  // ── HEAVY ─────────────────────────────────────────────────
  "Goblet Squats": {
    name: "Goblet Squats",
    category: "heavy",
    aka: { name: "front-loaded squats", url: "https://en.wikipedia.org/wiki/Squat_(exercise)#Goblet_squat" },
  },
  "Weighted Reverse Lunges": {
    name: "Weighted Reverse Lunges",
    category: "heavy",
    aka: { name: "loaded step-back lunges", url: "https://en.wikipedia.org/wiki/Lunge_(exercise)" },
  },
  "Two-Handed Swings": {
    name: "Two-Handed Swings",
    category: "heavy",
    aka: { name: "hip hinge ballistics", url: "https://en.wikipedia.org/wiki/Kettlebell_swing" },
  },
  "Floor Press": {
    name: "Floor Press",
    category: "heavy",
    aka: { name: "supine chest press (no bench)", url: "https://en.wikipedia.org/wiki/Floor_press" },
  },
  "Loaded Hinges": {
    name: "Loaded Hinges",
    category: "heavy",
    aka: { name: "stiff-leg deadlifts", url: "https://en.wikipedia.org/wiki/Deadlift#Romanian_deadlift" },
  },
  "Sumo Squat to High Pull": {
    name: "Sumo Squat to High Pull",
    category: "heavy",
    aka: { name: "wide-stance upright row", url: "https://en.wikipedia.org/wiki/Squat_(exercise)" },
  },
  "Weighted Burpees": {
    name: "Weighted Burpees",
    category: "heavy",
    aka: { name: "man-makers (no push-up)", url: "https://en.wikipedia.org/wiki/Burpee_(exercise)" },
  },
  "Thrusters": {
    name: "Thrusters",
    category: "heavy",
    aka: { name: "squat-to-press", url: "https://en.wikipedia.org/wiki/Thruster_(exercise)" },
  },
  "Renegade Rows": {
    name: "Renegade Rows",
    category: "heavy",
    aka: { name: "plank rows", url: "https://en.wikipedia.org/wiki/Bent-over_row" },
  },
  "Weighted Step-Ups": {
    name: "Weighted Step-Ups",
    category: "heavy",
    aka: { name: "loaded box step-ups", url: "https://en.wikipedia.org/wiki/Step_up_(exercise)" },
  },

  // ── COOLDOWN / MINDFUL ────────────────────────────────────
  "Standing Forward Fold": {
    name: "Standing Forward Fold",
    category: "cooldown",
    aka: { name: "Uttanasana", url: "https://en.wikipedia.org/wiki/Uttanasana" },
  },
  "Child's Pose": {
    name: "Child's Pose",
    category: "cooldown",
    aka: { name: "Balasana", url: "https://en.wikipedia.org/wiki/Balasana" },
  },
  "Supine Twist": {
    name: "Supine Twist",
    category: "cooldown",
    aka: { name: "Supta Matsyendrasana", url: "https://en.wikipedia.org/wiki/Supta_Matsyendrasana" },
  },
  "Reclined Butterfly": {
    name: "Reclined Butterfly",
    category: "cooldown",
    aka: { name: "Supta Baddha Konasana", url: "https://en.wikipedia.org/wiki/Baddha_Konasana" },
  },
  "Figure Four Stretch": {
    name: "Figure Four Stretch",
    category: "cooldown",
    aka: { name: "piriformis stretch", url: "https://en.wikipedia.org/wiki/Piriformis_muscle" },
  },
  "Ragdoll Hang": {
    name: "Ragdoll Hang",
    category: "cooldown",
    aka: { name: "Uttanasana with arm bind", url: "https://en.wikipedia.org/wiki/Uttanasana" },
  },
  "Pigeon Pose": {
    name: "Pigeon Pose",
    category: "cooldown",
    aka: { name: "Eka Pada Rajakapotasana", url: "https://en.wikipedia.org/wiki/Eka_Pada_Rajakapotasana" },
  },
  "Box Breathing": {
    name: "Box Breathing",
    category: "cooldown",
    aka: { name: "tactical breathing", url: "https://en.wikipedia.org/wiki/Pranayama" },
  },
  "4-7-8 Breathing": {
    name: "4-7-8 Breathing",
    category: "cooldown",
    aka: { name: "Pranayama relaxing breath", url: "https://en.wikipedia.org/wiki/Pranayama" },
  },
  "Belly Breathing": {
    name: "Belly Breathing",
    category: "cooldown",
    aka: { name: "diaphragmatic breathing", url: "https://en.wikipedia.org/wiki/Diaphragmatic_breathing" },
  },
  "Grounding (5-4-3-2-1)": {
    name: "Grounding (5-4-3-2-1)",
    category: "cooldown",
    aka: { name: "sensory anchoring technique", url: "https://en.wikipedia.org/wiki/Grounding_(mental_health_technique)" },
  },
  "Body Scan": {
    name: "Body Scan",
    category: "cooldown",
    aka: { name: "Vipassana body awareness", url: "https://en.wikipedia.org/wiki/Vipassan%C4%81" },
  },
  "Warrior I": {
    name: "Warrior I",
    category: "cooldown",
    aka: { name: "Virabhadrasana I", url: "https://en.wikipedia.org/wiki/Virabhadrasana_I" },
  },
  "Warrior II": {
    name: "Warrior II",
    category: "cooldown",
    aka: { name: "Virabhadrasana II", url: "https://en.wikipedia.org/wiki/Virabhadrasana_II" },
  },
  "Warrior III": {
    name: "Warrior III",
    category: "cooldown",
    aka: { name: "Virabhadrasana III", url: "https://en.wikipedia.org/wiki/Virabhadrasana_III" },
  },
  "Tree Pose": {
    name: "Tree Pose",
    category: "cooldown",
    aka: { name: "Vrksasana", url: "https://en.wikipedia.org/wiki/Vriksasana" },
  },
  "Chair Pose": {
    name: "Chair Pose",
    category: "cooldown",
    aka: { name: "Utkatasana", url: "https://en.wikipedia.org/wiki/Utkatasana" },
  },
  "Crescent Lunge": {
    name: "Crescent Lunge",
    category: "cooldown",
    aka: { name: "Anjaneyasana", url: "https://en.wikipedia.org/wiki/Anjaneyasana" },
  },
  "Cat-Cow Flow": {
    name: "Cat-Cow Flow",
    category: "cooldown",
    aka: { name: "Marjaryasana-Bitilasana flow", url: "https://en.wikipedia.org/wiki/Cat%E2%80%93cow_stretch" },
  },
  "Downward Dog": {
    name: "Downward Dog",
    category: "cooldown",
    aka: { name: "Adho Mukha Svanasana", url: "https://en.wikipedia.org/wiki/Adho_Mukha_Svanasana" },
  },
  "Seated Spinal Twist": {
    name: "Seated Spinal Twist",
    category: "cooldown",
    aka: { name: "Ardha Matsyendrasana", url: "https://en.wikipedia.org/wiki/Ardha_Matsyendrasana" },
  },
  "Legs Up the Wall": {
    name: "Legs Up the Wall",
    category: "cooldown",
    aka: { name: "Viparita Karani", url: "https://en.wikipedia.org/wiki/Viparita_Karani" },
  },
  "Savasana": {
    name: "Savasana",
    category: "cooldown",
    aka: { name: "corpse pose", url: "https://en.wikipedia.org/wiki/Savasana" },
  },
};

export default ALL_EXERCISES;
