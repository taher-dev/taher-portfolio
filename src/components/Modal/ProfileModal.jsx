import { useState } from 'react'
import { createPortal } from 'react-dom'
import avatarImg from '../../assets/images/taher-mahmud.jpeg'

export default function ProfileModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Clickable avatar inside sidebar */}
      <figure className="avatar-box" onClick={() => setOpen(true)}>
        <img
          src={avatarImg}
          alt="Taher Mahmud"
          width="80"
        />
      </figure>

      {/* Modal */}
      {createPortal(
        <div className={`modal-container${open ? ' active' : ''}`}>
          <div
            className={`overlay${open ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          />

          <section className="profile-modal">
            <button
              className="modal-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
            >
              <ion-icon name="close-outline" />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={avatarImg} alt="Taher Mahmud" />
              </figure>
            </div>
          </section>
        </div>,
        document.body
      )}
    </>
  )
}
