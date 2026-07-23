const form=document.querySelector("form");
const cityInput = document.querySelector("#city-input");
const activity = document.querySelector("#recommend-activity");
const reason = document.querySelector("#recommend-reason");
const caution = document.querySelector("#caution");
const sampleData = {
    서울: {
        activity: "공원 산책",
        reason: "맑고 기온이 적당합니다.",
        caution: "자외선 차단제를 바르세요."
    },

    부산: {
        activity: "해변 산책",
        reason: "바람이 선선합니다.",
        caution: "강한 바람에 주의하세요."
    }
};

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityName = cityInput.value.trim();
    if(cityName===""){
        return
    }
    const result=sampleData[cityName];
    if (!result) {
    return
    }
    activity.textContent=result.activity;
    reason.textContent=result.reason;
    caution.textContent=result.caution;
});