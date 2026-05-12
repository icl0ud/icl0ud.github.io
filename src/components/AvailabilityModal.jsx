import { useState, useEffect } from "react"

// TODO: Replace with your Google Calendar embed URL.
// Get it from Google Calendar > Settings > [your calendar] > "Integrate calendar" > "Public URL to this calendar"
// or copy the src="..." value from the "Embed code" iframe snippet.
const CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/embed?src=cameronmohne.cip%40gmail.com&ctz=America%2FLos_Angeles&mode=WEEK&showTitle=0&showPrint=0&showCalendars=0&showTabs=0"

export const AvailabilityModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (!isOpen) return

        const onKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false)
        }

        document.addEventListener("keydown", onKeyDown)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [isOpen])

    return (
        <>
            <button
                type="button"
                className="availability-btn"
                onClick={() => setIsOpen(true)}
            >
                View Availability
            </button>

            {isOpen && (
                <div
                    className="modal-backdrop"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="modal-panel"
                        role="dialog"
                        aria-modal="true"
                        aria-label="My availability calendar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2 className="modal-title">My Availability</h2>
                            <button
                                type="button"
                                className="modal-close"
                                aria-label="Close availability calendar"
                                onClick={() => setIsOpen(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <aside className="modal-instructions">
                                <h3 className="modal-instructions-title">
                                    I Look Forward to Meeting With You!
                                </h3>
                                <ol className="modal-instructions-list">
                                    <li>Find a time that is free</li>
                                    <li>
                                        Send a calendar invite to cameronmohne.cip@gmail.com
                                    </li>
                                    <li>Check that this page has been updated (it may take a bit)</li>
                                </ol>
                            </aside>
                            <iframe
                                className="calendar-iframe"
                                src={CALENDAR_EMBED_URL}
                                title="My availability calendar"
                                frameBorder="0"
                                scrolling="no"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
