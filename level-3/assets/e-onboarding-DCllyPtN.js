import{i as T,s as A}from"./e-maker-core-a-DZtYiIYv.js";const C=["So you finally showed up. The junk's been piling up waiting for someone with thumbs. Mine me five iron off those rust heaps — hold left-click and get to work.","Welcome to the most beautiful disaster you've ever seen, rookie. Your first job's simple: five iron scrap. Hold left-click to dig, don't let go 'til it pops.","Name's Earl. I run this place. Don't touch the blue drum. DO bring me five iron scrap before lunch — left-click mines, grab what you can carry."],z="Robot arm, huh? Want to build something that actually grabs stuff? Head east along the junk-lanterns — the Smelter's got better parts waiting.",H=["It'll work, but not as clean as the Smelter's. Good enough for a first build, kid.","Gate Edition. She's a little rough, a little slow, and she's YOURS. The Smelter down the east path builds 'em proper when you're ready."],B="Those junk-lanterns? Rigged 'em myself years back. Mark the east path to the Smelter. Follow 'em if you're looking to upgrade.",L="That's iron! Good eye. I'm Spark — I help bots learn to think. Build one up, and we'll teach it something cool. ⚡",N="Ooh, nice find! I'm Spark — I help bots learn to think. Keep hauling scrap and we'll build one a brain. ⚡";function j(n){return n==="iron_scrap"?L:N}const v="scrapcraft_earl_greeted",w="scrapcraft_spark_greeted";class S{constructor(e=null){this._storage=e,this._mem={earl:!1,spark:!1}}static browser(){return new S(typeof localStorage<"u"?localStorage:null)}_flag(e,s){if(this._storage)try{return this._storage.getItem(e)==="1"}catch{}return this._mem[s]}_set(e,s){var t;this._mem[s]=!0;try{(t=this._storage)==null||t.setItem(e,"1")}catch{}}get earlGreeted(){return this._flag(v,"earl")}markEarlGreeted(){this._set(v,"earl")}get sparkGreeted(){return this._flag(w,"spark")}markSparkGreeted(){this._set(w,"spark")}}const E="scrapcraft_onboarding_config";function b(){var n;try{return JSON.parse(((n=typeof localStorage<"u"?localStorage:null)==null?void 0:n.getItem(E))||"{}")}catch{return{}}}function O(n={}){var s;const e={...b(),...n,_rev:Date.now()};try{(s=typeof localStorage<"u"?localStorage:null)==null||s.setItem(E,JSON.stringify(e))}catch{}return e}function k(n=b()){return!!(n.cfWorkerUrl||n.apiKey&&n.aiProvider&&n.aiProvider!=="offline")}function R(){var n,e;try{(e=(n=typeof document<"u"?document:null)==null?void 0:n.dispatchEvent)==null||e.call(n,new CustomEvent("scrapcraft:config-changed"))}catch{}}const f=[{id:"welcome",title:"Big Earl's Yard",icon:"🏭",content:`
      <p><b>Earl:</b> <i>"So you finally showed up. The junk's been piling up
      waiting for someone with thumbs."</i></p>
      <p>First job: <b>mine 5 iron scrap</b> off the rust heaps —
      <b>hold left-click</b> to dig.</p>
      <p><b>WASD</b> to move &nbsp;·&nbsp; <b>E</b> for the workshop.
      That's everything. Get to work, rookie.</p>
    `},{id:"ready",title:"The Yard Awaits",icon:"🚀",content:`
      <p>You're loose in the yard now. The iron's out there waiting.</p>
      <p>Hit <b>F</b> to talk to Earl. Stuck? Hit <b>H</b> any time.</p>
      <p>And if something floats by and says hello while you're hauling
      scrap… don't run away.</p>
    `}];class F{constructor(e){this.game=e,this.el=null,this.scrim=null,this.currentStep=0,this.config={aiProvider:null,apiKey:null,cfWorkerUrl:null,tutorialComplete:!1}}isComplete(){try{return localStorage.getItem("scrapcraft_onboarding_done")==="true"}catch{return!1}}markComplete(){try{localStorage.setItem("scrapcraft_onboarding_done","true"),localStorage.setItem("scrapcraft_onboarding_config",JSON.stringify(this.config))}catch{}}loadConfig(){try{const e=localStorage.getItem("scrapcraft_onboarding_config");e&&Object.assign(this.config,JSON.parse(e))}catch{}}show(){if(!this.isComplete()){if(this.loadConfig(),!document.getElementById("onboarding-wizard-style")){const e=document.createElement("style");e.id="onboarding-wizard-style",e.textContent=this._css(),document.head.appendChild(e)}this.scrim=document.createElement("div"),this.scrim.className="ow-scrim",document.body.appendChild(this.scrim),this.el=document.createElement("div"),this.el.className="ow-overlay",this.el.id="onboarding-wizard",this.el.innerHTML=`
      <div class="ow-card">
        <div class="ow-header">
          <span class="ow-icon" id="ow-icon">🏭</span>
          <h2 class="ow-title" id="ow-title">Big Earl's Yard</h2>
        </div>
        <div class="ow-body" id="ow-body"></div>
        <div class="ow-dots" id="ow-dots"></div>
        <div class="ow-nav">
          <button class="ow-btn ow-btn-back" id="ow-back" disabled>← Back</button>
          <button class="ow-btn ow-btn-skip" id="ow-skip">Skip →</button>
          <button class="ow-btn ow-btn-next" id="ow-next">Next →</button>
        </div>
      </div>
    `,document.body.appendChild(this.el),this._buildDots(),this.el.querySelector("#ow-next").addEventListener("click",()=>this._nextStep()),this.el.querySelector("#ow-back").addEventListener("click",()=>this._prevStep()),this.el.querySelector("#ow-skip").addEventListener("click",()=>this.finish()),requestAnimationFrame(()=>{var e;(e=this.scrim)==null||e.classList.add("ow-visible"),this.el.classList.add("ow-visible")}),this.renderStep()}}_buildDots(){const e=document.getElementById("ow-dots");e&&(e.innerHTML=f.map((s,t)=>`<span class="ow-dot${t===0?" active":""}" data-index="${t}"></span>`).join(""))}_updateDots(){this.el.querySelectorAll(".ow-dot").forEach((s,t)=>s.classList.toggle("active",t===this.currentStep))}_updateNav(){const e=this.el.querySelector("#ow-back"),s=this.el.querySelector("#ow-next"),t=this.el.querySelector("#ow-skip"),r=f[this.currentStep];e.disabled=this.currentStep===0,r.id==="ready"?(s.textContent="🚀 Start Playing!",t.style.display="none"):(s.textContent="Next →",t.style.display="")}renderStep(){const e=f[this.currentStep],s=document.getElementById("ow-icon"),t=document.getElementById("ow-title"),r=document.getElementById("ow-body");r&&(r.classList.remove("ow-body-in"),r.style.opacity="0",r.style.transform="translateX(20px)",setTimeout(()=>{s&&(s.textContent=e.icon),t&&(t.textContent=e.title);let i=e.content??"";e.id==="welcome"&&(i=`<p><b>Earl:</b> <i>"${C[Math.floor(Math.random()*3)].split(" — ")[0]}"</i></p>`+i.replace(/<p><b>Earl:<\/b>[\s\S]*?<\/p>/,"")),r.innerHTML=`<div class="ow-content">${i}</div>`,this._updateNav(),requestAnimationFrame(()=>{r.style.opacity="1",r.style.transform="translateX(0)",r.classList.add("ow-body-in")}),this._updateDots()},150))}_nextStep(){this.currentStep<f.length-1?(this.currentStep++,this.renderStep()):this.finish()}_prevStep(){this.currentStep>0&&(this.currentStep--,this.renderStep())}finish(){var e,s,t;this.markComplete(),this.el?(this.el.classList.remove("ow-visible"),(e=this.scrim)==null||e.classList.remove("ow-visible"),setTimeout(()=>{var r,i,o,a,l,d;(r=this.el)==null||r.remove(),this.el=null,(i=this.scrim)==null||i.remove(),this.scrim=null,(a=(o=this.game)._onOnboardingComplete)==null||a.call(o),!document.pointerLockElement&&!((l=this.game)!=null&&l.openingPending)&&((d=this.game.canvas)==null||d.requestPointerLock())},300)):(t=(s=this.game)._onOnboardingComplete)==null||t.call(s)}_css(){return`
/* ── Onboarding Wizard — first-run overlay (2 steps, no ceremony) ── */
/* Split scrim: dims the 3D world only — sits BELOW the HUD (z:50), clicks
   pass through. The HUD (z:90) stays at full contrast behind the card. */
.ow-scrim {
  position: fixed; inset: 0;
  background: rgba(8, 10, 6, 0.55);
  z-index: 50;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.ow-scrim.ow-visible {
  opacity: 1;
}
/* Card wrapper: transparent flex centering ABOVE the HUD (z:100) — the
   opaque .ow-card keeps its contrast over the bright HUD. */
.ow-overlay {
  position: fixed; inset: 0;
  display: flex; align-items: center; justify-content: center;
  z-index: 100;
  font-family: 'Courier New', monospace;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.ow-overlay.ow-visible {
  opacity: 1;
}

.ow-card {
  background: #121212;
  border: 1px solid #2a2a2a;
  border-radius: 14px;
  padding: 28px 32px;
  max-width: 520px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(240,180,41,0.06);
  transform: translateY(10px);
  transition: transform 0.3s ease;
}
.ow-visible .ow-card {
  transform: translateY(0);
}

.ow-header {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #1e1e1e;
}
.ow-icon {
  font-size: 28px;
  flex-shrink: 0;
}
.ow-title {
  font-size: 16px;
  color: #f0b429;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin: 0;
}

.ow-body {
  min-height: 160px;
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.ow-body-in {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.ow-content p {
  font-size: 12px;
  color: #999;
  line-height: 1.65;
  margin: 6px 0;
}
.ow-content b { color: #ddd; }
.ow-content i { color: #c9a15a; }

/* ── Navigation Dots ── */
.ow-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 16px 0 12px;
}
.ow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #222;
  transition: all 0.2s ease;
}
.ow-dot.active {
  background: #f0b429;
  box-shadow: 0 0 6px rgba(240,180,41,0.4);
}

/* ── Navigation ── */
.ow-nav {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
}
.ow-btn {
  padding: 8px 18px;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.12s;
}
.ow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.ow-btn-back {
  background: transparent;
  border: 1px solid #333;
  color: #666;
  margin-right: auto;
}
.ow-btn-back:hover:not(:disabled) {
  border-color: #666;
  color: #bbb;
}

.ow-btn-skip {
  background: transparent;
  border: 1px solid #2a2a2a;
  color: #444;
}
.ow-btn-skip:hover {
  border-color: #666;
  color: #888;
}

.ow-btn-next {
  background: #f0b429;
  border: 1px solid #f0b429;
  color: #000;
  font-weight: bold;
}
.ow-btn-next:hover:not(:disabled) {
  background: #ffd060;
  border-color: #ffd060;
}
.ow-btn-next:active:not(:disabled) {
  transform: scale(0.97);
}

/* ── Responsive tweaks ── */
@media (max-width: 540px) {
  .ow-card { padding: 20px 18px; }
}
`}}const x=[{id:"anthropic",name:"Anthropic Claude",icon:"🤖",models:["claude-sonnet-4-20250514","claude-haiku-3-5","claude-opus-4"],defaultModel:"claude-sonnet-4-20250514",tier:"premium",description:"Best for Earl dialogue, Spark program generation",requiresKey:!0,keyHint:"sk-ant-..."},{id:"openai",name:"OpenAI",icon:"⚡",models:["gpt-4o","gpt-4o-mini"],defaultModel:"gpt-4o-mini",tier:"premium",description:"Fast generation, good for Spark robot programs",requiresKey:!0,keyHint:"sk-proj-..."},{id:"deepseek",name:"DeepSeek",icon:"🧠",models:["deepseek-chat"],defaultModel:"deepseek-chat",tier:"budget",description:"Open source reasoning model — great value",requiresKey:!0,keyHint:"sk-..."},{id:"z.ai",name:"Z.AI",icon:"⚡",models:["z-ai-chat"],defaultModel:"z-ai-chat",tier:"budget",description:"Fast inference provider",requiresKey:!0,keyHint:"Enter your Z.AI API key"},{id:"deepinfra",name:"DeepInfra",icon:"☁️",models:["mistralai/Mixtral-8x22B","meta-llama/Llama-3.3-70B"],defaultModel:"mistralai/Mixtral-8x22B",tier:"budget",description:"Serverless GPU — open models",requiresKey:!0,keyHint:"Enter your DeepInfra key"},{id:"workers_ai",name:"Workers AI (Cloudflare)",icon:"🌤️",models:["@cf/meta/llama-3.1-8b-instruct","@cf/mistral/mistral-7b"],defaultModel:"@cf/meta/llama-3.1-8b-instruct",tier:"free",description:"Free — runs on Cloudflare GPU. No key needed.",requiresKey:!1,keyHint:null,requiresCfWorker:!0},{id:"offline",name:"Offline Mode",icon:"🔌",models:[],defaultModel:null,tier:"free",description:"No AI features. Earl uses preset dialogue. Spark uses offline fallback.",requiresKey:!1,keyHint:null}];class W{constructor(e){this.game=e,this.el=null}get config(){return b()}open(){var s,t,r,i;if(this.el){this.close();return}(r=(t=(s=this.game)==null?void 0:s.observer)==null?void 0:t.menuOpen)==null||r.call(t,"settings"),this._injectCss();const e=b();this.el=document.createElement("div"),this.el.id="sc-settings-overlay",this.el.innerHTML=`
      <div class="set-card">
        <div class="set-header">
          <span class="set-icon">⚙️</span>
          <h2>Advanced</h2>
          <button class="set-close" id="set-close">✕</button>
        </div>
        <div class="set-body">
          <p class="set-intro">Spark works great offline — no connection needed. Adding an AI
          key is <b>optional</b> and takes seconds. When you add one, Spark upgrades live.
          No restart. No fuss.</p>

          <h3 class="set-section">🧠 AI Engine (optional)</h3>
          <div class="set-provider-grid">
            ${x.map(o=>`
              <div class="set-provider-card${o.id===e.aiProvider?" selected":""}" data-provider="${o.id}">
                <span class="set-provider-icon">${o.icon}</span>
                <div class="set-provider-info">
                  <div class="set-provider-name">${o.name}</div>
                  <div class="set-provider-desc">${o.description}</div>
                </div>
                <span class="set-provider-tier set-tier-${o.tier}">${o.tier}</span>
              </div>
            `).join("")}
            <div class="set-provider-card${!e.aiProvider||e.aiProvider==="offline"?" selected":""}" data-provider="offline">
              <span class="set-provider-icon">🔋</span>
              <div class="set-provider-info">
                <div class="set-provider-name">Offline (default)</div>
                <div class="set-provider-desc">18+ offline recipes. Always works.</div>
              </div>
              <span class="set-provider-tier set-tier-free">free</span>
            </div>
          </div>
          <div class="set-key-area" id="set-key-area" style="display:${e.apiKey&&e.aiProvider!=="offline"?"block":"none"}">
            <label class="set-label">API Key</label>
            <div class="set-key-wrap">
              <input type="password" class="set-key-input" id="set-api-key" spellcheck="false"
                value="${this._esc(e.apiKey??"")}" placeholder="Paste your API key here..." />
              <button class="set-eye" id="set-eye" title="Show/Hide key">👁️</button>
            </div>
            <div class="set-hint">💡 Your key stays in your browser — it only ever goes to the provider you pick.</div>
          </div>

          <h3 class="set-section">☁️ SuperInstance Connect (optional)</h3>
          <div class="set-cf-wrap">
            <input type="url" class="set-cf-input" id="set-cf-url" spellcheck="false"
              value="${this._esc(e.cfWorkerUrl??"")}"
              placeholder="https://scrapcraft-gateway.my-username.workers.dev" />
            <button class="set-btn set-btn-test" id="set-cf-test">Test</button>
          </div>
          <div class="set-cf-status" id="set-cf-status">⏹️ Not connected</div>

          <h3 class="set-section">🛰 Rift Telemetry (optional — off by default)</h3>
          <div class="set-uscp-wrap">
            <label class="set-uscp-toggle">
              <input type="checkbox" id="set-uscp-enabled" ${e.uscpEnabled?"checked":""} />
              <span>Share yard signals with the fleet quilt</span>
            </label>
            <div class="set-hint">📡 When on, the yard broadcasts tiny anonymous signals (blocks mined, builds,
            laps, quests) to the fleet's live quilt. <b>Nothing personal ever leaves</b> — no name, no
            chat text, no save data. Off by default; the game plays exactly the same either way.</div>
            <input type="url" class="set-cf-input" id="set-uscp-url" spellcheck="false"
              value="${this._esc(e.uscpEndpoint??"")}"
              placeholder="fleet quilt URL (blank = the fleet's public host)" />
          </div>

          <h3 class="set-section">📊 Live Cloud Sheet (optional — off by default)</h3>
          <div class="set-uscp-wrap">
            <label class="set-uscp-toggle">
              <input type="checkbox" id="set-quilt-enabled" ${T()?"checked":""} />
              <span>Mirror my robot to the scrap-quilt live sheet</span>
            </label>
            <div class="set-hint">📈 When on (and the live-sheet view is open), your robot's cells — pose, motors,
            sensors, program state — stream to the scrap-quilt cloud sheet so you can watch formulas, race a
            ghost, and ask why it did that. <b>Nothing personal ever leaves</b> — no name, no chat text, no save
            data. Off by default; the game plays exactly the same either way.</div>
          </div>

          <div class="set-footer">
            <button class="set-btn set-btn-save" id="set-save">Save</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.el),requestAnimationFrame(()=>this.el.classList.add("set-visible")),this.el.querySelector("#set-close").addEventListener("click",()=>this.close()),this._bindProviders(),this._bindCf(),(i=this.el.querySelector("#set-quilt-enabled"))==null||i.addEventListener("change",o=>A(!!o.target.checked)),this.el.querySelector("#set-save").addEventListener("click",()=>this._save())}close(){var s,t,r;if(!this.el)return;(r=(t=(s=this.game)==null?void 0:s.observer)==null?void 0:t.menuClose)==null||r.call(t,"settings"),this.el.classList.remove("set-visible");const e=this.el;setTimeout(()=>e.remove(),250),this.el=null}get isOpen(){return!!this.el}_bindProviders(){const e=this.el.querySelectorAll(".set-provider-card"),s=this.el.querySelector("#set-key-area");this._pendingProvider=null,e.forEach(r=>{r.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("selected")),r.classList.add("selected");const i=r.dataset.provider;if(this._pendingProvider=i,i==="offline")s.style.display="none";else{s.style.display="block";const o=x.find(a=>a.id===i);this.el.querySelector("#set-api-key").placeholder=(o==null?void 0:o.keyHint)??"Paste your API key here..."}})});const t=this.el.querySelector("#set-eye");t==null||t.addEventListener("click",()=>{const r=this.el.querySelector("#set-api-key"),i=r.type==="password";r.type=i?"text":"password",t.textContent=i?"🙈":"👁️"})}_bindCf(){this.el.querySelector("#set-cf-test").addEventListener("click",async()=>{const e=this.el.querySelector("#set-cf-status"),s=this.el.querySelector("#set-cf-url").value.trim();if(!s){e.textContent="⚠️ Enter a URL first";return}e.textContent="⏳ Testing connection...";try{const t=await fetch(s+"/health",{method:"GET",signal:AbortSignal.timeout(5e3)});e.textContent=t.ok?"✅ Connected! Worker is online.":`⚠️ Responded with HTTP ${t.status}`}catch(t){e.textContent=`❌ Failed: ${t.message??"Could not reach URL"}`}})}_save(){var a,l,d,u,p,h,c,m,y;const e=this._pendingProvider??this.config.aiProvider??"offline",s=((a=this.el.querySelector("#set-api-key"))==null?void 0:a.value.trim())||null,t=((l=this.el.querySelector("#set-cf-url"))==null?void 0:l.value.trim())||null,r=((d=this.el.querySelector("#set-uscp-enabled"))==null?void 0:d.checked)??!1,i=((u=this.el.querySelector("#set-uscp-url"))==null?void 0:u.value.trim())||null,o=O({aiProvider:e,apiKey:e==="offline"?null:s,cfWorkerUrl:t,uscpEnabled:r,uscpEndpoint:i});R(),(h=(p=this.game)==null?void 0:p.onAdvancedConfigChanged)==null||h.call(p,k(o)),(y=(m=(c=this.game)==null?void 0:c.ui)==null?void 0:m.notify)==null||y.call(m,k(o)?"⚡ Spark just woke up for real. No restart needed — ask away.":"Spark's running offline. Building and learning work great like this — add a key anytime."),this.close()}_esc(e){return e?e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}_injectCss(){if(document.getElementById("sc-settings-style"))return;const e=document.createElement("style");e.id="sc-settings-style",e.textContent=`
#sc-settings-overlay {
  position: fixed; inset: 0; z-index: 2100;
  background: rgba(4,4,4,0.9);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Courier New', monospace;
  opacity: 0; transition: opacity 0.25s ease;
}
#sc-settings-overlay.set-visible { opacity: 1; }
.set-card {
  background: #121212; border: 1px solid #2a2a2a; border-radius: 14px;
  max-width: 540px; width: 92%; max-height: 88vh; overflow-y: auto;
  padding: 24px 28px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(240,180,41,0.06);
}
.set-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
  padding-bottom: 10px; border-bottom: 1px solid #1e1e1e; }
.set-header h2 { font-size: 15px; color: #f0b429; letter-spacing: 1.5px; margin: 0; flex: 1; }
.set-close { background: none; border: 1px solid #333; color: #888; border-radius: 6px;
  cursor: pointer; padding: 4px 10px; }
.set-close:hover { color: #f0b429; border-color: #f0b429; }
.set-body p.set-intro { font-size: 11px; color: #888; line-height: 1.6; }
.set-section { font-size: 12px; color: #ddd; margin: 18px 0 8px; letter-spacing: 0.5px; }
.set-provider-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.set-provider-card { display: flex; align-items: center; gap: 8px; background: #0a0a0a;
  border: 1px solid #222; border-radius: 8px; padding: 9px; cursor: pointer;
  transition: all 0.12s ease; position: relative; }
.set-provider-card:hover { border-color: #444; }
.set-provider-card.selected { border-color: #f0b429; background: #1a1508; }
.set-provider-icon { font-size: 18px; }
.set-provider-name { font-size: 11px; color: #ddd; font-weight: bold; }
.set-provider-desc { font-size: 9px; color: #555; margin-top: 2px; }
.set-provider-tier { position: absolute; top: 4px; right: 4px; font-size: 7px;
  padding: 1px 5px; border-radius: 3px; text-transform: uppercase; }
.set-tier-premium { background: #1a0a20; color: #bb66ff; border: 1px solid #2a1040; }
.set-tier-budget { background: #0a1a20; color: #44ccdd; border: 1px solid #0a3040; }
.set-tier-free { background: #0a1a0a; color: #44cc66; border: 1px solid #0a2a10; }
.set-key-area { margin-top: 10px; padding-top: 10px; border-top: 1px solid #1a1a1a; }
.set-label { font-size: 10px; color: #777; letter-spacing: 1px; display: block; margin-bottom: 5px; }
.set-key-wrap { display: flex; gap: 4px; }
.set-key-input { flex: 1; background: #080808; border: 1px solid #2a2a2a; border-radius: 5px;
  color: #ccc; padding: 8px 10px; font-family: 'Courier New', monospace; font-size: 12px; }
.set-key-input:focus { border-color: #f0b42966; outline: none; }
.set-eye { background: #0a0a0a; border: 1px solid #2a2a2a; border-radius: 5px; color: #666;
  cursor: pointer; padding: 0 10px; }
.set-cf-wrap { display: flex; gap: 6px; }
.set-cf-input { flex: 1; background: #080808; border: 1px solid #2a2a2a; border-radius: 5px;
  color: #ccc; padding: 8px 10px; font-family: 'Courier New', monospace; font-size: 11px; }
.set-cf-input:focus { border-color: #f0b42966; outline: none; }
.set-cf-status { font-size: 11px; color: #888; margin-top: 8px; }
.set-hint { font-size: 10px; color: #555; font-style: italic; margin-top: 6px; }
.set-footer { display: flex; justify-content: flex-end; margin-top: 18px; gap: 8px; }
.set-btn { font-family: 'Courier New', monospace; font-size: 11px; border-radius: 6px;
  cursor: pointer; padding: 8px 16px; letter-spacing: 1px; }
.set-btn-test { background: #0a1a10; border: 1px solid #1a3a1a; color: #44cc66; }
.set-btn-test:hover { border-color: #44cc66; }
.set-btn-save { background: #f0b429; border: 1px solid #f0b429; color: #000; font-weight: bold; }
.set-btn-save:hover { background: #ffd060; }
@media (max-width: 540px) { .set-provider-grid { grid-template-columns: 1fr; } }
`,document.head.appendChild(e)}}const _="earl-chat-style";async function Y({title:n="Talk to Big Earl:",placeholder:e="Ask Earl about the yard, the jobs, the bots…",promptLabel:s="ASK",fallback:t=null}={}){if(typeof document>"u"||!document.body)return t?t():null;try{return await new Promise(r=>{M();const i=document.createElement("div");i.id="earl-chat",i.innerHTML=`
        <div class="ec-card">
          <div class="ec-head">
            <span class="ec-icon">🧔</span>
            <div>
              <div class="ec-title">BIG EARL</div>
              <div class="ec-sub">${n.replace(/</g,"&lt;")}</div>
            </div>
            <button class="ec-x" id="ec-close" aria-label="close">✕</button>
          </div>
          <div class="ec-body">
            <input id="ec-input" class="ec-input" type="text"
                   placeholder="${String(e).replace(/"/g,"&quot;")}"
                   autocomplete="off" spellcheck="false" maxlength="120" />
            <div class="ec-hint">Enter to send · Esc to close</div>
            <div class="ec-actions">
              <button class="ec-btn ec-btn-ask" id="ec-ask">${s} →</button>
            </div>
          </div>
        </div>`,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add("show"));const o=i.querySelector("#ec-input"),a=i.querySelector("#ec-close"),l=i.querySelector("#ec-ask"),d=c=>{i.classList.remove("show"),document.removeEventListener("keydown",h,!0),setTimeout(()=>{i.remove()},180),r(c)},u=()=>{const c=((o==null?void 0:o.value)??"").trim();d(c)},p=()=>d(null),h=c=>{c.key==="Escape"?(c.stopPropagation(),p()):c.key==="Enter"&&(c.preventDefault(),u())};a==null||a.addEventListener("click",p),l==null||l.addEventListener("click",u),document.addEventListener("keydown",h,!0),setTimeout(()=>o==null?void 0:o.focus(),200)})}catch{return t?t():null}}function M(){if(document.getElementById(_))return;const n=document.createElement("style");n.id=_,n.textContent=`
    #earl-chat {
      position:fixed; inset:0; background:rgba(8,6,3,0.55);
      display:flex; align-items:center; justify-content:center;
      z-index:220; opacity:0; visibility:hidden;
      transition:opacity 0.2s ease, visibility 0.2s ease;
      font-family:'Courier New', monospace;
    }
    #earl-chat.show { opacity:1; visibility:visible; }
    .ec-card {
      background:#17120a; border:2px solid #6b5a33; border-radius:12px;
      width:420px; max-width:95vw;
      box-shadow:0 0 40px rgba(240,180,41,0.15), 0 8px 40px rgba(0,0,0,0.8);
    }
    .ec-head {
      display:flex; align-items:center; gap:10px;
      padding:14px 16px 12px; border-bottom:1px solid #3a2a0a;
      background:#1d160c; border-radius:10px 10px 0 0;
    }
    .ec-icon { font-size:20px; }
    .ec-title { font-size:13px; color:#ffd97a; letter-spacing:2px; font-weight:bold; }
    .ec-sub  { font-size:10px; color:#a08a55; letter-spacing:0.5px; margin-top:2px; }
    .ec-x    { background:none; border:none; color:#a08a55; cursor:pointer; font-size:16px; padding:2px 6px; margin-left:auto; }
    .ec-x:hover { color:#ffd97a; }
    .ec-body { padding:16px; }
    .ec-input {
      width:100%; background:#0b0906; border:1px solid #4a3a1a; border-radius:6px;
      padding:11px 13px; color:#f0ddb0;
      font-family:inherit; font-size:14px; outline:none;
      transition:border-color 0.15s;
    }
    .ec-input:focus { border-color:#f0b429; }
    .ec-hint { font-size:9px; color:#6a5a35; letter-spacing:1px; margin:6px 2px 0; }
    .ec-actions { margin-top:14px; }
    .ec-btn {
      width:100%; padding:11px; border-radius:6px; cursor:pointer;
      font-family:inherit; font-size:11px; letter-spacing:1px;
      transition:filter 0.15s;
    }
    .ec-btn:hover { filter:brightness(1.2); }
    .ec-btn-ask { background:#3a2a0a; border:2px solid #f0b429; color:#ffd97a; font-weight:bold; }
  `,document.head.appendChild(n)}const q={first_lucky_find:{rivet:"A RARE PART?! On your first pile?! Okay okay — act casual. We are so not casual.",bolt:"Huh. Buried treasure on day one. I've seen slower starts end in trophies. Don't lose it.",magma:"Oh, little builder — the yard just shook your hand. Keep that part somewhere safe. I will remember where you stood.",juno:"IT FOUND YOU! The rare part FOUND YOU! First pile! We are telling EVERYONE. Earl first. Earl most."},first_program_run:{rivet:"IT MOVED. Your code made it MOVE. I'm a drone and even I think that's magic. It's not magic. It's better — it's yours.",bolt:"Look at that. Your program, its wheels, zero help. Every racer I ever flagged started exactly there. Savor it.",magma:"It is thinking, small builder. With the thoughts YOU gave it. I will be quiet now. This moment deserves quiet.",juno:"IT'S ALIVE-ish! Because of YOUR BRAIN! We ran circles around the room — okay IT ran circles, we supervised. TEN OUT OF TEN."},first_autonomous_lap:{rivet:"A whole lap! It drove THAT by itself! You taught it every corner and it LISTENED. You're basically a parent now.",bolt:"First autonomous lap — logged. That's the one you'll measure everything against. Not because it was fast. Because it was yours.",magma:"Around the whole oval, on its own, steady as sunrise. You built the runner AND the running. I am so still, but inside I am applauding.",juno:"ONE FULL LAP, SELF-DRIVEN! We timed it! We timed it AGAIN! The bot has OPINIONS about corners now — this is CHARACTER DEVELOPMENT."},first_dent:{rivet:"First dent! Welcome to the club — every bot in this yard is a member. Dents aren't failures, they're the yard signing your work.",bolt:"First crash. Good. Means you're trying things. The wall's fine, the bot's fine, and now you've got data. Rookies who never dent never learn.",magma:"Ah — the first dent. Dear one, my whole body is dents and I am the strongest one here. This is how robots grow stories.",juno:"A DENT! A tiny metal scar with a STORY! The repair book will log it forever. You two are officially interesting now!"},battery_dead:{rivet:"Battery's flat — that's not a fail, that's a pit stop. Park it on a charging pad; nothing you built was lost.",bolt:"Dead battery. Happens mid-race to the best crews — charge it and get back out. The program's still in there.",magma:"Power out, little builder — the bot simply rests now. A charging pad will wake it. Its brain, your brain: both safe.",juno:"ZERO PERCENT! Dramatic! But fixable — charging pad, right over there, bot wakes up grumpy but fine. We love a comeback arc!"}};function U(n,e="rivet"){const s=q[n];return s?s[e]??s.rivet??null:null}const $="Stand near your bot with a repair kit and press G — dents hammer out, and the repair book keeps the story.",G="Roll it onto a charging pad (the glowing pad by the shed) — power refills on its own.",P="scrapcraft_delight_";class I{constructor(e=null){this._storage=e,this._mem=new Set}static browser(){return new I(typeof localStorage<"u"?localStorage:null)}_key(e){return P+String(e)}fired(e){if(this._storage)try{return this._storage.getItem(this._key(e))==="1"}catch{}return this._mem.has(String(e))}markFired(e){var t;const s=String(e);this._mem.add(s);try{(t=this._storage)==null||t.setItem(this._key(s),"1")}catch{}}once(e){return this.fired(e)?!1:(this.markFired(e),!0)}}const g=[{id:"tm-first-steps",title:"First Steps",icon:"🚶",brief:"Learn the yard by walking it.",steps:[{id:"walk",hint:"Press <b>W A S D</b> to walk",event:"move",medalSecs:20},{id:"mine",hint:"Hold <b>left-click</b> on a <b>Rust Heap</b>",event:"mine",medalSecs:45},{id:"bench",hint:"Press <b>E</b> — the Workshop turns piles into parts",event:"open_bench",medalSecs:30},{id:"maker",hint:"Press <b>T</b> — bots get brains here",event:"open_maker",medalSecs:30},{id:"run",hint:"Press <b>▶ RUN</b> to test your bot",event:"program_run",medalSecs:60},{id:"build",hint:"Click <b>⚡ BUILD IT</b> for real firmware",event:"build",medalSecs:90,optional:!0}],rivetLines:{walk:"Walking works! You passed the test. Next: see that rust heap? It wants to be mined. Hold left-click on it — trust me, it likes it.",mine:"Look at all that scrap you OWN now. Press E — the workshop turns piles into parts. Alchemy, but with hammers.",bench:"Ok, big moment: press T. The Maker Lab is where bots get brains. Earl pre-loaded yours. He acts casual, but he prepared.",maker:null,run:"You just ran your OWN program! Want the real thing? Hit BUILD IT — real firmware, real board, real wheels. I get chatty when I'm excited. This is me being chill.",build:null},reward:{xp:20,note:"Mission complete!"}}];class K{constructor({storage:e=null,rng:s=Math.random}={}){this._storage=e,this._rng=s,this._mem={medals:{},done:!1},this._currentMission=null,this._currentStep=0,this._startedAt=null,this._hintShownAt={},this._eventTimes={},this._skipped=!1,this._doneThisSession=!1,this._loadState()}_loadState(){try{if(this._storage){const e=this._storage.getItem("scrap.tutorial.missions.v1");if(e){const s=JSON.parse(e);this._mem=s}}}catch{}}_saveState(){try{this._storage&&this._storage.setItem("scrap.tutorial.missions.v1",JSON.stringify(this._mem))}catch{}}state(){return{currentMission:this._currentMission,currentStep:this._currentStep,startedAt:this._startedAt,hintShownAt:{...this._hintShownAt},eventTimes:{...this._eventTimes},medals:{...this._mem.medals},skipped:this._skipped,done:this._mem.done}}restore(e){this._currentMission=e.currentMission,this._currentStep=e.currentStep,this._startedAt=e.startedAt,this._hintShownAt={...e.hintShownAt},this._eventTimes={...e.eventTimes||{}},this._mem.medals={...e.medals},this._skipped=e.skipped,this._mem.done=e.done}begin(e=null){var t;const s=e||((t=g[0])==null?void 0:t.id);return this._currentMission=s,this._currentStep=0,this._startedAt=Date.now(),this._hintShownAt={},this._skipped=!1,this}onHintShown(){var e;this._currentMission&&this._currentStep<((e=this._getMission())==null?void 0:e.steps.length)&&(this._hintShownAt[this._currentStep]=Date.now())}notify(e,s={}){if(!this._currentMission)return null;const t=this._getMission();if(!t)return null;if(!t.steps[this._currentStep])return this._mem.done||(this._mem.done=!0,this._saveState()),{allDone:!0};const i=t.steps.findIndex(a=>a.event===e);return i===-1?null:i>this._currentStep?this._fastSkipTo(i,t):i===this._currentStep?this._advanceStep(t):null}_advanceStep(e){var i;const s=this._currentStep,t=e.steps[s];this._eventTimes[s]=Date.now(),this._currentStep++;const r={advanced:!0,step:t,medal:null,rivetLine:(i=e.rivetLines)==null?void 0:i[t.id],fastSkipped:!1};return this._currentStep>=e.steps.length&&(r.missionComplete=!0,r.medal=this._awardMedalIfEarned(e,!1),this._mem.medals[e.id]=r.medal,this._mem.done=!0,this._doneThisSession=!0,this._saveState()),r}_fastSkipTo(e,s){this._eventTimes[e]=Date.now(),this._currentStep=e+1;const t={advanced:!0,step:s.steps[e],medal:"veteran",rivetLine:null,fastSkipped:!0};return this._mem.medals[s.id]||(this._mem.medals[s.id]="veteran",this._saveState()),this._currentStep>=s.steps.length&&(t.missionComplete=!0,this._mem.done=!0,this._doneThisSession=!0,this._saveState()),t}_awardMedalIfEarned(e,s){if(s)return"veteran";const t=(Date.now()-this._startedAt)/1e3,r=e.steps.reduce((o,a)=>o+(a.medalSecs||0),0);return t<r?"🥇 speedster":e.steps.every((o,a)=>{const l=this._hintShownAt[a];if(l===void 0)return!0;const d=this._eventTimes[a];return d===void 0?!1:d-l<1e4})?"✨ style":null}fastSkipEligible(){const e=this._getMission();if(!e)return!1;for(let s=this._currentStep+1;s<e.steps.length;s++)if(this._eventTimes[s]!==void 0)return!0;return!1}skipAll(){return this._skipped=!0,this._mem.done=!0,this._saveState(),{skipped:!0,missionId:this._currentMission,stepsCompleted:this._currentStep}}_getMission(){return g.find(e=>e.id===this._currentMission)}}function V(n,e){if(!n||!e)return;const s=n.state(),t=s.currentMission?g.find(i=>i.id===s.currentMission):null;if(!t)return;const r=t.steps[s.currentStep];if(e.title&&(e.title.innerHTML=t.title),e.desc){let i="";r&&(i+=`<div class="mc-step-hint">${r.hint}</div>`,i+=`<div class="mc-mission-brief">${t.brief}</div>`),s.medals[t.id]&&(i+=`<div class="mc-medals">🏅 ${s.medals[t.id]}</div>`),e.desc.innerHTML=i}if(e.dots){const i=t.steps.map((o,a)=>`<div class="${a<s.currentStep?"mc-dot done":a===s.currentStep?"mc-dot active":"mc-dot"}"></div>`).join("");e.dots.innerHTML=i}}export{G as B,S as C,I as D,C as E,$ as F,F as O,W as S,K as T,B as a,H as b,z as c,U as d,b as l,Y as o,V as r,j as s};
