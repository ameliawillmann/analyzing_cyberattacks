// Timeline interaction code adapted from:
// https://github.com/irllyliketoast/Borinquen/blob/main/timeline.html

// ===== GLOBAL =====
let timelinePointSelected = false;

function toggleFootnotes() {
  const wrapper = document.getElementById('footnotesWrapper');
  const btn = document.getElementById('toggleSourcesBtn');
  if (!wrapper || !btn) return;

  const isOpen = wrapper.classList.contains('open');
  wrapper.classList.toggle('open');
  btn.textContent = isOpen ? "View Sources" : "Hide Sources";

  if (!isOpen) {
    setTimeout(() => {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // === ELEMENT REFERENCES ===
  const timelinePoints = document.querySelectorAll('.timeline-point');
  const timelineArrows = document.querySelectorAll('.timeline-arrow');
  const miniPage       = document.getElementById('mini-page');
  const miniContent    = document.getElementById('mini-content');
  const miniTitle      = document.getElementById('mini-title');
  const closeButton    = document.querySelector('.close-btn');
  const timeline       = document.getElementById('timeline');
  const arrowsEl       = document.getElementById('timeline-arrows');
  const body           = document.body;
  const video          = document.getElementById('background-video');
  const overlay        = document.getElementById('color-overlay');
  const infoBox        = document.getElementById("timeline-info-box");
  const backButton     = document.getElementById('back-button');

  if (backButton) {
    backButton.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  // === CONTENT FOR EACH TIMELINE POINT ===
  const content = {

    point1: `
      <h3>In June 2010, a computer worm discovered at an Iranian nuclear facility changed warfare forever — the first cyberweapon confirmed to cause physical destruction of critical infrastructure.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> United States (NSA) and Israel (Unit 8200) — joint operation codenamed "Olympic Games"</p>
<p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> ~1,000 Iranian centrifuges at Natanz destroyed; Iran's nuclear program set back an estimated 1–2 years; first cyberweapon confirmed to cause physical damage to infrastructure</p>
      </div>
      <p>Stuxnet had been active since at least 2009, but was not discovered until June 2010. The worm targeted Siemens programmable logic controllers (PLCs) used to spin Iran's uranium enrichment centrifuges at Natanz. It subtly altered centrifuge rotation speeds while feeding false data to operators — making the machines appear to function normally while physically destroying them from the inside.</p>
      <p>The sophistication of the code — four zero-day exploits used simultaneously, rootkit-level concealment, a self-limiting payload that only activated on specific Siemens configurations — pointed immediately to state-level development. Subsequent reporting confirmed joint US-Israeli authorship. The operation was authorized under the Bush administration and continued under Obama as an alternative to military strikes on Iran's nuclear program.</p>
      <p>Stuxnet reshaped the global conversation about cyberwarfare. It proved that digital attacks could cross into the physical world, that critical infrastructure was a viable military target, and that the line between a cyberoperation and an act of war was thinner than anyone had publicly admitted.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Sanger, D. E. (2012). <em>Confront and Conceal: Obama's Secret Wars and Surprising Use of American Power.</em> Crown Publishers.</li>
        <li>Zetter, K. (2014). <em>Countdown to Zero Day: Stuxnet and the Launch of the World's First Digital Weapon.</em> Crown Publishers.</li>
        <li>Langner, R. (2011). "Stuxnet: Dissecting a Cyberwarfare Weapon." <em>IEEE Security & Privacy, 9</em>(3), 49–51.</li>
      </ol></div></div>
    `,

    point2: `
      <h3>On December 23, 2015, 230,000 Ukrainians lost power — the first confirmed cyberattack in history to cause a blackout.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Sandworm Team (attributed to Russian GRU Unit 74455)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> Three Ukrainian energy companies taken offline; 230,000 customers without power for up to 6 hours; operators locked out of their own systems</p>
      </div>
      <p>The attack began months earlier with spear-phishing emails sent to energy company employees. Malicious Word documents containing BlackEnergy malware gave attackers persistent access to IT networks. Over months, they silently moved deeper — mapping the SCADA systems that controlled the physical power grid.</p>
      <p>On December 23, the attackers struck simultaneously across three regional energy companies. They remotely opened breakers to cut power, deployed KillDisk to wipe and brick infected workstations, and flooded customer service lines with fake calls to delay the response. Operators watched their cursors move on their own screens — completely locked out, unable to intervene.</p>
      <p>Power was eventually restored manually, but the attack set a precedent that could not be walked back. A second, more sophisticated attack struck Ukraine's capital grid in December 2016. The same group, Sandworm, later deployed NotPetya in 2017 — a wiper disguised as ransomware that caused an estimated $10 billion in global damage.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Zetter, K. (2016). "Inside the Cunning, Unprecedented Hack of Ukraine's Power Grid." <em>Wired.</em></li>
        <li>ICS-CERT. (2016). <em>Cyber-Attack Against Ukrainian Critical Infrastructure.</em> Alert IR-ALERT-H-16-056-01.</li>
        <li>Dragos Inc. (2017). <em>CRASHOVERRIDE: Analysis of the Threat to Electric Grid Operations.</em></li>
      </ol></div></div>
    `,

    point3: `
      <h3>In October 2019, North Korean malware was found on the administrative network of India's largest nuclear power plant — a breach the government initially denied.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Lazarus Group (North Korean state-sponsored, attributed to the Reconnaissance General Bureau)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> Administrative network of the Kudankulam Nuclear Power Plant compromised; Dtrack malware confirmed by India's CERT; no operational or safety systems affected, but espionage access established</p>
      </div>
      <p>The Kudankulam Nuclear Power Plant (KKNPP) in Tamil Nadu is India's largest nuclear facility. In October 2019, cybersecurity researcher Pukhraj Singh publicly disclosed that the plant had been breached, citing intelligence suggesting the malware had reached "domain controller-level access" — meaning attackers could see everything on the administrative network.</p>
      <p>India's Nuclear Power Corporation (NPCIL) initially denied any compromise, then issued a statement days later confirming that Dtrack malware — a spyware tool associated with North Korea's Lazarus Group — had been found on an administrative computer. NPCIL maintained that the administrative network was air-gapped from plant control systems.</p>
      <p>The attack raised uncomfortable questions. Even if operational systems were isolated, an administrative breach at a nuclear facility gives adversaries detailed knowledge of plant layouts, personnel, schedules, and procurement — intelligence that could support a future, more targeted attack. Nuclear infrastructure had long been considered uniquely secure. Kudankulam complicated that assumption.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>India CERT-In. (2019). <em>Malware Detection at Kudankulam Nuclear Power Plant.</em></li>
        <li>Kaspersky Lab. (2019). <em>Dtrack: New Lazarus Tool in Critical Infrastructure.</em></li>
        <li>Panda, A. (2019). "India's Kudankulam Nuclear Power Plant Hit by Cyberattack." <em>The Diplomat.</em></li>
      </ol></div></div>
    `,

    point4: `
      <h3>In June 2020, Iranian hackers attempted to poison Israel's water supply — hacking treatment facilities to spike chlorine to dangerous concentrations.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Iranian state-sponsored hackers (attributed by Israel's National Cyber Directorate)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> Attack detected and blocked before any harm; attempt to raise chlorine to dangerous concentrations across multiple water facilities; Israel retaliated with a cyberattack on Iran's Shahid Rajaee Port in May 2020</p>
      </div>
      <p>In late April and early May 2020, attackers targeted Israeli water treatment facilities and agricultural pumping stations, attempting to manipulate the systems that control chlorine and other chemical levels in drinking water. The goal, according to Israeli officials, was to raise chlorine concentrations to levels that would cause mass illness — or to shut off water entirely to farms and towns.</p>
      <p>Israel's Water Authority detected the intrusions and issued an emergency alert to water infrastructure operators, instructing them to manually verify chemical dosing systems and change remote access credentials immediately. The attacks were blocked before causing harm. Israeli officials publicly attributed the attack to Iran, in the context of an escalating cyber conflict between the two countries.</p>
      <p>The incident highlighted a critical vulnerability: water treatment infrastructure is often managed by small municipal operators with limited cybersecurity resources, connected to the internet through aging systems never designed with modern threats in mind. The attack marked the first time a nation-state had directly attempted to poison a country's water supply through a cyberattack.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Haaretz. (2020). "Israel Says It Thwarted Cyberattack on Water Systems." <em>Haaretz.</em></li>
        <li>Zilberman, P. (2020). "The Cyber Attack on Israel's Water Infrastructure." <em>INSS Insight No. 1316.</em></li>
        <li>Sanger, D. & Mozur, P. (2020). "Water Wars: How a Cyberattack Could Cripple Israel." <em>New York Times.</em></li>
      </ol></div></div>
    `,

    point5: `
      <h3>In May 2023, US agencies revealed that Chinese state hackers had been quietly living inside American critical infrastructure networks for years — not to destroy anything yet, but to be ready.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Volt Typhoon (Chinese state-sponsored APT, attributed to the PRC MSS/PLA; also called Bronze Silhouette)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> Pre-positioned access across US communications, energy, transportation, water, and defense sectors; present in some networks for 5+ years; CISA/NSA/FBI joint advisory confirmed scope of intrusions</p>
      </div>
      <p>On May 24, 2023, CISA, the NSA, the FBI, and partner agencies from the UK, Australia, Canada, and New Zealand jointly published an advisory confirming that Volt Typhoon — a Chinese state-sponsored actor — had been operating inside US critical infrastructure networks for at least five years, in some cases undetected. The sectors targeted included communications, energy, transportation, water systems, and defense-adjacent industries.</p>
      <p>Volt Typhoon's techniques were deliberately low-profile. Rather than deploying distinctive malware, they used "living off the land" tactics — leveraging legitimate system tools already present on compromised networks, making their activity difficult to distinguish from normal administrator behavior. They established persistent access and pre-positioned themselves, but caused no immediate disruption.</p>
      <p>The stated purpose, according to US intelligence assessments, was not espionage in the traditional sense but pre-positioning: building the capability to disrupt or destroy US infrastructure during a potential military confrontation over Taiwan. The goal was leverage — the ability to threaten or execute simultaneous infrastructure attacks that would paralyze US response capabilities at a critical moment.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>CISA, NSA, FBI et al. (2023). <em>Advisory AA23-144A: Volt Typhoon — A State-Sponsored Cyber Actor Living off the Land.</em></li>
        <li>CISA. (2024). <em>Advisory AA24-038A: PRC State-Sponsored Actors Compromise and Maintain Persistent Access to US Critical Infrastructure.</em></li>
        <li>Nakashima, E. (2023). "China's Volt Typhoon hacking group could strike US infrastructure, officials warn." <em>Washington Post.</em></li>
      </ol></div></div>
    `,

    point6: `
      <h3>In November 2023, a report revealed that 22 Danish energy companies had been simultaneously compromised in the largest cyberattack ever recorded against Danish critical infrastructure.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Wave 1: Sandworm (Russian GRU), exploiting a Zyxel firewall vulnerability; Wave 2: separate actor, attribution unclear</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> 22 companies compromised in coordinated waves; several forced to operate in "island mode," disconnected from the European power grid; SektorCERT described it as the most extensive attack on Danish infrastructure</p>
      </div>
      <p>The attacks occurred in two waves in May 2023, and SektorCERT — Denmark's cybersecurity organization for critical infrastructure — published a detailed report in November 2023 documenting the full scope. In the first wave, attackers exploited CVE-2023-28771, a critical vulnerability in Zyxel firewalls used by Danish energy operators. The flaw had been patched, but 22 companies had not applied the update. Attackers moved quickly from firewall access into operational technology systems.</p>
      <p>SektorCERT detected the intrusions and coordinated an emergency response. Several companies had to enter "island mode" — operating their portion of the grid in complete isolation from the broader European interconnected system — to prevent lateral spread. A second wave days later used different attack infrastructure with no clear link to the first.</p>
      <p>The report drew attention to a persistent problem in critical infrastructure globally: known, patchable vulnerabilities sitting unaddressed in systems that operators are reluctant to update because downtime carries its own operational risks. The Danish attack was a direct, documented warning to European energy operators — and the rest of the world — about the cost of delayed patching.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>SektorCERT. (2023). <em>The Attack Against Danish Critical Infrastructure.</em> SektorCERT Report.</li>
        <li>Greenberg, A. (2023). "Hackers Hit 22 Danish Energy Firms in Largest Attack on That Country's Critical Infrastructure." <em>Wired.</em></li>
        <li>CISA. (2023). <em>Advisory: Zyxel Firewalls Exploited by Threat Actors (CVE-2023-28771).</em></li>
      </ol></div></div>
    `,

    point7: `
      <h3>On April 28, 2025, electricity vanished across Spain and Portugal in seconds — 55 million people plunged into darkness, and no one could say for certain why.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Under investigation — no confirmed attribution as of mid-2025</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> ~55 million people affected across the Iberian Peninsula; trains halted mid-route, hospitals on generators, ATMs offline, traffic systems failed; one of the largest blackouts in European history</p>
      </div>
      <p>At approximately 12:33 PM local time on April 28, 2025, the lights went out across Spain and Portugal nearly simultaneously. The scale was staggering — 55 million people across the Iberian Peninsula lost power. Trains stopped mid-route. Airports switched to emergency generators. Madrid's metro system ground to a halt. Hospitals activated backup power. ATMs went dark across major cities.</p>
      <p>Spain's grid operator Red Eléctrica initially attributed the event to a rare "atmospheric oscillation" — an unusual meteorological phenomenon that caused rapid fluctuations in electrical flow, triggering automatic protective shutdowns across the interconnected European grid. However, cybersecurity researchers and government officials were not satisfied with this explanation. Portugal's Prime Minister publicly stated that a cyberattack could not be ruled out. Spain's National Cryptology Centre (CCN-CERT) opened a formal investigation.</p>
      <p>Whether or not this was a cyberattack, the blackout exposed how a single cascading failure in interconnected infrastructure can paralyze an entire region within seconds — and how difficult it is, in the immediate aftermath, to distinguish a deliberate attack from a technical failure. In an era of documented pre-positioning in European energy infrastructure, the uncertainty itself is part of the problem.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Red Eléctrica de España. (2025). "Comunicado sobre el incidente en el sistema eléctrico peninsular."</li>
        <li>Picheta, R. & Woodyatt, A. (2025). "Spain and Portugal hit by massive power outage." <em>CNN.</em></li>
        <li>CCN-CERT. (2025). <em>Investigación del incidente eléctrico del 28 de abril de 2025.</em></li>
      </ol></div></div>
    `,

    point8: `
      <h3>In January 2026, Venezuela experienced a major nationwide blackout — the latest in a long pattern of infrastructure failures that officials have repeatedly, and controversially, blamed on foreign cyberattacks.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Under investigation; Venezuelan government has previously attributed blackouts to US cyberoperations, claims disputed by independent analysts</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> Widespread power loss across Venezuela; details of the January 2026 event are still emerging</p>
      </div>
      <p>Venezuela has experienced some of the most severe infrastructure failures of any country in the Western Hemisphere over the past decade. The most significant was the March 2019 blackout, which left most of the country without power for days — including hospitals, water pumping stations, and food supply chains. President Nicolás Maduro attributed the outage to a US cyberattack on the Guri hydroelectric dam, the country's primary power source. Independent engineers and cybersecurity researchers largely pointed instead to chronic underinvestment, equipment degradation, and poor maintenance.</p>
      <p>The dispute over attribution reflects a broader challenge: Venezuela's electrical infrastructure has been so severely neglected that distinguishing a deliberate cyberattack from ordinary systemic failure is genuinely difficult. Repeated blackouts have become normalized. The human cost is severe — patients on life support, food spoilage, water system failures — but the cause in any given incident is contested.</p>
      <p>The January 2026 blackout is the most recent in this pattern. Details are still emerging, and independent verification of the cause remains limited. Whether or not a cyberattack was involved, Venezuela's infrastructure represents a case study in how deterioration and vulnerability compound each other — and how political context shapes the narrative around critical infrastructure failures.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Kurmanaev, A. (2019). "Venezuela's Blackout, Explained." <em>New York Times.</em></li>
        <li>Secureworks Counter Threat Unit. (2019). <em>Analysis of Venezuelan Power Grid Attack Claims.</em></li>
        <li>Human Rights Watch. (2019). <em>Venezuela: Blackouts Endangering Lives.</em></li>
      </ol></div></div>
    `,

    arrowTaiwan: `
      <h3>Taiwan is the most persistently targeted nation in the world for Chinese cyber operations — facing millions of intrusion attempts daily as China builds the capability to dominate in a potential conflict.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Multiple Chinese state-sponsored APTs — APT40/Brass Typhoon (MSS), Volt Typhoon (PLA), APT41, Salt Typhoon, and others operating in coordination</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> Government ministries, military networks, telecom providers, research institutions, and financial infrastructure continuously targeted; espionage, data theft, and pre-positioning for potential conflict documented across multiple years</p>
      </div>
      <p>Taiwan's Ministry of Digital Affairs (MODA) has reported that government networks face an average of 2.4 million cyberattack attempts per day, with a sharp increase around geopolitically sensitive moments — military exercises, elections, diplomatic events. The attacks are not random. They are systematic, persistent, and coordinated across multiple Chinese intelligence and military units.</p>
      <p>The targets follow a strategic logic. Telecom infrastructure is compromised for signals intelligence. Government ministries handling cross-strait policy, defense procurement, and foreign affairs are targeted for political intelligence. Critical infrastructure — power grids, water systems, transport networks — is infiltrated for pre-positioning. The playbook mirrors what Volt Typhoon is doing in the United States, but against Taiwan it is more aggressive and more sustained.</p>
      <p>Taiwanese cybersecurity officials describe the situation not as a series of discrete incidents but as a continuous, years-long campaign. The goal is not necessarily to cause disruption today — it is to establish deep enough access that in the event of a military crisis, China could simultaneously attack Taiwan's communications, infrastructure, and decision-making systems, overwhelming the island's ability to respond. What is happening to Taiwan is not a preview. It is already happening.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Taiwan Ministry of Digital Affairs. (2024). <em>Annual Cybersecurity Threat Report.</em></li>
        <li>Mandiant / Google Threat Intelligence. (2024). <em>APT40 Advisory: PRC MSS-Sponsored Targeting of Taiwan.</em></li>
        <li>CISA et al. (2024). <em>Advisory AA24-190A: PRC State-Sponsored Actors Compromise and Maintain Persistent Access to US Critical Infrastructure.</em></li>
      </ol></div></div>
    `,

    arrowRussia: `
      <h3>Russian state actors have been quietly inside US critical infrastructure for years — not to flip switches today, but to be ready the moment a geopolitical crisis demands it.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Sandworm (GRU Unit 74455), Energetic Bear/Dragonfly (FSB), Fancy Bear (GRU APT28), Cozy Bear (SVR APT29)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
        <p><strong>Impact:</strong> Confirmed access to US energy, water, nuclear, and manufacturing sectors; CISA has issued repeated warnings since 2018; some intrusions reached the point where attackers had hands on operational controls</p>
      </div>
      <p>In March 2018, the Department of Homeland Security and FBI jointly confirmed that Russian government actors had been conducting a multi-stage intrusion campaign against US energy, nuclear, water, aviation, and manufacturing sectors since at least 2016. Attackers used spear-phishing and watering-hole attacks to compromise trusted third-party vendors, then pivoted into the operational technology networks of their actual targets — a method that bypasses perimeter defenses by entering through trusted suppliers.</p>
      <p>In some documented cases, attackers had progressed far enough into energy systems that they could have caused disruptions — they had hands on the switches. A 2019 Government Accountability Office report found that the Department of Energy had not fully addressed known cybersecurity risks to the grid's distribution systems. CISA's 2022 advisory on Russian state threats listed energy infrastructure as a primary target and warned that access established in prior years may still be present.</p>
      <p>The strategic logic is not immediate destruction but deterrence and leverage: the demonstrated ability to shut down US infrastructure during a geopolitical crisis — over Ukraine, Taiwan, or any other flashpoint. Security researchers call this "pre-positioning." The threat is not hypothetical. It is documented, ongoing, and the gap between access and action is narrower than public reporting typically acknowledges. The question is not whether Russia can reach US critical infrastructure. They already have.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>DHS &amp; FBI. (2018). <em>Alert TA18-074A: Russian Government Cyber Activity Targeting Energy and Other Critical Infrastructure Sectors.</em></li>
        <li>GAO. (2019). <em>Electricity Grid Cybersecurity: DOE Needs to Ensure Its Plans Fully Address Risks to Distribution Systems.</em> GAO-19-332.</li>
        <li>CISA. (2022). <em>Alert AA22-011A: Understanding and Mitigating Russian State-Sponsored Cyber Threats to US Critical Infrastructure.</em></li>
      </ol></div></div>
    `,

  };

  // === VIDEOS FOR EACH TIMELINE POINT ===
  const videos = {
    point1: '',
    point2: '',
    point3: '',
    point4: '',
    point5: '',
    point6: '',
    point7: '',
    point8: '',
    arrowTaiwan: '',
    arrowRussia: '',
  };

  // === SHARED: Open mini-page with content ===
  function openPanel(element) {
    const allClickable = [...timelinePoints, ...timelineArrows];
    allClickable.forEach(p => p.classList.remove('selected'));
    element.classList.add('selected');
    timelinePointSelected = true;

    infoBox.style.display = "none";

    const title = element.getAttribute('data-title');
    if (miniTitle) miniTitle.textContent = title;

    const pointId = element.id;
    miniContent.innerHTML = content[pointId] || "<p>No content available.</p>";
    miniContent.scrollTop = 0;

    const newColor = adjustColor(element.style.getPropertyValue('--color'));
    const newSrc = videos[pointId];

    miniPage.classList.add('active');
    timeline.classList.add('shift-left');
    timeline.classList.add('expanded');
    if (arrowsEl) arrowsEl.classList.add('hidden');

    if (backButton) {
      backButton.style.pointerEvents = 'none';
      backButton.style.opacity = '0.5';
    }

    if (newSrc && video) {
      video.style.opacity = 0;
      setTimeout(() => {
        video.src = newSrc;
        video.load();
        video.oncanplay = () => {
          video.play().catch(err => console.error("Video play error:", err));
          video.style.opacity = 1;
        };
      }, 50);
    }

    if (overlay) overlay.style.background = newColor;
    body.style.background = newColor;
    document.activeElement.blur();
  }

  // === INTERACTIONS FOR EACH TIMELINE POINT ===
  timelinePoints.forEach(point => {
    point.addEventListener("mouseenter", function () {
      if (!this.classList.contains("selected")) {
        const title = this.getAttribute("data-title");
        infoBox.textContent = title;
        infoBox.style.display = "block";
        updateInfoBoxPosition(this);

        if (!timelinePointSelected) {
          const newColor = adjustColor(this.style.getPropertyValue('--color'));
          if (overlay) overlay.style.background = newColor;
          body.style.background = newColor;
        }
      }
    });

    point.addEventListener("mouseleave", function () {
      infoBox.style.display = "none";
      if (!timelinePointSelected) {
        if (overlay) overlay.style.background = "rgba(244, 244, 244, 0.5)";
        body.style.background = "#000000";
      }
    });

    point.addEventListener('click', function () {
      openPanel(this);
    });
  });

  // === INTERACTIONS FOR ARROW ELEMENTS ===
  timelineArrows.forEach(arrow => {
    arrow.addEventListener("mouseenter", function () {
      if (!this.classList.contains("selected") && !timelinePointSelected) {
        const newColor = adjustColor(this.style.getPropertyValue('--color'));
        if (overlay) overlay.style.background = newColor;
        body.style.background = newColor;
      }
    });

    arrow.addEventListener("mouseleave", function () {
      if (!timelinePointSelected) {
        if (overlay) overlay.style.background = "rgba(244, 244, 244, 0.5)";
        body.style.background = "#000000";
      }
    });

    arrow.addEventListener('click', function () {
      openPanel(this);
    });
  });

  // === CLOSE BUTTON ===
  if (closeButton) {
    closeButton.addEventListener('click', closeMiniPage);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") closeMiniPage();
  });

  document.addEventListener('click', (event) => {
    const allClickable = [...timelinePoints, ...timelineArrows];
    const clickedClickable = allClickable.some(el => el === event.target || el.contains(event.target));
    if (!miniPage.contains(event.target) && !clickedClickable) {
      closeMiniPage();
    }
  });

  // === FUNCTION: Close panel ===
  function closeMiniPage() {
    miniPage.classList.remove('active');
    timeline.classList.remove('shift-left');
    timeline.classList.remove('expanded');
    timelinePointSelected = false;
    if (arrowsEl) arrowsEl.classList.remove('hidden');

    if (backButton) {
      backButton.style.pointerEvents = 'auto';
      backButton.style.opacity = '1';
    }

    const allClickable = [...timelinePoints, ...timelineArrows];
    allClickable.forEach(p => p.classList.remove('selected'));

    if (overlay) overlay.style.background = "rgba(244, 244, 244, 0.5)";

    if (video) {
      video.src = 'videos/default.mp4';
      video.load();
      video.play();
    }

    body.style.background = "#000000";
  }

  // === FUNCTION: Position hover tooltip ===
  function updateInfoBoxPosition(point) {
    let rect = point.getBoundingClientRect();
    let boxWidth = infoBox.offsetWidth || 200;
    let leftPosition = rect.left + window.scrollX + rect.width / 2 - boxWidth / 2;
    let topPosition  = rect.top + window.scrollY - infoBox.offsetHeight - 14;
    infoBox.style.left = `${leftPosition}px`;
    infoBox.style.top  = `${topPosition}px`;
  }

  // === FUNCTION: Lighten hex color to RGBA ===
  function adjustColor(hex) {
    if (!hex || hex.length < 7) return 'rgba(100,100,100,0.5)';
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    r += (255 - r) * 0.3;
    g += (255 - g) * 0.3;
    b += (255 - b) * 0.3;
    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.5)`;
  }

});
