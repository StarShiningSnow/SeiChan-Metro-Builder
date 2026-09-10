import { GlassCard, GlassButton } from "@zakisheriff/liquid-glass"
import logo from "./assets/logo.svg"
import add from "./assets/add.svg"
import line from "./assets/line.svg"
import save from "./assets/save.svg"

function FirstPanel({ setPanel }) {
    return (
        <GlassCard>
            <div className="header">
                <img
                    src={logo}
                    className="logo"
                />
                <span>SeiChan Metro Builder</span>
            </div>
            <div className="divider" />
            <div className="button">
                <GlassButton
                    onClick={() => setPanel("second")}
                    size="sm"
                >
                    <img src={add} />
                    新增車站
                </GlassButton>
                <GlassButton
                    size="sm"
                >
                    <img src={line} />
                    繪製路線
                </GlassButton>
                <GlassButton
                    size="sm"
                >
                    <img src={save} />
                    匯出圖像
                </GlassButton>
            </div>
        </GlassCard>
    )
}

export default FirstPanel