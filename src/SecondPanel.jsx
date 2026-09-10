import { GlassCard, GlassButton, GlassInput } from "@zakisheriff/liquid-glass"
import { useState } from "react"
import back from "./assets/back.svg"
import ok from "./assets/ok.svg"

function SecondPanel({ setPanel }) {
    const lines = [
        { code: "BR", color: "#C48C31", textColor: "#FFFFFF" },
        { code: "R", color: "#E3002C", textColor: "#FFFFFF" },
        { code: "PK", color: "#FD92A3", textColor: "#000000" },
        { code: "G", color: "#008659", textColor: "#FFFFFF" },
        { code: "O", color: "#F8B61C", textColor: "#000000" },
        { code: "BL", color: "#0070BD", textColor: "#FFFFFF" },
        { code: "Y", color: "#FFDB00", textColor: "#000000" },
        { code: "LG", color: "#A1D884", textColor: "#000000" },
        { code: "M", color: "#E60080", textColor: "#FFFFFF" },
        { code: "LB", color: "#79BCE8", textColor: "#000000" },
        { code: "C", color: "#00FFFF", textColor: "#000000" },
        { code: "P", color: "#8246AF", textColor: "#FFFFFF" },
    ]
    const [CNstation, setCNStation] = useState("")
    const [ENstation, setENStation] = useState("")
    const [selectedLine, setSelectedLine] = useState(null)
    const [stationNum, setStationNum] = useState("")
    return (
        <GlassCard>
            <div className="header">
                <div className="button">
                    <GlassButton
                        size="sm"
                        onClick={() => setPanel("first")}>
                        <img src={back} />
                        返回
                    </GlassButton>
                </div>
                <span>車站設定</span>
            </div>
            <div className="divider" />
            <div className="input">
                <GlassInput
                    label="車站名稱"
                    value={CNstation}
                    onChange={(event) => setCNStation(event.target.value)}
                    style={{
                        width: "250px", "--glass-input-height": "50px"
                    }}
                />
                <GlassInput
                    label="StationName"
                    value={ENstation}
                    onChange={(event) => setENStation(event.target.value)}
                    style={{
                        width: "250px", "--glass-input-height": "50px"
                    }}
                />
                <GlassInput
                    label="車站編號"
                    value={stationNum}
                    onChange={(event) => {
                        const value = event.target.value.replace(/\D/g, "")
                        if (value === "" || 0 < Number(value) && Number(value) <= 99) {
                            setStationNum(value)
                        }
                    }}
                    style={{
                        width: "250px", "--glass-input-height": "50px"
                    }}
                />
            </div>
            <small>選擇路線</small>
            <div className="line">
                {lines.map((line) => (
                    <GlassButton
                        tint={line.color}
                        className={selectedLine === line.code ? "selected" : ""}
                        style={{
                            minWidth: "40px",
                            height: "40px",
                            color: line.textColor,
                            "--line-color": line.color,
                        }}
                        onClick={() => setSelectedLine(line.code)}
                    >
                        {line.code}
                    </GlassButton>
                ))}
            </div>
            <div className="divider" />
            <div className="button">
                <GlassButton size="sm">
                    <img src={ok} />
                    建立車站
                </GlassButton>
            </div>
        </GlassCard>
    )
}

export default SecondPanel