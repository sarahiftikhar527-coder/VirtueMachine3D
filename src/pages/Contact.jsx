import { useEffect, useRef, useState } from "react"
import { Check, Send, Play, ArrowUpRight } from "lucide-react"
import "./contact.css"

const SERVICES_OPTIONS = [
  "Rapid Prototyping",
  "Custom 3D Printing",
  "Product Development",
  "Functional Prototypes",
  "Engineering Parts",
  "Small-Batch Manufacturing",
]

const INITIAL = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
}

function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext("2d")

    let animationFrame
    let particles = []
    let width = 0
    let height = 0

    const mouse = {
      x: null,
      y: null,
    }

    const createParticles = () => {
      const count = window.innerWidth < 700 ? 48 : 100

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.48 + 0.18,
      }))
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

      createParticles()
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -10) particle.x = width + 10
        if (particle.x > width + 10) particle.x = -10
        if (particle.y < -10) particle.y = height + 10
        if (particle.y > height + 10) particle.y = -10

        if (mouse.x !== null && mouse.y !== null) {
          const dx = particle.x - mouse.x
          const dy = particle.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const force = (150 - distance) / 150

            particle.x +=
              (dx / (distance || 1)) * force * 0.3

            particle.y +=
              (dy / (distance || 1)) * force * 0.3
          }
        }
      })

      particles.forEach((a, i) => {
        const pulse =
          Math.sin(Date.now() * 0.002 + i) * 0.2 + 0.8

        ctx.beginPath()

        ctx.arc(
          a.x,
          a.y,
          a.size * pulse,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = `rgba(103, 198, 239, ${a.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]

          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 125) {
            const opacity =
              (1 - distance / 125) * 0.2

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)

            ctx.strokeStyle = `rgba(81, 171, 215, ${opacity})`
            ctx.lineWidth = 0.55
            ctx.stroke()
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = a.x - mouse.x
          const dy = a.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity =
              (1 - distance / 150) * 0.28

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)

            ctx.strokeStyle = `rgba(91, 195, 238, ${opacity})`
            ctx.lineWidth = 0.65
            ctx.stroke()
          }
        }
      })

      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrame)

      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="contact-network"
      aria-hidden="true"
    />
  )
}

function QuoteForm() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const submit = async (event) => {
    event.preventDefault()

    setLoading(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    )

    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success">
        <div className="success-icon">
          <Check size={27} strokeWidth={2.2} />
        </div>

        <span className="form-success__eyebrow">
          MESSAGE SENT
        </span>

        <h3>Request received</h3>

        <p>
          Thanks for reaching out. We’ll review your
          project and get back to you shortly.
        </p>

        <button
          type="button"
          className="success-back"
          onClick={() => {
            setSent(false)
            setForm(INITIAL)
          }}
        >
          Send another message
          <ArrowUpRight size={15} />
        </button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="c-name">Name</label>

          <input
            id="c-name"
            name="name"
            type="text"
            required
            maxLength={60}
            placeholder="Your name"
            value={form.name}
            onChange={update}
          />
        </div>

        <div className="field">
          <label htmlFor="c-email">Email</label>

          <input
            id="c-email"
            name="email"
            type="email"
            required
            maxLength={100}
            placeholder="you@company.com"
            value={form.email}
            onChange={update}
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="c-company">Company</label>

          <input
            id="c-company"
            name="company"
            type="text"
            maxLength={80}
            placeholder="Company name"
            value={form.company}
            onChange={update}
          />
        </div>

        <div className="field">
          <label htmlFor="c-service">Service</label>

          <select
            id="c-service"
            name="service"
            required
            value={form.service}
            onChange={update}
          >
            <option value="" disabled>
              Select service
            </option>

            {SERVICES_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="c-message">
          Project details
        </label>

        <textarea
          id="c-message"
          name="message"
          required
          minLength={20}
          maxLength={700}
          placeholder="Tell us about your part, quantity, material and deadline..."
          value={form.message}
          onChange={update}
        />
      </div>

      <button
        type="submit"
        className="message-button"
        disabled={loading}
      >
        <span className="message-button__text">
          {loading ? "Sending..." : "Send a Message"}
        </span>

        <span className="message-button__icon">
          {loading ? (
            <span className="form-spinner" />
          ) : (
            <Send
              size={16}
              strokeWidth={2}
            />
          )}
        </span>
      </button>
    </form>
  )
}

export default function Contact() {
  const videoRef = useRef(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const startVideo = async () => {
      try {
        await video.play()
        setVideoPlaying(true)
      } catch {
        setVideoPlaying(false)
      }
    }

    startVideo()
  }, [])

  const toggleVideo = async () => {
    const video = videoRef.current

    if (!video) return

    if (video.paused) {
      try {
        await video.play()
        setVideoPlaying(true)
      } catch {
        setVideoPlaying(false)
      }
    } else {
      video.pause()
      setVideoPlaying(false)
    }
  }

  const handleVideoError = () => {
    setVideoPlaying(false)
  }

  return (
    <main className="contact-page">
      <NetworkBackground />

      <div
        className="contact-glow contact-glow-one"
        aria-hidden="true"
      />

      <div
        className="contact-glow contact-glow-two"
        aria-hidden="true"
      />

      <section className="contact-card">
        <div className="contact-video">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={handleVideoError}
          >
            <source
              src="/videos/contact/contact-printing.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>

          <div className="contact-video__overlay" />

          <div className="contact-video__label">
            <span className="contact-video__status">
              <span />
              LIVE PRODUCTION
            </span>

            <span className="contact-video__title">
              ADDITIVE MANUFACTURING
            </span>
          </div>

          <button
            type="button"
            className="contact-video__play"
            onClick={toggleVideo}
            aria-label={
              videoPlaying
                ? "Pause production video"
                : "Play production video"
            }
          >
            <Play
              size={18}
              fill="currentColor"
              strokeWidth={1.5}
            />
          </button>
        </div>

        <div className="contact-form">
          <div className="form-title">
            <h2>
              Let’s build
              <br />
              something real.
            </h2>

            <p>
              Tell us what you’re working on and we’ll
              help turn the digital model into a physical
              part.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </main>
  )
}