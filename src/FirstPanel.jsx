import { Glass } from "@samasante/liquid-glass"

function FirstPanel() {
    return (
        <Glass className="panel">
            <div className="first-header">
                <div className="logo">
                    <img src={`${import.meta.env.BASE_URL}logo.svg`} />
                </div>
                <div>SeiChan Metro Builder</div>
            </div>
            <div className="divider" />
            <div className="button">
                <button>
                    <img src={`${import.meta.env.BASE_URL}add.svg`} />
                    新增車站
                </button>
                <button>
                    <img src={`${import.meta.env.BASE_URL}line.svg`} />
                    繪製路線
                </button>
                <button>
                    <img src={`${import.meta.env.BASE_URL}export.svg`} />
                    匯出圖像
                </button>
            </div>
        </Glass>
    )
}

export default FirstPanel