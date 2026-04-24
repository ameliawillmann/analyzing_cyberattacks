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
      <h3>The world’s first cyber weapon.</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> June 2010</p>
        <p><strong>Actors:</strong> United States & Israel joint operation targeting Iran</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>Stuxnet was a computer worm developed as a joint US-Israeli cyber weapon. Under the George W. Bush administration, the worm was designed with the intention to slowly damage Iran's nuclear capability while confusing the Iranian scientists about the cause. The US targeted Iran's uranium enrichment plant in Natanz.</p>
      <p>The first version of the worm was unleashed in 2007 but was quickly accelerated under the Obama administration. More aggressive versions were released in 2009 and 2010 out of fear that Iran would have enough uranium to build a bomb in 2010. Stuxnet sabotaged the centrifuge rotation speeds while also feeding false data to the operators. Therefore, the machines appeared to function normally but were being physically destroyed from the inside. It was discovered in June 2010. Overall, the attack destroyed nearly 1,000 of Iran's 6,000 centrifuges, which are the machines that enrich uranium… which is a crucial step to build an atomic bomb.</p>
      <p>This was the first cyber weapon confirmed to cause physical destruction to critical infrastructure. It is often cited as the spark to the modern transformation of cyberwarfare. As a digital attack that impacted physical machinery, Stuxnet solidified that critical infrastructure was a military target that governments needed to protect and defend.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://cisac.fsi.stanford.edu/news/stuxnet" target="_blank">https://cisac.fsi.stanford.edu/news/stuxnet</a></li>
        <li><a href="https://www.nytimes.com/2012/06/01/world/middleeast/obama-ordered-wave-of-cyberattacks-against-iran.html?pagewanted=all&_r=0" target="_blank">https://www.nytimes.com/2012/06/01/world/middleeast/obama-ordered-wave-of-cyberattacks-against-iran.html</a></li>
        <li><a href="https://www.washingtonpost.com/world/national-security/stuxnet-was-work-of-us-and-israeli-experts-officials-say/2012/06/01/gJQAlnEy6U_story.html" target="_blank">https://www.washingtonpost.com/world/national-security/stuxnet-was-work-of-us-and-israeli-experts-officials-say/2012/06/01/gJQAlnEy6U_story.html</a></li>
      </ol></div></div>
    `,

    point2: `
      <h3>On December 23, 2015, 230,000 Ukrainians lost power — the first confirmed cyberattack in history to cause a blackout.</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> December 2015</p>
        <p><strong>Actors:</strong> Sandworm Team (attributed to Russian GRU Unit 74455)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
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
        <p><strong>Date:</strong> October 2019</p>
        <p><strong>Actors:</strong> Lazarus Group (North Korean state-sponsored, attributed to the Reconnaissance General Bureau)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
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
        <p><strong>Date:</strong> June 2020</p>
        <p><strong>Actors:</strong> Iranian state-sponsored hackers (attributed by Israel's National Cyber Directorate)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
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
        <p><strong>Date:</strong> May 2023</p>
        <p><strong>Actors:</strong> Volt Typhoon (Chinese state-sponsored APT, attributed to the PRC MSS/PLA; also called Bronze Silhouette)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
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
        <p><strong>Date:</strong> November 2023</p>
        <p><strong>Actors:</strong> Wave 1: Sandworm (Russian GRU), exploiting a Zyxel firewall vulnerability; Wave 2: separate actor, attribution unclear</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
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
        <p><strong>Date:</strong> April 2025</p>
        <p><strong>Actors:</strong> Under investigation — no confirmed attribution as of mid-2025</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
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
        <p><strong>Date:</strong> January 2026</p>
        <p><strong>Actors:</strong> Under investigation; Venezuelan government has previously attributed blackouts to US cyberoperations, claims disputed by independent analysts</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
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
      <h3>Persistent Attacks Against Taiwan</h3>
      <p>[for V2]</p>
    `,

    arrowRussia: `
      <h3>The US is Next</h3>
      <p>[for V2]</p>
    `,

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

    miniPage.classList.add('active');
    timeline.classList.add('shift-left');
    timeline.classList.add('expanded');
    if (arrowsEl) arrowsEl.classList.add('hidden');

    if (backButton) {
      backButton.style.pointerEvents = 'none';
      backButton.style.opacity = '0.5';
    }

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
        body.style.background = newColor;
      }
    });

    arrow.addEventListener("mouseleave", function () {
      if (!timelinePointSelected) {
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
