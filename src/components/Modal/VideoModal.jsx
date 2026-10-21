import { useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * Extracts and formats a YouTube video embed URL in Privacy-Enhanced mode (youtube-nocookie.com)
 */
export function getYouTubeEmbedUrl(url) {
  if (!url) return ''
  const trimmed = url.trim()

  // If already an embed URL
  if (trimmed.includes('youtube.com/embed/') || trimmed.includes('youtube-nocookie.com/embed/')) {
    const separator = trimmed.includes('?') ? '&' : '?'
    const query = []
    if (!trimmed.includes('autoplay=')) query.push('autoplay=1')
    if (!trimmed.includes('mute=')) query.push('mute=1')
    if (!trimmed.includes('rel=')) query.push('rel=0')
    return query.length > 0 ? `${trimmed}${separator}${query.join('&')}` : trimmed
  }

  // Handle standard YouTube URL patterns:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/shorts/VIDEO_ID
  // - https://m.youtube.com/watch?v=VIDEO_ID
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/ ]{11})/i
  const match = trimmed.match(regExp)

  const videoId = match && match[1] ? match[1] : (/^[a-zA-Z0-9_-]{11}$/.test(trimmed) ? trimmed : null)

  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0`
  }

  return trimmed
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title = 'Project Demo',
  isVertical,
}) {
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const embedUrl = getYouTubeEmbedUrl(videoUrl)
  const isShort = isVertical ?? (Boolean(videoUrl) && videoUrl.toLowerCase().includes('/shorts/'))

  return createPortal(
    <div
      className="modal-container active"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="overlay active"
        onClick={onClose}
        aria-hidden="true"
      />

      <section className={`profile-modal video-modal${isShort ? ' is-vertical' : ''}`}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <ion-icon name="close-outline" />
        </button>

        {title && (
          <div className="video-modal-header">
            <h3 className="video-modal-title">{title}</h3>
          </div>
        )}

        <div className={`video-modal-player-wrap${isShort ? ' is-vertical' : ''}`}>
          {embedUrl ? (
            <iframe
              className="video-modal-iframe"
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="video-modal-empty">
              <p>No video URL specified.</p>
            </div>
          )}
        </div>
      </section>
    </div>,
    document.body
  )
}
