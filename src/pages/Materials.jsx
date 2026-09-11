import { ArrowUpRight, Check, Thermometer, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../layouts/PageHeader.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import { MATERIALS } from '../data/materials.js'
import '../pages/pages.css'
import '../components/home/Materials/materials.css'

const FALLBACK_MATERIALS = [
  {
    id: 'pla',
    code: 'MAT-01',
    name: 'PLA',
    type: 'FDM',
    category: 'Standard',
    desc: 'Reliable and economical material for prototypes, visual models and general-purpose parts.',
    properties: ['Easy to print', 'Good surface quality', 'Low cost'],
    applications: ['Prototypes', 'Concept models', 'Fixtures'],
    strength: 'Medium',
    temperature: '55°C',
  },
  {
    id: 'petg',
    code: 'MAT-02',
    name: 'PETG',
    type: 'FDM',
    category: 'Engineering',
    desc: 'Tougher than PLA with better impact resistance and environmental durability.',
    properties: ['Impact resistant', 'Chemical resistant', 'Low moisture'],
    applications: ['Functional parts', 'Enclosures', 'Fixtures'],
    strength: 'Medium–High',
    temperature: '80°C',
  },
  {
    id: 'abs',
    code: 'MAT-03',
    name: 'ABS',
    type: 'FDM',
    category: 'Engineering',
    desc: 'A durable engineering polymer suited to functional components and demanding environments.',
    properties: ['Durable', 'Heat resistant', 'Machinable'],
    applications: ['Housings', 'Mechanical parts', 'Production components'],
    strength: 'High',
    temperature: '95°C',
  },
  {
    id: 'nylon',
    code: 'MAT-04',
    name: 'Nylon',
    type: 'FDM / SLS',
    category: 'Performance',
    desc: 'Strong, lightweight and wear-resistant for functional engineering components.',
    properties: ['High toughness', 'Wear resistant', 'Lightweight'],
    applications: ['Gears', 'Brackets', 'Moving components'],
    strength: 'High',
    temperature: '100°C',
  },
  {
    id: 'tpu',
    code: 'MAT-05',
    name: 'TPU',
    type: 'FDM',
    category: 'Flexible',
    desc: 'Flexible elastomeric material for parts that need impact absorption and controlled deformation.',
    properties: ['Flexible', 'Impact absorbing', 'Abrasion resistant'],
    applications: ['Seals', 'Gaskets', 'Protective components'],
    strength: 'Flexible',
    temperature: '80°C',
  },
  {
    id: 'pc',
    code: 'MAT-06',
    name: 'Polycarbonate',
    type: 'FDM',
    category: 'High Performance',
    desc: 'High-strength material for demanding components requiring excellent impact and temperature resistance.',
    properties: ['High strength', 'Heat resistant', 'Impact resistant'],
    applications: ['Engineering parts', 'Machine components', 'Protective covers'],
    strength: 'Very High',
    temperature: '110°C',
  },
  {
    id: 'resin',
    code: 'MAT-07',
    name: 'Engineering Resin',
    type: 'SLA',
    category: 'Precision',
    desc: 'High-detail resin for accurate prototypes, small features and presentation-ready components.',
    properties: ['Fine detail', 'Smooth surface', 'High accuracy'],
    applications: ['Detailed prototypes', 'Models', 'Small components'],
    strength: 'Medium',
    temperature: '60°C',
  },
  {
    id: 'pa12',
    code: 'MAT-08',
    name: 'PA12',
    type: 'SLS',
    category: 'Performance',
    desc: 'Balanced engineering nylon for durable, complex parts without traditional support structures.',
    properties: ['Strong', 'Complex geometry', 'Wear resistant'],
    applications: ['Functional assemblies', 'Complex parts', 'Production runs'],
    strength: 'High',
    temperature: '95°C',
  },
]

const sourceMaterials =
  Array.isArray(MATERIALS) && MATERIALS.length
    ? MATERIALS
    : FALLBACK_MATERIALS

function getValue(item, keys, fallback = '') {
  for (const key of keys) {
    if (item?.[key] !== undefined && item?.[key] !== null) {
      return item[key]
    }
  }

  return fallback
}

function getList(item, keys, fallback) {
  const value = getValue(item, keys, fallback)

  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
  }

  return fallback
}

