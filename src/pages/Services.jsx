import { ArrowUpRight, Check, Clock3, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../layouts/PageHeader.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import { SERVICES } from '../data/services.js'
import '../pages/pages.css'
import './services.css'

const FALLBACK_SERVICES = [
  {
    id: 'rapid-prototyping',
    code: 'SV-01',
    name: 'Rapid Prototyping',
    title: 'Rapid Prototyping',
    desc: 'Functional prototypes produced quickly for fit, form, testing and early-stage validation.',
    description:
      'Functional prototypes produced quickly for fit, form, testing and early-stage validation.',
    features: [
      'Fast design iteration',
      'Functional test parts',
      'Low-volume validation',
    ],
    turnaround: '1–3 days',
    materials: 'PLA, PETG, ABS, Nylon',
  },
  {
    id: 'production-parts',
    code: 'SV-02',
    name: 'Production Parts',
    title: 'Production Parts',
    desc: 'Repeatable additive manufacturing for low-volume and bridge-production components.',
    description:
      'Repeatable additive manufacturing for low-volume and bridge-production components.',
    features: [
      'Repeatable production',
      'Engineering-grade materials',
      'Batch manufacturing',
    ],
    turnaround: '3–7 days',
    materials: 'Nylon, PC, TPU, composites',
  },
  {
    id: 'engineering',
    code: 'SV-03',
    name: 'Engineering Parts',
    title: 'Engineering Parts',
    desc: 'Precision components designed around real mechanical requirements and demanding applications.',
    description:
      'Precision components designed around real mechanical requirements and demanding applications.',
    features: [
      'Tight dimensional control',
      'Mechanical performance',
      'Application-focused materials',
    ],
    turnaround: '3–7 days',
    materials: 'PA, PC, Carbon Fiber',
  },
  {
    id: 'dfm-review',
    code: 'SV-04',
    name: 'DFM Review',
    title: 'DFM Review',
    desc: 'Design-for-manufacturing feedback before production to reduce risk, cost and unnecessary iteration.',
    description:
      'Design-for-manufacturing feedback before production to reduce risk, cost and unnecessary iteration.',
    features: [
      'Geometry review',
      'Material recommendation',
      'Print orientation analysis',
    ],
    turnaround: 'Same day',
    materials: 'All supported materials',
  },
  {
    id: 'finishing',
    code: 'SV-05',
    name: 'Finishing',
    title: 'Finishing & Post-Processing',
    desc: 'Professional finishing options that improve appearance, handling and application readiness.',
    description:
      'Professional finishing options that improve appearance, handling and application readiness.',
    features: [
      'Surface finishing',
      'Support removal',
      'Application-ready parts',
    ],
    turnaround: '1–3 days',
    materials: 'FDM, SLA, SLS',
  },
  {
    id: 'small-batch',
    code: 'SV-06',
    name: 'Small Batch Manufacturing',
    title: 'Small Batch Manufacturing',
    desc: 'Flexible production runs without traditional tooling costs or long setup cycles.',
    description:
      'Flexible production runs without traditional tooling costs or long setup cycles.',
    features: [
      'Flexible quantities',
      'No tooling required',
      'Repeatable batches',
    ],
    turnaround: '3–10 days',
    materials: 'Engineering polymers',
  },
]

const sourceServices =
  Array.isArray(SERVICES) && SERVICES.length
    ? SERVICES
    : FALLBACK_SERVICES

function getValue(item, keys, fallback = '') {
  for (const key of keys) {
    if (item?.[key] !== undefined && item?.[key] !== null) {
      return item[key]
    }
  }

  return fallback
}

function getFeatures(item) {
  const features = getValue(item, ['features', 'benefits', 'includes'], [])

  if (Array.isArray(features)) {
    return features
  }

  return [
    'Engineering-focused workflow',
    'Professional production',
    'Quality-controlled output',
  ]
}

export default function Services() {
  return (
    <>
      <PageHeader
        breadcrumb="Services"
        eyebrow="Manufacturing Services"
        title={
          <>
            From digital file to <em>finished part</em>
          </>
        }
        lede="A complete additive manufacturing workflow built around engineering accuracy, material selection and reliable production."
        facts={[
          { k: 'Services', v: String(sourceServices.length).padStart(2, '0') },
          { k: 'File types', v: 'STEP / STL' },
          { k: 'DFM review', v: 'Included' },
          { k: 'Typical lead', v: '1–7 days' },
        ]}
      />

      <section className="section services-page">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Manufacturing without the <em>friction</em>
              </>
            }
            lede="Choose the service that fits your project stage. Every job follows the same controlled workflow from design review through production."
          />

          <div className="services-page__grid">
            {sourceServices.map((service, index) => {
              const name = getValue(
                service,
                ['name', 'title', 'label'],
                `Service ${String(index + 1).padStart(2, '0')}`
              )

              const description = getValue(
                service,
                ['desc', 'description', 'lede', 'text'],
                'Professional additive manufacturing for engineering and production applications.'
              )

              const code = getValue(
                service,
                ['code', 'number'],
                `SV-${String(index + 1).padStart(2, '0')}`
              )

              const turnaround = getValue(
                service,
                ['turnaround', 'leadTime', 'time'],
                '1–7 days'
              )

              const materials = getValue(
                service,
                ['materials', 'material'],
                'Engineering polymers'
              )

              const features = getFeatures(service)

              return (
                <Reveal key={service.id || service.slug || name}>
                  <article className="service-card">
                    <div className="service-card__top">
                      <span className="service-card__code mono">
                        {code}
                      </span>

                      <span className="service-card__index">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="service-card__icon">
                      <Layers3 size={25} strokeWidth={1.5} />
                    </div>

                    <h3>{name}</h3>

                    <p>{description}</p>

                    <div className="service-card__specs">
                      <div>
                        <span>
                          <Clock3 size={13} />
                          Turnaround
                        </span>
                        <strong>{turnaround}</strong>
                      </div>

                      <div>
                        <span>
                          <Layers3 size={13} />
                          Materials
                        </span>
                        <strong>{materials}</strong>
                      </div>
                    </div>

                    <ul className="service-card__features">
                      {features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={`${name}-${featureIndex}`}>
                          <Check size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="service-card__link"
                    >
                      Discuss this service
                      <ArrowUpRight size={16} />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--mist services-page__process">
        <div className="container">
          <SectionHeading
            eyebrow="One workflow"
            title={
              <>
                Simple process. <em>Controlled output.</em>
              </>
            }
            lede="The goal is straightforward: remove uncertainty between your CAD file and the physical component."
          />

          <div className="services-page__steps">
            {[
              {
                number: '01',
                title: 'Upload',
                text: 'Send your CAD model and tell us what the part needs to do.',
              },
              {
                number: '02',
                title: 'Review',
                text: 'We check geometry, material, orientation and manufacturability.',
              },
              {
                number: '03',
                title: 'Produce',
                text: 'The approved design moves into the appropriate print technology.',
              },
              {
                number: '04',
                title: 'Deliver',
                text: 'Your finished components are inspected, packed and dispatched.',
              },
            ].map((step) => (
              <Reveal key={step.number}>
                <div className="services-page__step">
                  <span className="services-page__step-number mono">
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="services-page__cta">
              <div>
                <span className="section-label">
                  READY WHEN YOU ARE
                </span>

                <h3>
                  Have a part that needs <em>printing?</em>
                </h3>

                <p>
                  Send the model. We will help you choose the right
                  process and material.
                </p>
              </div>

              <Link to="/contact" className="arrow-link arrow-link--green">
                Start a project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}