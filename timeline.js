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
  const miniPage       = document.getElementById('mini-page');
  const miniContent    = document.getElementById('mini-content');
  const miniTitle      = document.getElementById('mini-title');
  const closeButton    = document.querySelector('.close-btn');
  const timeline       = document.getElementById('timeline');
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
      <h3>On December 23, 2015, 230,000 Ukrainians lost power — the first confirmed cyberattack to cause a blackout.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Sandworm Team (attributed to Russian GRU Unit 74455)</p>
        <p><strong>Category:</strong> Spear-phishing → SCADA/ICS sabotage (BlackEnergy malware, KillDisk wiper)</p>
        <p><strong>Impact:</strong> Three Ukrainian energy companies taken offline; 230,000 customers without power for up to 6 hours</p>
      </div>
      <p>The attack began months earlier with spear-phishing emails sent to energy company employees. Malicious Word documents containing BlackEnergy malware gave attackers persistent access. For months they silently mapped operational technology (OT) systems — studying the SCADA controls that ran the physical power grid.</p>
      <p>On December 23, attackers struck simultaneously across three companies. They took over SCADA workstations, opened breakers to cut power, deployed KillDisk to wipe and brick infected systems, and flooded customer service lines with fake calls. Operators watched their cursors move on their own screens, locked out and unable to respond.</p>
      <p>This attack proved that power grids — not just corporate IT networks — could be brought down remotely. A second, more sophisticated attack hit Ukraine's grid in December 2016. The same group, Sandworm, later deployed NotPetya in 2017, causing an estimated $10 billion in global damage.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Zetter, K. (2016). "Inside the Cunning, Unprecedented Hack of Ukraine's Power Grid." <em>Wired.</em></li>
        <li>ICS-CERT. (2016). <em>Cyber-Attack Against Ukrainian Critical Infrastructure.</em> Alert IR-ALERT-H-16-056-01.</li>
        <li>Dragos Inc. (2017). <em>CRASHOVERRIDE: Analysis of the Threat to Electric Grid Operations.</em></li>
      </ol></div></div>
    `,

    point2: `
      <h3>For over a decade, Russian state-sponsored groups have quietly embedded themselves in US critical infrastructure — not to destroy it yet, but to be ready.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Sandworm (GRU), Fancy Bear (GRU APT28), Volt Typhoon (PRC — also active in US infrastructure)</p>
        <p><strong>Category:</strong> Long-term persistent access campaigns targeting energy, water, and transportation sectors</p>
        <p><strong>Impact:</strong> Confirmed access to US grid control systems; CISA has issued repeated warnings since 2018</p>
      </div>
      <p>In 2018, the Department of Homeland Security and FBI jointly confirmed that Russian government actors had been conducting a multi-stage intrusion campaign against US energy, nuclear, water, aviation, and manufacturing sectors since at least 2016. Attackers used spear-phishing and watering-hole attacks to compromise trusted third-party vendors, then pivoted into operational technology networks.</p>
      <p>In some cases, attackers reached the point where they could have caused disruptions — they had hands on the switches. A 2019 report from the Government Accountability Office found that the Department of Energy had not fully addressed known cybersecurity risks to the grid's distribution systems. CISA's 2022 advisory on Russian state-sponsored cyber threats listed energy infrastructure as a primary target.</p>
      <p>The strategic logic is not immediate destruction but deterrence and leverage: the ability to shut down infrastructure during a geopolitical crisis. Security researchers call this "pre-positioning." The threat is ongoing — and the gap between access and action is narrower than most public reporting acknowledges.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>CISA &amp; FBI. (2018). <em>Alert TA18-074A: Russian Government Cyber Activity Targeting Energy and Other Critical Infrastructure Sectors.</em></li>
        <li>GAO. (2019). <em>Electricity Grid Cybersecurity: DOE Needs to Ensure Its Plans Fully Address Risks to Distribution Systems.</em> GAO-19-332.</li>
        <li>CISA. (2022). <em>Alert AA22-011A: Understanding and Mitigating Russian State-Sponsored Cyber Threats to US Critical Infrastructure.</em></li>
      </ol></div></div>
    `,

    point3: `
      <h3>In November 2023, hackers breached 22 Danish energy companies in a single coordinated wave — the largest cyberattack ever recorded against Danish critical infrastructure.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Initially linked to Sandworm (Russian GRU); a second wave used infrastructure tied to the Fancy Bear group</p>
        <p><strong>Category:</strong> Exploitation of a firewall vulnerability (Zyxel CVE-2023-28771) → access to industrial control systems</p>
        <p><strong>Impact:</strong> 22 companies compromised; some forced to operate in island mode, disconnected from the national grid</p>
      </div>
      <p>The attacks unfolded in two distinct waves. In the first wave during May 2023, attackers exploited a critical vulnerability in Zyxel firewalls used by Danish energy operators. The flaw had been disclosed and patched — but 22 companies had not applied the update. Attackers moved quickly from firewall access into operational technology systems controlling physical energy infrastructure.</p>
      <p>SektorCERT, Denmark's cybersecurity organization for critical infrastructure, detected the intrusions and coordinated the response. Several companies had to operate in "island mode" — isolated from the interconnected European power grid — to contain the breach. A second wave in late May used different attack infrastructure with no clear attribution tie to the first.</p>
      <p>The report from SektorCERT drew attention to a persistent problem across critical infrastructure globally: known vulnerabilities sitting unpatched in systems that operators are reluctant to update because downtime carries its own risks. The Danish attack was a direct warning to European energy operators about the consequences.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>SektorCERT. (2023). <em>The Attack Against Danish Critical Infrastructure.</em></li>
        <li>Greenberg, A. (2023). "Hackers Hit 22 Danish Energy Firms in Largest Attack on That Country's Critical Infrastructure." <em>Wired.</em></li>
        <li>CISA. (2023). <em>Advisory: Zyxel Firewalls Exploited by Threat Actors.</em></li>
      </ol></div></div>
    `,

    point4: `
      <h3>Between 2022 and the present, Microsoft has been breached multiple times by sophisticated state-sponsored actors — exposing US government email, source code, and internal systems.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Lapsus$ (2022); Storm-0558 / Chinese MSS (2023); Midnight Blizzard / Russian SVR (2024)</p>
        <p><strong>Category:</strong> Social engineering, forged authentication tokens, password spraying, lateral movement</p>
        <p><strong>Impact:</strong> US government email accounts accessed; Microsoft source code and internal systems exfiltrated; ongoing remediation as of 2024</p>
      </div>
      <p>In early 2022, the Lapsus$ extortion group compromised Microsoft using social engineering, accessing internal systems and leaking source code for Bing and Cortana. Later that year, Microsoft disclosed that the group had also briefly accessed a customer support agent's account.</p>
      <p>In 2023, Storm-0558 — a Chinese espionage group — forged authentication tokens using a stolen Microsoft account signing key, gaining access to email accounts at 25 organizations including the US State Department and Department of Commerce. The breach went undetected for a month. A CSRB review found Microsoft's security culture "inadequate."</p>
      <p>In January 2024, Microsoft disclosed that Midnight Blizzard (Russia's SVR, the same group behind SolarWinds) had accessed senior Microsoft executives' email accounts and exfiltrated source code repositories. The attack began in November 2023 via a password spray on a test account with no multi-factor authentication. Microsoft acknowledged in March 2024 that the intrusion was ongoing and worsening.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>CSRB. (2023). <em>Review of the Summer 2023 Microsoft Exchange Online Intrusion.</em> Department of Homeland Security.</li>
        <li>Microsoft. (2024). "Microsoft Actions Following Attack by Nation State Actor Midnight Blizzard." <em>Microsoft Security Blog.</em></li>
        <li>Sanger, D. (2024). "Chinese Hackers Breached More US Agencies Than Previously Known." <em>New York Times.</em></li>
      </ol></div></div>
    `,

    point5: `
      <h3>In January 2025, Chinese state-sponsored hackers intensified a sustained campaign against Taiwan's government networks, targeting ministries, infrastructure operators, and defense-adjacent agencies.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> APT40 / Brass Typhoon (Chinese MSS); additional PRC-linked groups</p>
        <p><strong>Category:</strong> Spear-phishing, supply chain compromise, exploitation of public-facing services</p>
        <p><strong>Impact:</strong> Government ministries, telecommunications providers, and research institutions compromised; espionage and pre-positioning for potential conflict</p>
      </div>
      <p>Taiwan has been a persistent target of Chinese cyber operations for years, but January 2025 saw a notable escalation in both volume and sophistication. Taiwanese authorities reported a sharp increase in intrusion attempts against government systems, attributing the campaign to multiple PRC-linked threat actors operating in coordination.</p>
      <p>The attacks targeted ministries responsible for cross-strait relations, defense procurement, and critical infrastructure management. Tactics included spear-phishing emails impersonating legitimate government communications, exploitation of vulnerabilities in internet-facing systems, and supply chain compromise through trusted software vendors — mirroring the SolarWinds playbook.</p>
      <p>The campaign reflects a broader strategic pattern: China has been systematically pre-positioning in the networks of Taiwan and its allies, building the capability to disrupt communications, supply chains, and decision-making in the event of a military confrontation. Taiwan's Cybersecurity Institute described the January 2025 activity as the most coordinated intrusion campaign it had observed in over a decade.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Taiwan Ministry of Digital Affairs. (2025). <em>Annual Cybersecurity Threat Report.</em></li>
        <li>Mandiant / Google Threat Intelligence. (2025). <em>APT40 Activity Report: Taiwan Targeting.</em></li>
        <li>CISA. (2024). <em>Advisory AA24-190A: PRC State-Sponsored Actors Compromise and Maintain Persistent Access to US Critical Infrastructure.</em></li>
      </ol></div></div>
    `,

    point6: `
      <h3>On April 28, 2025, a massive power failure swept across Spain and Portugal — tens of millions without electricity, and questions about whether it was a cyberattack.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Under investigation — no confirmed attribution as of mid-2025</p>
        <p><strong>Category:</strong> Grid failure — cause disputed between rare atmospheric oscillation, equipment failure, and possible cyber interference</p>
        <p><strong>Impact:</strong> ~55 million people affected across the Iberian Peninsula; transport systems, hospitals, and communications disrupted for hours</p>
      </div>
      <p>At approximately 12:33 PM local time on April 28, 2025, electricity disappeared across Spain and Portugal in a matter of seconds. The blackout was one of the largest in European history, affecting 55 million people. Trains stopped mid-route. Airports switched to emergency power. Hospitals activated backup generators. ATMs went dark. Traffic lights failed across major cities.</p>
      <p>Spanish grid operator Red Eléctrica initially cited a "rare atmospheric oscillation phenomenon" that caused a rapid oscillation in electrical flow, triggering automatic protective shutdowns across the interconnected European grid. However, cybersecurity researchers and government officials raised questions. Portugal's Prime Minister noted the cause had not been definitively ruled out as cyber-related. Spain's National Cryptology Centre (CCN-CERT) opened an investigation.</p>
      <p>Whether deliberate or not, the blackout exposed how rapidly a single cascading failure in interconnected infrastructure can paralyze an entire region — and how difficult it is, in the immediate aftermath, to distinguish a cyberattack from a technical failure. Investigations remain ongoing.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Red Eléctrica de España. (2025). "Comunicado sobre el incidente en el sistema eléctrico peninsular."</li>
        <li>Picheta, R. (2025). "Spain and Portugal hit by massive power outage." <em>CNN.</em></li>
        <li>CCN-CERT. (2025). <em>Investigación del incidente eléctrico del 28 de abril de 2025.</em></li>
      </ol></div></div>
    `,

    point7: `
      <h3>Loading ...</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> TBD</p>
        <p><strong>Category:</strong> TBD</p>
        <p><strong>Impact:</strong> TBD</p>
      </div>
      <p>More information coming soon — research in progress.</p>
    `,

    point8: `
      <h3>Loading ...</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> TBD</p>
        <p><strong>Category:</strong> TBD</p>
        <p><strong>Impact:</strong> TBD</p>
      </div>
      <p>More information coming soon — research in progress.</p>
    `,

  };

  // === VIDEOS FOR EACH TIMELINE POINT (add file paths when you have them) ===
  const videos = {
    point1: '',
    point2: '',
    point3: '',
    point4: '',
    point5: '',
    point6: '',
    point7: '',
    point8: '',
  };

  // === INTERACTIONS FOR EACH TIMELINE POINT ===
  timelinePoints.forEach(point => {
    // Show info box on hover (unless already selected)
    point.addEventListener("mouseenter", function () {
      if (!this.classList.contains("selected")) {
        const title = this.getAttribute("data-title");
        infoBox.textContent = title;
        infoBox.style.display = "block";
        updateInfoBoxPosition(this);

        if (!timelinePointSelected) {
          const pointId = this.id;
          const newSrc = videos[pointId];
          const newColor = adjustColor(this.style.getPropertyValue('--color'));

          if (newSrc && video) {
            video.style.opacity = 0;
            setTimeout(() => {
              video.src = newSrc;
              video.load();
              video.oncanplay = () => {
                video.play().catch(err => console.error("Hover video play error:", err));
                video.style.opacity = 1;
              };
            }, 50);
          }

          if (overlay) {
            overlay.style.background = newColor;
          }

          body.style.background = newColor;
        }
      }
    });

    // Hide info box when no longer hovering
    point.addEventListener("mouseleave", function () {
      infoBox.style.display = "none";

      if (!timelinePointSelected) {
        if (video) {
          video.src = 'videos/default.mp4';
          video.load();
          video.play();
        }

        if (overlay) {
          overlay.style.background = "rgba(244, 244, 244, 0.5)";
        }

        body.style.background = "#ffffff";
      }
    });

    // Click to open detail panel
    point.addEventListener('click', function () {
      timelinePoints.forEach(p => p.classList.remove('selected'));
      this.classList.add('selected');
      timelinePointSelected = true;
      this.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      infoBox.style.display = "none";

      const title = this.getAttribute('data-title');
      if (miniTitle) miniTitle.textContent = title;

      const pointId = this.id;
      miniContent.innerHTML = content[pointId] || "<p>No content available.</p>";
      miniContent.scrollTop = 0;

      const newSrc = videos[pointId];
      const newColor = adjustColor(this.style.getPropertyValue('--color'));

      miniPage.classList.add('active');
      timeline.classList.add('shift-left');
      timeline.classList.add('expanded');

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

      if (overlay) {
        overlay.style.background = newColor;
      }

      body.style.background = newColor;
      document.activeElement.blur();
    });
  });

  // === CLOSE BUTTON ===
  if (closeButton) {
    closeButton.addEventListener('click', closeMiniPage);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeMiniPage();
    }
  });

  document.addEventListener('click', (event) => {
    if (!miniPage.contains(event.target) && !event.target.classList.contains('timeline-point')) {
      closeMiniPage();
    }
  });

  // === FUNCTION: Close panel ===
  function closeMiniPage() {
    miniPage.classList.remove('active');
    timeline.classList.remove('shift-left');
    timeline.classList.remove('expanded');
    timelinePointSelected = false;

    if (backButton) {
      backButton.style.pointerEvents = 'auto';
      backButton.style.opacity = '1';
    }

    timelinePoints.forEach(p => p.classList.remove('selected'));

    if (overlay) {
      overlay.style.background = "rgba(244, 244, 244, 0.5)";
    }

    if (video) {
      video.src = 'videos/default.mp4';
      video.load();
      video.play();
    }

    body.style.background = "#f4f4f4";
  }

  // === FUNCTION: Position hover tooltip ===
  function updateInfoBoxPosition(point) {
    let rect = point.getBoundingClientRect();
    let boxWidth = infoBox.offsetWidth || 200;

    // Center above the point
    let leftPosition = rect.left + window.scrollX + rect.width / 2 - boxWidth / 2;
    let topPosition  = rect.top + window.scrollY - infoBox.offsetHeight - 14;

    infoBox.style.left = `${leftPosition}px`;
    infoBox.style.top  = `${topPosition}px`;
  }

  // === FUNCTION: Lighten hex color to RGBA ===
  function adjustColor(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r += (255 - r) * 0.3;
    g += (255 - g) * 0.3;
    b += (255 - b) * 0.3;

    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.5)`;
  }

});
