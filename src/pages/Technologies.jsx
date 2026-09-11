import '../pages/pages.css'
import './technologies.css'
import PageHeader from '../layouts/PageHeader.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import { TECHNOLOGIES } from '../data/technologies.js'
import { TECH_GUIDE as GUIDE } from '../data/techGuide.js'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const DEEP_DIVES = ['fdm', 'sla', 'sls']

export default function Technologies() {
  return (
    <>
      <PageHeader
        breadcrumb="Technologies"
        eyebrow="3D Printing Technologies"
        title={
          <>
            The right machine for <em>every geometry</em>
          </>
        }
        lede="Six technologies, one calibration standard. Daily verification keeps every system in the fleet quoting the same tolerances it delivers."
        facts={[
          { k: 'Technologies', v: '6' },
          { k: 'Min. layer', v: '25 µm' },
          { k: 'Max. build', v: '450 mm' },
          { k: 'Best tolerance', v: '±0.05 mm' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core systems"
            title={
              <>
                FDM, SLA & SLS — <em>the workhorses</em>
              </>
            }
            lede="Three technologies cover 90% of engineering parts. Here is exactly what each one does, with the numbers."
          />

          {DEEP_DIVES.map((id) => {
            const t = TECHNOLOGIES.find((x) => x.id === id)

            if (!t) return null

            return (
              <Reveal key={t.id}>
                <div className="tech-detail">
                  <div className="tech-detail__art">
                    <div className="tech-detail__visual">
                      <div className="tech-detail__visual-ring tech-detail__visual-ring--outer" />
                      <div className="tech-detail__visual-ring tech-detail__visual-ring--middle" />
                      <div className="tech-detail__visual-ring tech-detail__visual-ring--inner" />

                      <div className="tech-detail__visual-core">
                        <span className="mono">{t.code}</span>
                        <strong>{t.name}</strong>
                      </div>

                      <div className="tech-detail__visual-line tech-detail__visual-line--one" />
                      <div className="tech-detail__visual-line tech-detail__visual-line--two" />
                      <div className="tech-detail__visual-line tech-detail__visual-line--three" />
                    </div>

                    <span className="tech-detail__code mono">
                      {t.code}
                    </span>
                  </div>

                  <div className="tech-detail__body">
                    <h3>
                      {t.name}{' '}
                      <span className="mono tech-detail__full">
                        {t.full}
                      </span>
                    </h3>

                    <p>{t.desc}</p>

                    <ul className="spec-lines spec-lines--grid">
                      <li>
                        <span>Layer height</span>
                        <strong>{t.specs.layer}</strong>
                      </li>

                      <li>
                        <span>Build volume</span>
                        <strong>{t.specs.build}</strong>
                      </li>

                      <li>
                        <span>Tolerance</span>
                        <strong>{t.specs.tolerance}</strong>
                      </li>

                      <li>
                        <span>Materials</span>
                        <strong>{t.specs.materials}</strong>
                      </li>
                    </ul>

                    <Link
                      to="/contact"
                      className="arrow-link arrow-link--green"
                    >
                      Print with {t.name}
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHeading
            eyebrow="Comparison"
            title={
              <>
                Full fleet, <em>side by side</em>
              </>
            }
            lede="All six systems with their operating windows. Unsure which fits? Upload the file — the DFM review answers it for free."
          />

          <Reveal>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Technology</th>
                    <th>Layer height</th>
                    <th>Build volume</th>
                    <th>Tolerance</th>
                    <th>Materials</th>
                  </tr>
                </thead>

                <tbody>
                  {TECHNOLOGIES.map((t) => (
                    <tr key={t.id}>
                      <td>
                        {t.name}{' '}
                        <span className="mono spec-table__sub">
                          {t.full}
                        </span>
                      </td>

                      <td>{t.specs.layer}</td>
                      <td>{t.specs.build}</td>
                      <td className="ok">{t.specs.tolerance}</td>
                      <td>{t.specs.materials}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <SectionHeading
            eyebrow="Selection guide"
            title={
              <>
                Start from the <em>use case</em>
              </>
            }
          />

          <Reveal>
            <div className="spec-table-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>If you need</th>
                    <th>Go with</th>
                    <th>Why</th>
                  </tr>
                </thead>

                <tbody>
                  {GUIDE.map(([need, pick, why]) => (
                    <tr key={need}>
                      <td>{need}</td>
                      <td className="ok">{pick}</td>
                      <td>{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}