export default function Materials() {
  return (
    <>
      <PageHeader
        breadcrumb="Materials"
        eyebrow="Engineering Materials"
        title={
          <>
            Choose the material for the <em>job</em>
          </>
        }
        lede="From fast prototypes to demanding functional components, material selection determines how a printed part performs in the real world."
        facts={[
          { k: 'Material families', v: '08+' },
          { k: 'Technologies', v: 'FDM / SLA / SLS' },
          { k: 'Engineering grade', v: 'Available' },
          { k: 'DFM guidance', v: 'Included' },
        ]}
      />

      <section className="section materials-page">
        <div className="container">
          <SectionHeading
            eyebrow="Material library"
            title={
              <>
                Built around <em>performance</em>
              </>
            }
            lede="Every material has a different operating window. Compare the important characteristics before choosing what goes into production."
          />

          <div className="materials-page__grid">
            {sourceMaterials.map((material, index) => {
              const name = getValue(
                material,
                ['name', 'title', 'label'],
                `Material ${index + 1}`
              )

              const type = getValue(
                material,
                ['type', 'technology', 'process'],
                'FDM'
              )

              const category = getValue(
                material,
                ['category', 'class', 'family'],
                'Engineering'
              )

              const description = getValue(
                material,
                ['desc', 'description', 'text'],
                'Engineering material for professional additive manufacturing applications.'
              )

              const strength = getValue(
                material,
                ['strength', 'tensile'],
                'Engineering grade'
              )

              const temperature = getValue(
                material,
                ['temperature', 'heat', 'heatResistance'],
                'Varies'
              )

              const properties = getList(
                material,
                ['properties', 'features', 'benefits'],
                ['Reliable', 'Engineering grade', 'Production ready']
              )

              const applications = getList(
                material,
                ['applications', 'uses', 'recommendedFor'],
                ['Prototypes', 'Functional parts', 'Production']
              )

              const code = getValue(
                material,
                ['code', 'number'],
                `MAT-${String(index + 1).padStart(2, '0')}`
              )

              return (
                <Reveal key={material.id || material.slug || name}>
                  <article className="material-card">
                    <div className="material-card__top">
                      <span className="material-card__code mono">
                        {code}
                      </span>

                      <span className="material-card__type">
                        {type}
                      </span>
                    </div>

                    <div className="material-card__visual">
                      <div className="material-card__orb">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="material-card__rings material-card__rings--one" />
                      <div className="material-card__rings material-card__rings--two" />

                      <span className="material-card__category mono">
                        {category}
                      </span>
                    </div>

                    <div className="material-card__body">
                      <h3>{name}</h3>

                      <p>{description}</p>

                      <div className="material-card__stats">
                        <div>
                          <span>
                            <Zap size={13} />
                            Strength
                          </span>
                          <strong>{strength}</strong>
                        </div>

                        <div>
                          <span>
                            <Thermometer size={13} />
                            Heat
                          </span>
                          <strong>{temperature}</strong>
                        </div>
                      </div>

                      <div className="material-card__section">
                        <span className="material-card__label">
                          Key properties
                        </span>

                        <ul>
                          {properties.slice(0, 3).map((property, propertyIndex) => (
                            <li key={`${name}-property-${propertyIndex}`}>
                              <Check size={13} />
                              {property}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="material-card__section">
                        <span className="material-card__label">
                          Typical applications
                        </span>

                        <ul>
                          {applications.slice(0, 3).map(
                            (application, applicationIndex) => (
                              <li
                                key={`${name}-application-${applicationIndex}`}
                              >
                                <Check size={13} />
                                {application}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="material-card__link"
                    >
                      Ask about {name}
                      <ArrowUpRight size={16} />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--mist materials-page__guide">
        <div className="container">
          <SectionHeading
            eyebrow="Selection guide"
            title={
              <>
                Not sure which material? <em>Start here.</em>
              </>
            }
            lede="The best material depends on what the part has to survive. Use the application first, then optimize for cost and appearance."
          />

          <Reveal>
            <div className="materials-page__comparison">
              <div className="materials-page__comparison-row materials-page__comparison-row--head">
                <span>Requirement</span>
                <span>Recommended direction</span>
                <span>Reason</span>
              </div>

              {[
                [
                  'Fast visual prototype',
                  'PLA / Resin',
                  'Low cost and excellent visual quality',
                ],
                [
                  'Functional everyday part',
                  'PETG / ABS',
                  'Better durability and environmental resistance',
                ],
                [
                  'High-strength component',
                  'Nylon / PC',
                  'Higher mechanical and thermal performance',
                ],
                [
                  'Flexible component',
                  'TPU',
                  'Controlled flexibility and impact absorption',
                ],
                [
                  'Complex production geometry',
                  'PA12 / SLS',
                  'Complex parts without traditional support structures',
                ],
                [
                  'Fine detail',
                  'Engineering Resin',
                  'High resolution and smooth surfaces',
                ],
              ].map(([requirement, recommendation, reason]) => (
                <div
                  className="materials-page__comparison-row"
                  key={requirement}
                >
                  <strong>{requirement}</strong>
                  <span className="ok">{recommendation}</span>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="materials-page__cta">
              <div>
                <span className="section-label">
                  NEED A RECOMMENDATION?
                </span>

                <h3>
                  Send the geometry. We will choose the <em>right material.</em>
                </h3>

                <p>
                  Tell us how the part will be used and we can recommend
                  a suitable material and printing technology.
                </p>
              </div>

              <Link
                to="/contact"
                className="arrow-link arrow-link--green"
              >
                Get a material recommendation
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}