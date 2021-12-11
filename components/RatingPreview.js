import React from "react";

export default function RatingPreview({ starsCount, text }) {
    return (
        <div>
            {text && (
                <button className="btn btn-info me-2">
                    {text}
                </button>
            )}

            {[...Array(5)].map((el, i) => (
                <i
                    key={i}
                    className={`fa fa-star me-2 ${ i < starsCount ? "text-orange" : "text-muted"
                        }`}
                />
            ))}
        </div>
    );
}
