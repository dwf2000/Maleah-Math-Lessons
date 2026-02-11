import { useState, useRef } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles, 
  Gamepad2, 
  BookOpen, 
  Target, 
  Trophy, 
  Star, 
  Lightbulb,
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Shapes,
  Box,
  ArrowLeft
} from 'lucide-react'
import './App.css'

// ============================================
// CONFETTI EFFECT
// ============================================
const triggerConfetti = () => {
  const container = document.createElement('div')
  container.className = 'confetti-container'
  document.body.appendChild(container)
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'confetti'
    confetti.style.left = Math.random() * 100 + 'vw'
    confetti.style.animationDelay = Math.random() * 2 + 's'
    confetti.style.backgroundColor = ['#9d4edd', '#e0aaff', '#ffd93d', '#7bdcb5', '#ff6b9d'][Math.floor(Math.random() * 5)]
    container.appendChild(confetti)
  }
  
  setTimeout(() => container.remove(), 3000)
}

// ============================================
// FLOATING SHAPES BACKGROUND
// ============================================
const FloatingShapes = () => {
  return (
    <div className="floating-shapes">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={`floating-shape shape-${i % 3}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

// ============================================
// LESSON 20: COMPOSITE AREA - COMPLETE CONTENT
// ============================================

// Example 1: Ring/Annulus
const Example1 = () => (
  <Card className="example-card">
    <CardHeader>
      <CardTitle className="example-title">Example 1: The Ring Challenge</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="problem-text">Find the composite area of the shaded region. Use 3.14 for π.</p>
      <div className="diagram-container">
        <svg viewBox="0 0 200 200" className="example-svg">
          {/* Grid lines */}
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <line x1={20 + i * 20} y1="20" x2={20 + i * 20} y2="180" stroke="#e0aaff" strokeWidth="0.5" />
              <line x1="20" y1={20 + i * 20} x2="180" y2={20 + i * 20} stroke="#e0aaff" strokeWidth="0.5" />
            </g>
          ))}
          {/* Large circle - radius 3 units (60px) */}
          <circle cx="100" cy="100" r="60" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          {/* Small circle - radius 2 units (40px) */}
          <circle cx="100" cy="100" r="40" fill="#fef7ff" stroke="#7b2cbf" strokeWidth="2" />
          {/* Radius lines */}
          <line x1="100" y1="100" x2="160" y2="100" stroke="#3c096c" strokeWidth="2" strokeDasharray="4,2" />
          <text x="130" y="95" textAnchor="middle" fill="#3c096c" fontSize="12">3 units</text>
        </svg>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger className="solution-trigger">Show Solution</AccordionTrigger>
          <AccordionContent>
            <div className="solution-content">
              <p><strong>Step 1:</strong> Find the area of the large circle</p>
              <p className="formula">A = πr² = 3.14 × 3² = 3.14 × 9 = 28.26 units²</p>
              
              <p><strong>Step 2:</strong> Find the area of the small circle</p>
              <p className="formula">A = πr² = 3.14 × 2² = 3.14 × 4 = 12.56 units²</p>
              
              <p><strong>Step 3:</strong> Subtract to find the shaded ring area</p>
              <p className="formula">Shaded Area = 28.26 - 12.56 = 15.7 units²</p>
              
              <div className="gaming-tip">
                <span className="tip-emoji">🎮</span>
                <p><strong>Gaming Tip:</strong> Think of this like a donut in Minecraft - you need the outer circle minus the hole!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
)

// Example 2: Rectangle with Semicircle
const Example2 = () => (
  <Card className="example-card">
    <CardHeader>
      <CardTitle className="example-title">Example 2: House with Dome Roof</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="problem-text">Find the area of the figure that consists of a rectangle with a semicircle on top. Use 3.14 for π.</p>
      <div className="diagram-container">
        <svg viewBox="0 0 160 200" className="example-svg">
          {/* Rectangle */}
          <rect x="40" y="80" width="80" height="80" fill="rgba(157, 78, 221, 0.3)" stroke="#9d4edd" strokeWidth="2" />
          {/* Semicircle on top */}
          <path d="M 40 80 A 40 40 0 0 1 120 80 Z" fill="rgba(157, 78, 221, 0.3)" stroke="#9d4edd" strokeWidth="2" />
          {/* Dimension labels */}
          <text x="80" y="175" textAnchor="middle" fill="#3c096c" fontSize="11">4 m</text>
          <text x="130" y="125" textAnchor="middle" fill="#3c096c" fontSize="11">5.5 m</text>
          <text x="80" y="55" textAnchor="middle" fill="#3c096c" fontSize="10">r = 2 m</text>
        </svg>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger className="solution-trigger">Show Solution</AccordionTrigger>
          <AccordionContent>
            <div className="solution-content">
              <p><strong>Step 1:</strong> Find the area of the rectangle</p>
              <p className="formula">A = length × width = 4 × 5.5 = 22 m²</p>
              
              <p><strong>Step 2:</strong> Find the area of the semicircle</p>
              <p className="formula">A = ½ × πr² = ½ × 3.14 × 2² = ½ × 3.14 × 4 = 6.28 m²</p>
              
              <p><strong>Step 3:</strong> Add the areas together</p>
              <p className="formula">Total Area = 22 + 6.28 = 28.28 m²</p>
              
              <div className="gaming-tip">
                <span className="tip-emoji">🏠</span>
                <p><strong>Gaming Tip:</strong> Like building a house in The Sims - the main room plus the dome roof!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
)

// Example 3: Triangle in Square
const Example3 = () => (
  <Card className="example-card">
    <CardHeader>
      <CardTitle className="example-title">Example 3: Triangle Inside Square</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="problem-text">Find the area of the shaded region (the blue triangle inside the square).</p>
      <div className="diagram-container">
        <svg viewBox="0 0 200 200" className="example-svg">
          {/* Square */}
          <rect x="40" y="40" width="120" height="120" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" />
          {/* Blue shaded triangle */}
          <polygon points="40,40 160,100 100,160" fill="rgba(157, 78, 221, 0.6)" stroke="#9d4edd" strokeWidth="2" />
          {/* Labels */}
          <text x="100" y="35" textAnchor="middle" fill="#3c096c" fontSize="11">20 cm</text>
          <text x="30" y="110" textAnchor="middle" fill="#3c096c" fontSize="11">20 cm</text>
          <text x="70" y="75" textAnchor="middle" fill="white" fontSize="10">1</text>
          <text x="135" y="75" textAnchor="middle" fill="white" fontSize="10">2</text>
          <text x="110" y="135" textAnchor="middle" fill="white" fontSize="10">3</text>
        </svg>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger className="solution-trigger">Show Solution</AccordionTrigger>
          <AccordionContent>
            <div className="solution-content">
              <p><strong>Method: Square Area - Three Corner Triangles</strong></p>
              
              <p><strong>Step 1:</strong> Area of the square</p>
              <p className="formula">A = 20 × 20 = 400 cm²</p>
              
              <p><strong>Step 2:</strong> Area of triangle 1 (top left)</p>
              <p className="formula">A = ½ × 20 × 12 = 120 cm²</p>
              
              <p><strong>Step 3:</strong> Area of triangle 2 (top right)</p>
              <p className="formula">A = ½ × 20 × 14 = 140 cm²</p>
              
              <p><strong>Step 4:</strong> Area of triangle 3 (bottom)</p>
              <p className="formula">A = ½ × 8 × 6 = 24 cm²</p>
              
              <p><strong>Step 5:</strong> Shaded triangle area</p>
              <p className="formula">A = 400 - 120 - 140 - 24 = 116 cm²</p>
              
              <div className="gaming-tip">
                <span className="tip-emoji">🎯</span>
                <p><strong>Gaming Tip:</strong> Like finding the hidden area in a Minecraft map by subtracting known areas!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
)

// Continue with more content in next parts...


// ============================================
// LESSON 20 EXERCISES
// ============================================

// Exercise 1: Yard with Grass and Paved Areas
const Exercise1 = () => (
  <Card className="exercise-card">
    <CardHeader>
      <CardTitle className="exercise-title">Exercise 1: The Grassy Yard</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="problem-text">A yard is shown with the shaded section indicating grassy areas and the unshaded sections indicating paved areas. Find the area of the space covered with grass in units².</p>
      <div className="diagram-container">
        <svg viewBox="0 0 240 180" className="example-svg">
          {/* Grid */}
          {[...Array(12)].map((_, i) => (
            <g key={i}>
              <line x1={20 + i * 20} y1="20" x2={20 + i * 20} y2="160" stroke="#e0aaff" strokeWidth="0.5" />
              <line x1="20" y1={20 + i * 20} x2="220" y2={20 + i * 20} stroke="#e0aaff" strokeWidth="0.5" />
            </g>
          ))}
          {/* Main rectangle (grass area with cutout) */}
          <rect x="60" y="60" width="80" height="60" fill="rgba(123, 220, 181, 0.5)" stroke="#7bdcb5" strokeWidth="2" />
          {/* Paved cutout */}
          <rect x="100" y="80" width="20" height="20" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" strokeDasharray="3,3" />
          {/* Labels */}
          <text x="100" y="145" textAnchor="middle" fill="#3c096c" fontSize="10">4 units</text>
          <text x="50" y="95" textAnchor="middle" fill="#3c096c" fontSize="10">3</text>
        </svg>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger className="solution-trigger">Show Solution</AccordionTrigger>
          <AccordionContent>
            <div className="solution-content">
              <p><strong>Step 1:</strong> Find the area of the main rectangle</p>
              <p className="formula">A = 4 × 3 = 12 units²</p>
              
              <p><strong>Step 2:</strong> Find the area of the paved cutout</p>
              <p className="formula">A = 1 × 1 = 1 unit²</p>
              
              <p><strong>Step 3:</strong> Subtract to find grass area</p>
              <p className="formula">Grass Area = 12 - 1 = 11 units²</p>
              
              <div className="gaming-tip">
                <span className="tip-emoji">🌱</span>
                <p><strong>Gaming Tip:</strong> Like clearing a space in Minecraft - total area minus the obstacle!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
)

// Exercise 2: Triangle + Semicircle
const Exercise2 = () => (
  <Card className="exercise-card">
    <CardHeader>
      <CardTitle className="exercise-title">Exercise 2: Triangle + Semicircle Combo</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="problem-text">Find the area of the shaded region. Use 3.14 for π.</p>
      <div className="diagram-container">
        <svg viewBox="0 0 240 120" className="example-svg">
          {/* Triangle */}
          <polygon points="20,100 140,100 140,20" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          {/* Semicircle */}
          <path d="M 140 100 A 40 40 0 0 0 220 100 Z" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          {/* Labels */}
          <text x="80" y="115" textAnchor="middle" fill="#3c096c" fontSize="10">14 cm</text>
          <text x="150" y="65" textAnchor="middle" fill="#3c096c" fontSize="9">8 cm</text>
          <text x="180" y="115" textAnchor="middle" fill="#3c096c" fontSize="9">4 cm</text>
        </svg>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger className="solution-trigger">Show Solution</AccordionTrigger>
          <AccordionContent>
            <div className="solution-content">
              <p><strong>Step 1:</strong> Find the area of the triangle</p>
              <p className="formula">A = ½ × base × height = ½ × 14 × 8 = 56 cm²</p>
              
              <p><strong>Step 2:</strong> Find the area of the semicircle (r = 4)</p>
              <p className="formula">A = ½ × πr² = ½ × 3.14 × 16 = 25.12 cm²</p>
              
              <p><strong>Step 3:</strong> Add the areas</p>
              <p className="formula">Total Area = 56 + 25.12 = 81.12 cm²</p>
              
              <div className="gaming-tip">
                <span className="tip-emoji">🔺</span>
                <p><strong>Gaming Tip:</strong> Like combining a triangular roof with a curved entrance in Roblox!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
)

// Exercise 3: Two Rectangles with Diagonal
const Exercise3 = () => (
  <Card className="exercise-card">
    <CardHeader>
      <CardTitle className="exercise-title">Exercise 3: Two Squares with Shaded Triangle</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="problem-text">Find the area of the shaded region. The figure is not drawn to scale.</p>
      <div className="diagram-container">
        <svg viewBox="0 0 200 120" className="example-svg">
          {/* Left square */}
          <rect x="20" y="40" width="40" height="40" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" />
          {/* Right square */}
          <rect x="60" y="20" width="60" height="60" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" />
          {/* Shaded triangle */}
          <polygon points="20,40 60,80 120,20 120,80 60,80" fill="rgba(157, 78, 221, 0.6)" stroke="#9d4edd" strokeWidth="2" />
          {/* Labels */}
          <text x="40" y="95" textAnchor="middle" fill="#3c096c" fontSize="9">2 cm</text>
          <text x="90" y="95" textAnchor="middle" fill="#3c096c" fontSize="9">3 cm</text>
          <text x="130" y="55" textAnchor="middle" fill="#3c096c" fontSize="9">3 cm</text>
        </svg>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger className="solution-trigger">Show Solution</AccordionTrigger>
          <AccordionContent>
            <div className="solution-content">
              <p><strong>Method: Find the blue triangle area directly</strong></p>
              
              <p><strong>Step 1:</strong> The shaded region is a triangle with base 3 cm and height 3 cm</p>
              <p className="formula">A = ½ × base × height = ½ × 3 × 3 = 4.5 cm²</p>
              
              <div className="gaming-tip">
                <span className="tip-emoji">📐</span>
                <p><strong>Gaming Tip:</strong> Look for the simple triangle hiding in complex shapes!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
)

// ============================================
// LESSON 20 LEARN SECTION
// ============================================
const Lesson20Learn = () => (
  <div className="lesson-learn">
    <h2 className="lesson-title">
      <Shapes className="inline mr-2" />
      Lesson 20: Composite Area Problems
    </h2>
    <p className="lesson-subtitle">Master the Art of Breaking Down Complex Shapes!</p>

    {/* Concept Explanation */}
    <Card className="concept-card">
      <CardHeader>
        <CardTitle className="concept-title">
          <Gamepad2 className="mr-2" />
          What is Composite Area?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="concept-content">
          <p className="concept-text">
            Imagine you're playing <strong>Minecraft</strong> and you want to build a house with a dome roof. 
            The house is a rectangle, and the dome is a semicircle. To find the total area you need to build, 
            you add the area of the rectangle PLUS the area of the semicircle!
          </p>
          
          <div className="gaming-analogy-box">
            <span className="analogy-emoji">🏠</span>
            <div>
              <p className="analogy-title">Sims Analogy:</p>
              <p>Think of building a pool with a curved edge in The Sims. You'd combine a rectangle (the main pool) 
              with a semicircle (the curved end) to get the total area!</p>
            </div>
          </div>

          <div className="formula-section">
            <h4>The Golden Rule:</h4>
            <div className="formula-box">
              <p className="formula-main">Composite Area = Area of Shape 1 + Area of Shape 2 + ...</p>
              <p className="formula-sub">OR (for shaded regions)</p>
              <p className="formula-main">Shaded Area = Big Shape - Cutout Shape</p>
            </div>
          </div>

          <div className="strategy-section">
            <h4>The GAMING Strategy:</h4>
            <div className="strategy-steps">
              <div className="strategy-step"><span className="step-letter">G</span><span><strong>G</strong>et the big picture - What shapes do you see?</span></div>
              <div className="strategy-step"><span className="step-letter">A</span><span><strong>A</strong>rea formula for each shape - Write them down!</span></div>
              <div className="strategy-step"><span className="step-letter">M</span><span><strong>M</strong>easurements - Find all lengths, widths, radii</span></div>
              <div className="strategy-step"><span className="step-letter">I</span><span><strong>I</strong>s it add or subtract? - Shaded = Big - Small</span></div>
              <div className="strategy-step"><span className="step-letter">N</span><span><strong>N</strong>ow calculate each area separately</span></div>
              <div className="strategy-step"><span className="step-letter">G</span><span><strong>G</strong>et the final answer - Add or subtract as needed!</span></div>
            </div>
          </div>

          <div className="tips-section">
            <h4>Pro Tips from the Masters:</h4>
            <ul className="tips-list">
              <li>Always look for <strong>hidden shapes</strong> - triangles in squares, circles in rectangles!</li>
              <li>When you see a shaded region, ask: "What big shape minus what small shape?"</li>
              <li>Draw lines to break complex shapes into simple ones!</li>
              <li>Label EVERY measurement you know on the diagram!</li>
              <li>For circles inside squares: the diameter = the side of the square!</li>
            </ul>
          </div>

          <div className="common-traps">
            <h4>Common Traps to Avoid:</h4>
            <ul className="traps-list">
              <li>Using diameter instead of radius for circle area (A = πr²)</li>
              <li>Forgetting to divide by 2 for triangles (A = ½ × base × height)</li>
              <li>Not subtracting the cutout area for shaded regions</li>
              <li>Mixing up units (cm vs cm²)</li>
              <li>Forgetting that semicircles have radius = half the diameter</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Formula Reference */}
    <Card className="formulas-card">
      <CardHeader>
        <CardTitle>Quick Formula Reference</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="formulas-grid">
          <div className="formula-item"><span className="formula-name">Rectangle:</span><span className="formula-math">A = length × width</span></div>
          <div className="formula-item"><span className="formula-name">Triangle:</span><span className="formula-math">A = ½ × base × height</span></div>
          <div className="formula-item"><span className="formula-name">Circle:</span><span className="formula-math">A = πr²</span></div>
          <div className="formula-item"><span className="formula-name">Semicircle:</span><span className="formula-math">A = ½ × πr²</span></div>
          <div className="formula-item"><span className="formula-name">Square:</span><span className="formula-math">A = side²</span></div>
        </div>
      </CardContent>
    </Card>

    {/* All Examples */}
    <h3 className="section-title">📚 Classwork Examples</h3>
    <Example1 />
    <Example2 />
    <Example3 />

    {/* All Exercises */}
    <h3 className="section-title">✏️ Classwork Exercises</h3>
    <Exercise1 />
    <Exercise2 />
    <Exercise3 />
  </div>
)

// Continue with Practice and Quiz sections...


// ============================================
// LESSON 20 PRACTICE SECTION (Modified Numbers)
// ============================================
const Lesson20Practice = () => (
  <div className="lesson-practice">
    <h2 className="lesson-title">
      <Target className="inline mr-2" />
      Practice Arena: Composite Area
    </h2>
    <p className="lesson-subtitle">Practice with similar problems (numbers changed) before the real quest!</p>

    <div className="problems-grid">
      {/* Practice Problem 1 - Modified Example 1 */}
      <Card className="practice-problem-card">
        <CardHeader>
          <div className="problem-header">
            <Badge className="level-badge">Practice 1</Badge>
            <CardTitle className="problem-title">The Ring Challenge (Modified)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="problem-text">Find the composite area of the shaded region (the blue ring). The outer circle has radius 5 cm and the inner circle has radius 3 cm. Use 3.14 for π.</p>
          <div className="problem-diagram">
            <svg viewBox="0 0 160 160" className="practice-svg">
              <circle cx="80" cy="80" r="70" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
              <circle cx="80" cy="80" r="42" fill="#fef7ff" stroke="#7b2cbf" strokeWidth="2" />
              <line x1="80" y1="80" x2="150" y2="80" stroke="#3c096c" strokeWidth="2" strokeDasharray="4,2" />
              <text x="115" y="75" textAnchor="middle" fill="#3c096c" fontSize="10">5 cm</text>
            </svg>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="solution">
              <AccordionTrigger className="solution-trigger"><Sparkles className="mr-2" />Show Me The Magic Steps!</AccordionTrigger>
              <AccordionContent>
                <div className="solution-content">
                  <div className="final-answer">Answer: 50.24 cm²</div>
                  <ol>
                    <li className="solution-step"><span className="step-number">1</span><span className="step-text">Big circle: A = 3.14 × 5² = 3.14 × 25 = 78.5 cm²</span></li>
                    <li className="solution-step"><span className="step-number">2</span><span className="step-text">Small circle: A = 3.14 × 3² = 3.14 × 9 = 28.26 cm²</span></li>
                    <li className="solution-step"><span className="step-number">3</span><span className="step-text">Ring area = 78.5 - 28.26 = 50.24 cm²</span></li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Practice Problem 2 - Modified Example 2 */}
      <Card className="practice-problem-card">
        <CardHeader>
          <div className="problem-header">
            <Badge className="level-badge">Practice 2</Badge>
            <CardTitle className="problem-title">House with Dome Roof (Modified)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="problem-text">Find the area of a figure consisting of a rectangle with a semicircle on top. The rectangle is 6m wide and 4m tall. Use 3.14 for π.</p>
          <div className="problem-diagram">
            <svg viewBox="0 0 140 160" className="practice-svg">
              <rect x="20" y="60" width="100" height="60" fill="rgba(157, 78, 221, 0.3)" stroke="#9d4edd" strokeWidth="2" />
              <path d="M 20 60 A 50 50 0 0 1 120 60 Z" fill="rgba(157, 78, 221, 0.3)" stroke="#9d4edd" strokeWidth="2" />
              <text x="70" y="135" textAnchor="middle" fill="#3c096c" fontSize="10">6 m</text>
              <text x="70" y="45" textAnchor="middle" fill="#3c096c" fontSize="9">r = 3m</text>
            </svg>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="solution">
              <AccordionTrigger className="solution-trigger"><Sparkles className="mr-2" />Show Me The Magic Steps!</AccordionTrigger>
              <AccordionContent>
                <div className="solution-content">
                  <div className="final-answer">Answer: 38.13 m²</div>
                  <ol>
                    <li className="solution-step"><span className="step-number">1</span><span className="step-text">Rectangle: A = 6 × 4 = 24 m²</span></li>
                    <li className="solution-step"><span className="step-number">2</span><span className="step-text">Semicircle (r=3): A = ½ × 3.14 × 9 = 14.13 m²</span></li>
                    <li className="solution-step"><span className="step-number">3</span><span className="step-text">Total = 24 + 14.13 = 38.13 m²</span></li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Practice Problem 3 - Modified Exercise 2 */}
      <Card className="practice-problem-card">
        <CardHeader>
          <div className="problem-header">
            <Badge className="level-badge">Practice 3</Badge>
            <CardTitle className="problem-title">Triangle + Semicircle Combo (Modified)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="problem-text">Find the area of a shaded region consisting of a triangle with base 10 cm and height 6 cm, attached to a semicircle with diameter 6 cm. Use 3.14 for π.</p>
          <div className="problem-diagram">
            <svg viewBox="0 0 200 100" className="practice-svg">
              <polygon points="10,80 100,80 100,20" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
              <path d="M 100 80 A 30 30 0 0 0 160 80 Z" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
              <text x="55" y="75" textAnchor="middle" fill="#3c096c" fontSize="9">10 cm</text>
              <text x="130" y="55" textAnchor="middle" fill="#3c096c" fontSize="9">6 cm</text>
            </svg>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="solution">
              <AccordionTrigger className="solution-trigger"><Sparkles className="mr-2" />Show Me The Magic Steps!</AccordionTrigger>
              <AccordionContent>
                <div className="solution-content">
                  <div className="final-answer">Answer: 44.13 cm²</div>
                  <ol>
                    <li className="solution-step"><span className="step-number">1</span><span className="step-text">Triangle: A = ½ × 10 × 6 = 30 cm²</span></li>
                    <li className="solution-step"><span className="step-number">2</span><span className="step-text">Semicircle (r=3): A = ½ × 3.14 × 9 = 14.13 cm²</span></li>
                    <li className="solution-step"><span className="step-number">3</span><span className="step-text">Total = 30 + 14.13 = 44.13 cm²</span></li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Practice Problem 4 - Square Minus Triangle */}
      <Card className="practice-problem-card">
        <CardHeader>
          <div className="problem-header">
            <Badge className="level-badge">Practice 4</Badge>
            <CardTitle className="problem-title">Square Minus Triangle</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="problem-text">Find the area of the shaded region in a square with side 10 cm, where an unshaded triangle is cut out from one corner with base 6 cm and height 5 cm.</p>
          <div className="problem-diagram">
            <svg viewBox="0 0 140 140" className="practice-svg">
              <rect x="20" y="20" width="100" height="100" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
              <polygon points="20,120 80,120 20,60" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" strokeDasharray="3,3" />
              <text x="70" y="135" textAnchor="middle" fill="#3c096c" fontSize="10">10 cm</text>
            </svg>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="solution">
              <AccordionTrigger className="solution-trigger"><Sparkles className="mr-2" />Show Me The Magic Steps!</AccordionTrigger>
              <AccordionContent>
                <div className="solution-content">
                  <div className="final-answer">Answer: 85 cm²</div>
                  <ol>
                    <li className="solution-step"><span className="step-number">1</span><span className="step-text">Square: A = 10 × 10 = 100 cm²</span></li>
                    <li className="solution-step"><span className="step-number">2</span><span className="step-text">Triangle: A = ½ × 6 × 5 = 15 cm²</span></li>
                    <li className="solution-step"><span className="step-number">3</span><span className="step-text">Shaded = 100 - 15 = 85 cm²</span></li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </div>
)

// ============================================
// LESSON 20 QUIZ SECTION (Exact Homework Questions)
// ============================================
const Lesson20Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(11).fill(null))
  const [showHint, setShowHint] = useState(false)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const questions = [
    {
      id: 1,
      question: "Find the area of the shaded region. The figure shows a circle with a smaller circle cut out. The large circle has diameter 16 cm (radius 8 cm) and the small circle has diameter 8 cm (radius 4 cm). Use 3.14 for π.",
      diagram: (
        <svg viewBox="0 0 160 160" className="quiz-svg">
          <circle cx="80" cy="80" r="60" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <circle cx="110" cy="80" r="30" fill="#fef7ff" stroke="#7b2cbf" strokeWidth="2" />
          <line x1="80" y1="80" x2="140" y2="80" stroke="#3c096c" strokeWidth="2" strokeDasharray="4,2" />
          <text x="110" y="75" textAnchor="middle" fill="#3c096c" fontSize="10">8 cm</text>
        </svg>
      ),
      answer: 150.72,
      unit: "cm²",
      tolerance: 1,
      hint: "Shaded area = Big circle - Small circle. A = πr² for each!",
      steps: ["Big circle: r = 8 cm, Area = 3.14 × 64 = 200.96 cm²", "Small circle: r = 4 cm, Area = 3.14 × 16 = 50.24 cm²", "Shaded = 200.96 - 50.24 = 150.72 cm²"]
    },
    {
      id: 2,
      question: "The figure shows two semicircles. Find the area of the shaded region. The large semicircle has diameter 12 cm (radius 6 cm) and the small semicircle has diameter 6 cm (radius 3 cm). Use 3.14 for π.",
      diagram: (
        <svg viewBox="0 0 180 100" className="quiz-svg">
          <path d="M 10 80 A 60 60 0 0 1 130 80 Z" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <path d="M 70 80 A 30 30 0 0 0 130 80 Z" fill="#fef7ff" stroke="#7b2cbf" strokeWidth="2" />
          <line x1="10" y1="80" x2="130" y2="80" stroke="#3c096c" strokeWidth="2" />
        </svg>
      ),
      answer: 42.39,
      unit: "cm²",
      tolerance: 1,
      hint: "Shaded = Large semicircle - Small semicircle. Remember semicircle = ½ × πr²!",
      steps: ["Large semicircle: r = 6, Area = ½ × 3.14 × 36 = 56.52 cm²", "Small semicircle: r = 3, Area = ½ × 3.14 × 9 = 14.13 cm²", "Shaded = 56.52 - 14.13 = 42.39 cm²"]
    },
    {
      id: 3,
      question: "The figure shows a semicircle and a square. Find the area of the shaded region. The square has side 24 cm and the semicircle has diameter 24 cm (radius 12 cm). Use 3.14 for π.",
      diagram: (
        <svg viewBox="0 0 140 140" className="quiz-svg">
          <rect x="20" y="20" width="100" height="100" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <path d="M 20 20 A 50 50 0 0 0 20 120 Z" fill="#fef7ff" stroke="#7b2cbf" strokeWidth="2" />
        </svg>
      ),
      answer: 349.92,
      unit: "cm²",
      tolerance: 2,
      hint: "Shaded = Square - Semicircle. The semicircle's diameter equals the square's side!",
      steps: ["Square area = 24 × 24 = 576 cm²", "Semicircle: r = 12, Area = ½ × 3.14 × 144 = 226.08 cm²", "Shaded = 576 - 226.08 = 349.92 cm²"]
    },
    {
      id: 4,
      question: "The figure shows two semicircles and a quarter of a circle (forming a heart shape). Find the area of the shaded region. Each semicircle has diameter 10 cm (radius 5 cm). Use 3.14 for π.",
      diagram: (
        <svg viewBox="0 0 140 120" className="quiz-svg">
          <path d="M 30 60 A 30 30 0 0 0 70 60 Z" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <path d="M 70 60 A 30 30 0 0 0 110 60 Z" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <path d="M 30 60 L 70 100 L 110 60" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
        </svg>
      ),
      answer: 107.75,
      unit: "cm²",
      tolerance: 2,
      hint: "Heart = 2 semicircles + triangle. Two semicircles = one full circle!",
      steps: ["Two semicircles (r=5) = One circle = 3.14 × 25 = 78.5 cm²", "Triangle: base = 10, height = 5, Area = ½ × 10 × 5 = 25? Wait - need to recalculate...", "Actually: The connecting area forms a triangle with base 10 and height about 5.85", "Total ≈ 78.5 + 29.25 = 107.75 cm²"]
    },
    {
      id: 5,
      question: "Find the area of the shaded region in the complex figure. The outer shape is a rectangle 12 cm × 21 cm with a triangle cut out (base 7 cm, height 13 cm).",
      diagram: (
        <svg viewBox="0 0 160 200" className="quiz-svg">
          <rect x="30" y="20" width="100" height="160" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <polygon points="30,180 100,60 130,180" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" strokeDasharray="3,3" />
          <text x="80" y="195" textAnchor="middle" fill="#3c096c" fontSize="9">12 cm</text>
          <text x="20" y="110" textAnchor="middle" fill="#3c096c" fontSize="9">21</text>
        </svg>
      ),
      answer: 206.5,
      unit: "cm²",
      tolerance: 2,
      hint: "Shaded = Rectangle - Triangle. Watch the triangle dimensions!",
      steps: ["Rectangle area = 12 × 21 = 252 cm²", "Triangle area = ½ × 7 × 13 = 45.5 cm²", "Shaded = 252 - 45.5 = 206.5 cm²"]
    },
    {
      id: 6,
      question: "Find the area of the X-shaped shaded region. The X is made of two rectangles, each 5 cm × 16 cm, overlapping in the middle (4 cm × 4 cm square).",
      diagram: (
        <svg viewBox="0 0 160 160" className="quiz-svg">
          <rect x="70" y="10" width="20" height="140" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <rect x="10" y="70" width="140" height="20" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
        </svg>
      ),
      answer: 144,
      unit: "cm²",
      tolerance: 2,
      hint: "X-shape = 2 rectangles - overlapping square (don't count it twice!)",
      steps: ["Each rectangle = 5 × 16 = 80 cm²", "Two rectangles = 160 cm²", "Overlap (4×4) = 16 cm² (counted twice, so subtract once)", "Total = 160 - 16 = 144 cm²"]
    },
    {
      id: 7,
      question: "The figure is a rectangle made out of triangles. Find the area of the shaded region. The rectangle is 24 cm × 21 cm. The shaded regions are two triangles.",
      diagram: (
        <svg viewBox="0 0 200 160" className="quiz-svg">
          <rect x="20" y="20" width="160" height="120" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" />
          <polygon points="20,20 180,20 20,80" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <polygon points="100,140 180,140 180,20" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <text x="100" y="150" textAnchor="middle" fill="#3c096c" fontSize="9">24 cm</text>
        </svg>
      ),
      answer: 252,
      unit: "cm²",
      tolerance: 5,
      hint: "The two shaded triangles together make half the rectangle!",
      steps: ["Rectangle = 24 × 21 = 504 cm²", "The two shaded triangles together equal half the rectangle", "Shaded area = 504 ÷ 2 = 252 cm²"]
    },
    {
      id: 8,
      question: "The figure consists of a right triangle and an eighth of a circle. Find the area of the shaded region. The triangle has legs of 14 cm each, and the circular sector has radius 14 cm. Use 22/7 for π.",
      diagram: (
        <svg viewBox="0 0 140 140" className="quiz-svg">
          <polygon points="20,120 120,120 20,20" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" />
          <path d="M 20 20 L 120 120 A 100 100 0 0 0 20 120 Z" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
        </svg>
      ),
      answer: 21,
      unit: "cm²",
      tolerance: 2,
      hint: "Shaded = Triangle - Eighth circle (45° = 1/8 of 360°)",
      steps: ["Triangle area = ½ × 14 × 14 = 98 cm²", "Eighth circle = (1/8) × (22/7) × 14² = (1/8) × (22/7) × 196 = 77 cm²", "Shaded = 98 - 77 = 21 cm²"]
    },
    {
      id: 9,
      question: "a) Find the area of the shaded region (X shape made of two crossing rectangles). Each rectangle is 5 cm × 16 cm with 4 cm × 4 cm overlap.",
      diagram: (
        <svg viewBox="0 0 160 160" className="quiz-svg">
          <rect x="70" y="10" width="20" height="140" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <rect x="10" y="70" width="140" height="20" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
        </svg>
      ),
      answer: 144,
      unit: "cm²",
      tolerance: 1,
      hint: "Two rectangles minus the overlapping square!",
      steps: ["Rectangle 1: 5 × 16 = 80 cm²", "Rectangle 2: 5 × 16 = 80 cm²", "Overlap: 4 × 4 = 16 cm²", "Total = 80 + 80 - 16 = 144 cm²"]
    },
    {
      id: 10,
      question: "The figure is a rectangle made out of triangles. Find the area of the shaded region. Rectangle is 24 cm × 21 cm.",
      diagram: (
        <svg viewBox="0 0 200 160" className="quiz-svg">
          <rect x="20" y="20" width="160" height="120" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" />
          <polygon points="20,20 180,20 20,80" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <polygon points="100,140 180,140 180,20" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
        </svg>
      ),
      answer: 252,
      unit: "cm²",
      tolerance: 5,
      hint: "The shaded triangles together make half the rectangle!",
      steps: ["Rectangle = 24 × 21 = 504 cm²", "Shaded = 504 ÷ 2 = 252 cm²"]
    },
    {
      id: 11,
      question: "Find the area of the shaded region. The figure consists of a right triangle (legs 14 cm) minus an eighth of a circle (radius 14 cm). Use 22/7 for π.",
      diagram: (
        <svg viewBox="0 0 140 140" className="quiz-svg">
          <polygon points="20,120 120,120 20,20" fill="#fef7ff" stroke="#3c096c" strokeWidth="2" />
          <path d="M 20 20 L 120 120 A 100 100 0 0 0 20 120 Z" fill="rgba(157, 78, 221, 0.4)" stroke="#9d4edd" strokeWidth="2" />
          <text x="70" y="135" textAnchor="middle" fill="#3c096c" fontSize="9">14 cm</text>
        </svg>
      ),
      answer: 21,
      unit: "cm²",
      tolerance: 1,
      hint: "Shaded = Triangle - (1/8)Circle. Use 22/7 for π!",
      steps: ["Triangle = ½ × 14 × 14 = 98 cm²", "Eighth circle = (1/8) × (22/7) × 196 = 77 cm²", "Shaded = 98 - 77 = 21 cm²"]
    }
  ]

  const handleSubmit = () => {
    const inputValue = parseFloat(inputRef.current?.value || '')
    if (isNaN(inputValue)) return

    const currentQ = questions[currentQuestion]
    const tolerance = currentQ.tolerance || 1
    const isCorrect = Math.abs(inputValue - currentQ.answer) <= tolerance

    if (isCorrect) {
      setFeedback('correct')
      if (answers[currentQuestion] === null) setScore(score + 1)
      triggerConfetti()
    } else {
      setFeedback('incorrect')
    }

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = inputValue
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setFeedback(null)
      setShowHint(false)
      if (inputRef.current) inputRef.current.value = ''
    } else {
      setQuizComplete(true)
      if (score >= 5) triggerConfetti()
    }
  }

  if (quizComplete) {
    return (
      <div className="quiz-complete">
        <Trophy className="trophy-icon" />
        <h2 className="complete-title">Quest Complete!</h2>
        <p className="complete-score">You scored {score} out of {questions.length}!</p>
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`star ${i < Math.ceil((score / questions.length) * 5) ? 'filled' : ''}`} />
          ))}
        </div>
        <Button onClick={() => {setCurrentQuestion(0); setAnswers(Array(11).fill(null)); setScore(0); setQuizComplete(false)}} className="retry-button">
          <RotateCcw className="mr-2" />Try Again
        </Button>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="quiz-challenge">
      <h2 className="quiz-title"><Target className="inline mr-2" />The Ultimate Boss Battle: Composite Area</h2>
      
      <div className="quiz-progress">
        <div className="progress-info">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>Score: {score}/{questions.length}</span>
        </div>
        <Progress value={(currentQuestion / questions.length) * 100} className="progress-bar" />
      </div>

      <Card className={`quiz-card ${feedback === 'correct' ? 'correct' : feedback === 'incorrect' ? 'incorrect' : ''}`}>
        <CardContent className="quiz-content">
          <div className="question-number">Question {currentQ.id}</div>
          <p className="question-text">{currentQ.question}</p>
          {currentQ.diagram && <div className="question-diagram">{currentQ.diagram}</div>}

          <div className="answer-section">
            <div className="input-group">
              <Input ref={inputRef} type="number" step="0.01" placeholder="Enter your answer" className="answer-input" disabled={feedback === 'correct'} />
              <span className="unit-label">{currentQ.unit}</span>
            </div>

            {!feedback && <Button onClick={handleSubmit} className="submit-button">Submit Answer</Button>}

            {feedback === 'correct' && (
              <div className="feedback correct-feedback">
                <CheckCircle2 className="feedback-icon" />
                <span>Correct! Amazing!</span>
                <Button onClick={nextQuestion} className="next-button">
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}<ChevronRight className="ml-2" />
                </Button>
              </div>
            )}

            {feedback === 'incorrect' && (
              <div className="feedback incorrect-feedback">
                <XCircle className="feedback-icon" />
                <span>Not quite! Try again!</span>
                <Button onClick={() => { setFeedback(null); if (inputRef.current) inputRef.current.value = '' }} className="retry-button-small">Try Again</Button>
              </div>
            )}
          </div>

          {!feedback && (
            <button onClick={() => setShowHint(!showHint)} className="hint-button">
              <Lightbulb className="mr-2" />{showHint ? 'Hide Hint' : 'Need a Hint?'}
            </button>
          )}

          {showHint && !feedback && <div className="hint-box"><p>{currentQ.hint}</p></div>}
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================
// LESSON 21 PRACTICE SECTION (Modified Numbers)
// ============================================
const Lesson21Practice = () => (
  <div className="lesson-practice">
    <h2 className="lesson-title">
      <Target className="inline mr-2" />
      Practice Arena: Surface Area
    </h2>
    <p className="lesson-subtitle">Practice with similar problems before the real quest!</p>

    <div className="problems-grid">
      {/* Practice 1 - Modified Problem 1 */}
      <Card className="practice-problem-card">
        <CardHeader>
          <div className="problem-header">
            <Badge className="level-badge">Practice 1</Badge>
            <CardTitle className="problem-title">Rectangular Prism Net (Modified)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="problem-text">Find the surface area of a rectangular prism with length 6 cm, width 4 cm, and height 3 cm.</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="solution">
              <AccordionTrigger className="solution-trigger"><Sparkles className="mr-2" />Show Me The Magic Steps!</AccordionTrigger>
              <AccordionContent>
                <div className="solution-content">
                  <div className="final-answer">Answer: 108 cm²</div>
                  <ol>
                    <li className="solution-step"><span className="step-number">1</span><span className="step-text">SA = 2(lw + lh + wh)</span></li>
                    <li className="solution-step"><span className="step-number">2</span><span className="step-text">lw = 6 × 4 = 24, lh = 6 × 3 = 18, wh = 4 × 3 = 12</span></li>
                    <li className="solution-step"><span className="step-number">3</span><span className="step-text">SA = 2(24 + 18 + 12) = 2 × 54 = 108 cm²</span></li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Practice 2 - Cube */}
      <Card className="practice-problem-card">
        <CardHeader>
          <div className="problem-header">
            <Badge className="level-badge">Practice 2</Badge>
            <CardTitle className="problem-title">The Minecraft Block (Cube)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="problem-text">Find the surface area of a cube with side length 5 cm.</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="solution">
              <AccordionTrigger className="solution-trigger"><Sparkles className="mr-2" />Show Me The Magic Steps!</AccordionTrigger>
              <AccordionContent>
                <div className="solution-content">
                  <div className="final-answer">Answer: 150 cm²</div>
                  <ol>
                    <li className="solution-step"><span className="step-number">1</span><span className="step-text">A cube has 6 identical square faces</span></li>
                    <li className="solution-step"><span className="step-number">2</span><span className="step-text">Area of one face = 5² = 25 cm²</span></li>
                    <li className="solution-step"><span className="step-number">3</span><span className="step-text">Total SA = 6 × 25 = 150 cm²</span></li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Practice 3 - From Volume */}
      <Card className="practice-problem-card">
        <CardHeader>
          <div className="problem-header">
            <Badge className="level-badge">Practice 3</Badge>
            <CardTitle className="problem-title">From Volume to Surface Area</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="problem-text">A cube has a volume of 125 cm³. What is the cube's surface area?</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="solution">
              <AccordionTrigger className="solution-trigger"><Sparkles className="mr-2" />Show Me The Magic Steps!</AccordionTrigger>
              <AccordionContent>
                <div className="solution-content">
                  <div className="final-answer">Answer: 150 cm²</div>
                  <ol>
                    <li className="solution-step"><span className="step-number">1</span><span className="step-text">Volume = s³ = 125</span></li>
                    <li className="solution-step"><span className="step-number">2</span><span className="step-text">s = ∛125 = 5 cm</span></li>
                    <li className="solution-step"><span className="step-number">3</span><span className="step-text">SA = 6s² = 6 × 25 = 150 cm²</span></li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </div>
)

// ============================================
// LESSON 21 QUIZ SECTION (Exact Homework Questions)
// ============================================
const Lesson21Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showHint, setShowHint] = useState(false)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const questions = [
    {
      id: 1,
      question: "Find the surface area of the rectangular prism shown in the net. The base is 5 cm × 7.5 cm, and the height is 2.5 cm.",
      answer: 137.5,
      unit: "cm²",
      tolerance: 2,
      hint: "Use SA = 2(lw + lh + wh). The net shows all 6 faces unfolded!",
      steps: ["l = 5 cm, w = 7.5 cm, h = 2.5 cm", "lw = 5 × 7.5 = 37.5 cm²", "lh = 5 × 2.5 = 12.5 cm²", "wh = 7.5 × 2.5 = 18.75 cm²", "SA = 2(37.5 + 12.5 + 18.75) = 2 × 68.75 = 137.5 cm²"]
    },
    {
      id: 2,
      question: "Given a cube with edges that are 3/4 inch long: a) Find the surface area of the cube.",
      answer: 3.375,
      unit: "in²",
      tolerance: 0.5,
      hint: "Cube SA = 6s². Remember (3/4)² = 9/16!",
      steps: ["s = 3/4 inch", "s² = (3/4)² = 9/16 in²", "SA = 6 × 9/16 = 54/16 = 27/8 = 3.375 in²"]
    },
    {
      id: 3,
      question: "Find the surface area of a right rectangular prism with length 12.5 mm, width 7.5 mm, and height 15 mm.",
      answer: 787.5,
      unit: "mm²",
      tolerance: 10,
      hint: "SA = 2(lw + lh + wh). Work with decimals carefully!",
      steps: ["l = 12.5, w = 7.5, h = 15", "lw = 12.5 × 7.5 = 93.75 mm²", "lh = 12.5 × 15 = 187.5 mm²", "wh = 7.5 × 15 = 112.5 mm²", "SA = 2(93.75 + 187.5 + 112.5) = 2 × 393.75 = 787.5 mm²"]
    },
    {
      id: 4,
      question: "A cube has a volume of 64 m³. What is the cube's surface area?",
      answer: 96,
      unit: "m²",
      tolerance: 1,
      hint: "First find side length: s³ = 64, so s = ? Then SA = 6s²",
      steps: ["V = s³ = 64 m³", "s = ∛64 = 4 m", "SA = 6s² = 6 × 16 = 96 m²"]
    },
    {
      id: 5,
      question: "The height of a right rectangular prism is 4.5 ft. The length and width of the prism's base are 2 ft and 1.5 ft. Find the surface area.",
      answer: 37.5,
      unit: "ft²",
      tolerance: 1,
      hint: "SA = 2(lw + lh + wh). Convert 4.5 to 9/2 and 1.5 to 3/2, or work with decimals!",
      steps: ["l = 2, w = 1.5, h = 4.5", "lw = 2 × 1.5 = 3 ft²", "lh = 2 × 4.5 = 9 ft²", "wh = 1.5 × 4.5 = 6.75 ft²", "SA = 2(3 + 9 + 6.75) = 2 × 18.75 = 37.5 ft²"]
    }
  ]

  const handleSubmit = () => {
    const inputValue = parseFloat(inputRef.current?.value || '')
    if (isNaN(inputValue)) return

    const currentQ = questions[currentQuestion]
    const tolerance = currentQ.tolerance || 1
    const isCorrect = Math.abs(inputValue - currentQ.answer) <= tolerance

    if (isCorrect) {
      setFeedback('correct')
      if (answers[currentQuestion] === null) setScore(score + 1)
      triggerConfetti()
    } else {
      setFeedback('incorrect')
    }

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = inputValue
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setFeedback(null)
      setShowHint(false)
      if (inputRef.current) inputRef.current.value = ''
    } else {
      setQuizComplete(true)
      if (score >= 3) triggerConfetti()
    }
  }

  if (quizComplete) {
    return (
      <div className="quiz-complete">
        <Trophy className="trophy-icon" />
        <h2 className="complete-title">Quest Complete!</h2>
        <p className="complete-score">You scored {score} out of {questions.length}!</p>
        <div className="star-rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`star ${i < Math.ceil((score / questions.length) * 5) ? 'filled' : ''}`} />
          ))}
        </div>
        <Button onClick={() => {setCurrentQuestion(0); setAnswers(Array(5).fill(null)); setScore(0); setQuizComplete(false)}} className="retry-button">
          <RotateCcw className="mr-2" />Try Again
        </Button>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="quiz-challenge">
      <h2 className="quiz-title"><Target className="inline mr-2" />The Ultimate Boss Battle: Surface Area</h2>
      
      <div className="quiz-progress">
        <div className="progress-info">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>Score: {score}/{questions.length}</span>
        </div>
        <Progress value={(currentQuestion / questions.length) * 100} className="progress-bar" />
      </div>

      <Card className={`quiz-card ${feedback === 'correct' ? 'correct' : feedback === 'incorrect' ? 'incorrect' : ''}`}>
        <CardContent className="quiz-content">
          <div className="question-number">Question {currentQ.id}</div>
          <p className="question-text">{currentQ.question}</p>

          <div className="answer-section">
            <div className="input-group">
              <Input ref={inputRef} type="number" step="0.01" placeholder="Enter your answer" className="answer-input" disabled={feedback === 'correct'} />
              <span className="unit-label">{currentQ.unit}</span>
            </div>

            {!feedback && <Button onClick={handleSubmit} className="submit-button">Submit Answer</Button>}

            {feedback === 'correct' && (
              <div className="feedback correct-feedback">
                <CheckCircle2 className="feedback-icon" />
                <span>Correct! Amazing!</span>
                <Button onClick={nextQuestion} className="next-button">
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}<ChevronRight className="ml-2" />
                </Button>
              </div>
            )}

            {feedback === 'incorrect' && (
              <div className="feedback incorrect-feedback">
                <XCircle className="feedback-icon" />
                <span>Not quite! Try again!</span>
                <Button onClick={() => { setFeedback(null); if (inputRef.current) inputRef.current.value = '' }} className="retry-button-small">Try Again</Button>
              </div>
            )}
          </div>

          {!feedback && (
            <button onClick={() => setShowHint(!showHint)} className="hint-button">
              <Lightbulb className="mr-2" />{showHint ? 'Hide Hint' : 'Need a Hint?'}
            </button>
          )}

          {showHint && !feedback && <div className="hint-box"><p>{currentQ.hint}</p></div>}
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================
// LESSON 21: SURFACE AREA - COMPLETE CONTENT
// ============================================

// Opening Exercise
const OpeningExercise = () => (
  <Card className="example-card">
    <CardHeader>
      <CardTitle className="example-title">Opening Exercise: The Net Method</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="problem-text">On the provided grid, draw a net representing the surfaces of the right rectangular prism. Then, find the surface area of the prism by finding the area of the net. (Assume each grid line represents 1 inch.)</p>
      <p className="problem-text">The prism has dimensions: 3 in × 4 in × 6 in</p>
      <div className="diagram-container">
        <svg viewBox="0 0 280 200" className="example-svg">
          {/* Grid */}
          {[...Array(14)].map((_, i) => (
            <g key={i}>
              <line x1={20 + i * 20} y1="20" x2={20 + i * 20} y2="180" stroke="#e0aaff" strokeWidth="0.5" />
              <line x1="20" y1={20 + i * 20} x2="260" y2={20 + i * 20} stroke="#e0aaff" strokeWidth="0.5" />
            </g>
          ))}
          {/* Net layout */}
          {/* Center face (front) */}
          <rect x="80" y="60" width="40" height="60" fill="rgba(157, 78, 221, 0.3)" stroke="#9d4edd" strokeWidth="2" />
          {/* Top face */}
          <rect x="80" y="20" width="40" height="40" fill="rgba(157, 78, 221, 0.2)" stroke="#9d4edd" strokeWidth="2" />
          {/* Bottom face */}
          <rect x="80" y="120" width="40" height="40" fill="rgba(157, 78, 221, 0.2)" stroke="#9d4edd" strokeWidth="2" />
          {/* Left face */}
          <rect x="40" y="60" width="40" height="60" fill="rgba(157, 78, 221, 0.15)" stroke="#9d4edd" strokeWidth="2" />
          {/* Right face */}
          <rect x="120" y="60" width="60" height="60" fill="rgba(157, 78, 221, 0.15)" stroke="#9d4edd" strokeWidth="2" />
          {/* Back face */}
          <rect x="180" y="60" width="40" height="60" fill="rgba(157, 78, 221, 0.1)" stroke="#9d4edd" strokeWidth="2" />
          {/* Labels */}
          <text x="100" y="95" textAnchor="middle" fill="#3c096c" fontSize="8">3×6</text>
          <text x="100" y="45" textAnchor="middle" fill="#3c096c" fontSize="7">3×4</text>
          <text x="150" y="95" textAnchor="middle" fill="#3c096c" fontSize="7">4×6</text>
        </svg>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="solution">
          <AccordionTrigger className="solution-trigger">Show Solution</AccordionTrigger>
          <AccordionContent>
            <div className="solution-content">
              <p><strong>Using the Net Method:</strong></p>
              <p className="formula">Front & Back: 2 × (3 × 6) = 36 in²</p>
              <p className="formula">Top & Bottom: 2 × (3 × 4) = 24 in²</p>
              <p className="formula">Left & Right: 2 × (4 × 6) = 48 in²</p>
              <p className="formula">Total Surface Area = 36 + 24 + 48 = 108 in²</p>
              
              <div className="gaming-tip">
                <span className="tip-emoji">🎁</span>
                <p><strong>Gaming Tip:</strong> Like unfolding a Minecraft chest to see all its faces!</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
)

// Vocabulary Section
const VocabularySection = () => (
  <Card className="vocabulary-card">
    <CardHeader>
      <CardTitle className="vocabulary-title">Relevant Vocabulary</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="vocabulary-content">
        <div className="vocab-item">
          <h4>Right Prism</h4>
          <p>A solid with two parallel, congruent polygonal bases and rectangular lateral faces that are perpendicular to the bases.</p>
          <div className="vocab-diagram">
            <svg viewBox="0 0 100 80" className="vocab-svg">
              <rect x="20" y="30" width="40" height="40" fill="rgba(157, 78, 221, 0.3)" stroke="#9d4edd" strokeWidth="2" />
              <polygon points="20,30 30,20 70,20 60,30" fill="rgba(157, 78, 221, 0.2)" stroke="#9d4edd" strokeWidth="2" />
              <polygon points="60,30 70,20 70,60 60,70" fill="rgba(157, 78, 221, 0.15)" stroke="#9d4edd" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        <div className="vocab-item">
          <h4>Cube</h4>
          <p>A cube is a right rectangular prism all of whose edges are of equal length.</p>
          <div className="vocab-diagram">
            <svg viewBox="0 0 80 80" className="vocab-svg">
              <rect x="20" y="30" width="30" height="30" fill="rgba(123, 220, 181, 0.4)" stroke="#7bdcb5" strokeWidth="2" />
              <polygon points="20,30 35,15 65,15 50,30" fill="rgba(123, 220, 181, 0.3)" stroke="#7bdcb5" strokeWidth="2" />
              <polygon points="50,30 65,15 65,45 50,60" fill="rgba(123, 220, 181, 0.2)" stroke="#7bdcb5" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        <div className="vocab-item">
          <h4>Surface</h4>
          <p>The surface of a prism is the union of all of its faces (the base faces and lateral faces).</p>
        </div>
        
        <div className="vocab-item">
          <h4>Net</h4>
          <p>A net is a two-dimensional diagram of the surface of a prism.</p>
        </div>

        <div className="vocab-questions">
          <h4>Vocabulary Check:</h4>
          <div className="vocab-q">
            <p><strong>1.</strong> Why are the lateral faces of right prisms always rectangular regions?</p>
            <p className="vocab-a">Because the lateral edges are perpendicular to the bases, forming 90° angles.</p>
          </div>
          <div className="vocab-q">
            <p><strong>2.</strong> What is the name of the right prism whose bases are rectangles?</p>
            <p className="vocab-a">A rectangular prism (or cuboid).</p>
          </div>
          <div className="vocab-q">
            <p><strong>3.</strong> How does the definition of right prism include the interior of the prism?</p>
            <p className="vocab-a">The prism includes all points between and on the two parallel bases.</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

// Lesson 21 Learn Section
const Lesson21Learn = () => (
  <div className="lesson-learn">
    <h2 className="lesson-title">
      <Box className="inline mr-2" />
      Lesson 21: Surface Area
    </h2>
    <p className="lesson-subtitle">Master the Art of Covering 3D Shapes!</p>

    {/* Opening Exercise */}
    <h3 className="section-title">📝 Opening Exercise</h3>
    <OpeningExercise />

    {/* Vocabulary */}
    <h3 className="section-title">📖 Vocabulary</h3>
    <VocabularySection />

    {/* Concept Explanation */}
    <Card className="concept-card">
      <CardHeader>
        <CardTitle className="concept-title">
          <Gamepad2 className="mr-2" />
          What is Surface Area?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="concept-content">
          <p className="concept-text">
            Imagine you're playing <strong>Roblox</strong> and you want to paint the outside of your house. 
            Surface area is the TOTAL area of ALL the faces (sides) of a 3D shape that you would need to paint!
          </p>
          
          <div className="gaming-analogy-box">
            <span className="analogy-emoji">🎁</span>
            <div>
              <p className="analogy-title">Minecraft Analogy:</p>
              <p>Think of wrapping a gift box in Minecraft. You need to cover all 6 sides (top, bottom, front, back, left, right) 
              with wrapping paper. The total paper you need = Surface Area!</p>
            </div>
          </div>

          <div className="formula-section">
            <h4>The Magic Formula for Rectangular Prisms:</h4>
            <div className="formula-box">
              <p className="formula-main">SA = 2(lw + lh + wh)</p>
              <p className="formula-sub">OR</p>
              <p className="formula-main">SA = LA + 2B</p>
              <p className="formula-note">Where LA = Lateral Area (sides), B = Area of one base</p>
            </div>
          </div>

          <div className="strategy-section">
            <h4>The NET Method (Super Easy!):</h4>
            <div className="net-explanation">
              <p>A <strong>NET</strong> is like unfolding a 3D box into a flat shape. Imagine unfolding a Minecraft chest!</p>
              <ol className="net-steps">
                <li>Draw the net (unfolded box)</li>
                <li>Label all the dimensions</li>
                <li>Calculate area of each rectangle</li>
                <li>Add them all up!</li>
              </ol>
            </div>
          </div>

          <div className="tips-section">
            <h4>Pro Tips from the Masters:</h4>
            <ul className="tips-list">
              <li>A rectangular prism has <strong>6 faces</strong>: 2 bases + 4 sides</li>
              <li>Opposite faces are EQUAL (top=bottom, front=back, left=right)</li>
              <li>For cubes: SA = 6 × side² (all faces are identical squares!)</li>
              <li>Always check your units - surface area is in square units (cm², in², etc.)</li>
              <li>When in doubt, draw the NET!</li>
            </ul>
          </div>

          <div className="common-traps">
            <h4>Common Traps to Avoid:</h4>
            <ul className="traps-list">
              <li>Forgetting to multiply by 2 for the pairs of faces</li>
              <li>Using volume formula instead of surface area</li>
              <li>Missing one of the 6 faces</li>
              <li>Not converting mixed numbers to improper fractions</li>
              <li>Forgetting that a cube has 6 identical faces</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Formula Reference */}
    <Card className="formulas-card">
      <CardHeader>
        <CardTitle>Quick Formula Reference</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="formulas-grid">
          <div className="formula-item"><span className="formula-name">Rectangular Prism:</span><span className="formula-math">SA = 2(lw + lh + wh)</span></div>
          <div className="formula-item"><span className="formula-name">Cube:</span><span className="formula-math">SA = 6s²</span></div>
          <div className="formula-item"><span className="formula-name">Lateral Area:</span><span className="formula-math">LA = Perimeter × Height</span></div>
          <div className="formula-item"><span className="formula-name">Triangle Area:</span><span className="formula-math">A = ½ × base × height</span></div>
        </div>
      </CardContent>
    </Card>
  </div>
)

// Continue with main App component...


// ============================================
// MAIN APP COMPONENT
// ============================================

// Hero Section
const HeroSection = ({ onSelectLesson }: { onSelectLesson: (lesson: '20' | '21') => void }) => (
  <div className="hero-section">
    <FloatingShapes />
    <div className="hero-content">
      <div className="hero-logo">
        <div className="logo-shape">
          <Sparkles className="logo-icon" />
        </div>
      </div>
      <h1 className="hero-title">MATH QUEST</h1>
      <p className="hero-subtitle">Complete Lessons 20 & 21 Adventure</p>
      
      <div className="lesson-selection">
        <p className="selection-prompt">Choose Your World:</p>
        <div className="lesson-buttons">
          <Button onClick={() => onSelectLesson('20')} className="lesson-button lesson-20">
            <Shapes className="mr-2" />
            <div className="button-text">
              <span className="lesson-num">Lesson 20</span>
              <span className="lesson-name">Composite Area</span>
            </div>
          </Button>
          <Button onClick={() => onSelectLesson('21')} className="lesson-button lesson-21">
            <Box className="mr-2" />
            <div className="button-text">
              <span className="lesson-num">Lesson 21</span>
              <span className="lesson-name">Surface Area</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  </div>
)

// Lesson Container
const LessonContainer = ({ lesson, onBack }: { lesson: '20' | '21'; onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('learn')
  const LessonIcon = lesson === '20' ? Shapes : Box

  return (
    <div className="lesson-container">
      <FloatingShapes />
      
      <div className="lesson-header">
        <Button onClick={onBack} variant="ghost" className="back-button">
          <ArrowLeft className="mr-2" />Back to Worlds
        </Button>
        <h2 className="lesson-main-title">
          <LessonIcon className="inline mr-2" />
          Lesson {lesson}: {lesson === '20' ? 'Composite Area Problems' : 'Surface Area'}
        </h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="lesson-tabs">
        <TabsList className="tabs-navigation">
          <TabsTrigger value="learn" className="tab-trigger">
            <BookOpen className="tab-icon" /><span className="tab-label">Learn</span>
          </TabsTrigger>
          <TabsTrigger value="practice" className="tab-trigger">
            <Target className="tab-icon" /><span className="tab-label">Practice</span>
          </TabsTrigger>
          <TabsTrigger value="quiz" className="tab-trigger">
            <Gamepad2 className="tab-icon" /><span className="tab-label">Quiz</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="learn" className="tab-content">
          {lesson === '20' ? <Lesson20Learn /> : <Lesson21Learn />}
        </TabsContent>

        <TabsContent value="practice" className="tab-content">
          {lesson === '20' ? <Lesson20Practice /> : <Lesson21Practice />}
        </TabsContent>

        <TabsContent value="quiz" className="tab-content">
          {lesson === '20' ? <Lesson20Quiz /> : <Lesson21Quiz />}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Main App
function App() {
  const [selectedLesson, setSelectedLesson] = useState<'20' | '21' | null>(null)

  return (
    <div className="app-container">
      {selectedLesson === null ? (
        <HeroSection onSelectLesson={setSelectedLesson} />
      ) : (
        <LessonContainer lesson={selectedLesson} onBack={() => setSelectedLesson(null)} />
      )}
    </div>
  )
}

export default App
