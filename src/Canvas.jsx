import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

function Canvas() {
    return (
        <TransformWrapper
            minScale={0.25}
            maxScale={4}
            centerOnInit={true}
        >
            <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%", }}
            >
                <svg
                    width="7680"
                    height="4320"
                    viewBox="0 0 7680 4320"
                >
                    <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle
                            cx="2"
                            cy="2"
                            r="1.5"
                            fill="#d2d2d7"
                        />
                    </pattern>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#grid)"
                    />
                </svg>
            </TransformComponent>
        </TransformWrapper>
    )
}

export default Canvas