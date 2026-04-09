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
      <h3>On May 5, 2000, a single email attachment set a record — 50 million computers infected in ten days.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Onel de Guzman (Philippines) — never charged due to absence of a cybercrime law</p>
        <p><strong>Type:</strong> Email worm / Social engineering</p>
        <p><strong>Impact:</strong> ~50 million infections; ~$10 billion in damages; hit the Pentagon, CIA, and UK Parliament</p>
      </div>
      <p>The ILOVEYOU worm arrived as an attachment titled "LOVE-LETTER-FOR-YOU.txt.vbs." Windows hid the .vbs extension by default, so recipients believed they were opening a text file. Once executed, the script overwrote image and audio files, added itself to system startup, then forwarded itself to every contact in the victim's Outlook address book — an early example of email-based mass propagation.</p>
      <p>The attack exploited human psychology more than any technical flaw. Curiosity and desire drove the spread. This was the event that forced organizations to reconsider open email attachment policies and pushed antivirus signature-update cycles from days to hours.</p>
      <p>The Philippine legislature passed the E-Commerce Law of 2000 shortly after — one of the first cybercrime statutes in Asia — directly in response to this attack. The case exposed a critical global gap: malware could cross borders in seconds, but legal jurisdiction could not.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Bridis, T. (2000). "Love Bug Virus Suspect Identified." <em>Associated Press.</em></li>
        <li>Noughton, J. (2020). "ILOVEYOU: 20 Years On." <em>The Guardian.</em></li>
      </ol></div></div>
    `,

    point2: `
      <h3>At 5:30 AM on January 25, 2003, a 376-byte worm paralyzed the internet — doubling in size every 8.5 seconds.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Unknown — exploited a publicly disclosed, patchable vulnerability</p>
        <p><strong>Type:</strong> Network worm (buffer overflow in Microsoft SQL Server 2000)</p>
        <p><strong>Impact:</strong> 75,000 hosts infected in 10 minutes; Bank of America ATMs offline; 911 systems disrupted in Washington State; South Korea's internet nearly collapsed</p>
      </div>
      <p>SQL Slammer exploited a buffer overflow vulnerability in Microsoft SQL Server 2000 that had been publicly disclosed — and patched — six months earlier. A single UDP packet could crash a vulnerable server. The worm generated random IP addresses and sent itself continuously, quickly saturating network bandwidth worldwide.</p>
      <p>At its peak, Slammer was sending approximately 55 million scans per second. The resulting congestion disrupted Continental Airlines' flight check-in systems, took down five of thirteen internet root DNS servers, and caused Ohio's Davis-Besse nuclear plant to lose safety monitoring systems for five hours.</p>
      <p>SQL Slammer's core lesson: a six-month-old patch would have stopped it entirely. It made patch management — not just firewalls — a fundamental security control.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Moore, D., et al. (2003). "Inside the Slammer Worm." <em>IEEE Security &amp; Privacy</em>, 1(4), 33–39.</li>
        <li>Lemos, R. (2003). "SQL Slammer Worm Crashes Internet Backbone." <em>CNET News.</em></li>
      </ol></div></div>
    `,

    point3: `
      <h3>In April 2007, Estonia became the first country to have its national digital infrastructure shut down by a coordinated cyberattack.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Russian-speaking hacktivists; Russian government involvement alleged but not prosecuted</p>
        <p><strong>Type:</strong> Distributed Denial of Service (DDoS) — three waves over three weeks</p>
        <p><strong>Impact:</strong> Government, banking, and media websites offline for days; NATO deployed its first cyber defense team in response</p>
      </div>
      <p>The trigger was Estonia's decision to relocate the Bronze Soldier — a Soviet-era war memorial — from central Tallinn. Russian-speaking citizens rioted; simultaneously, DDoS attacks began targeting Estonian government websites, banks, and newspapers. At the time, Estonia was one of the most digitally connected countries in the world — voting, banking, and government services all ran online.</p>
      <p>Botnets of up to 85,000 compromised computers flooded Estonian servers. Banks had to cut off international access to prevent collapse. The parliament, prime minister's office, and foreign ministry all went offline. It was the first time a sustained cyberattack had targeted an entire nation-state's digital infrastructure.</p>
      <p>NATO established the Cooperative Cyber Defence Centre of Excellence (CCDCOE) in Tallinn the following year. The Tallinn Manual — the authoritative document on how international law applies to cyberspace — grew directly out of this event.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Davis, J. (2007). "Hackers Take Down the Most Wired Country in Europe." <em>Wired.</em></li>
        <li>Schmitt, M. (Ed.) (2013). <em>Tallinn Manual on the International Law Applicable to Cyber Warfare.</em> Cambridge University Press.</li>
      </ol></div></div>
    `,

    point4: `
      <h3>Stuxnet was the world's first cyberweapon — code designed not to steal data, but to physically destroy a machine.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> US (NSA/CIA) and Israel (Unit 8200) — Operation Olympic Games</p>
        <p><strong>Type:</strong> Advanced Persistent Threat (APT) / Industrial sabotage targeting Siemens PLCs</p>
        <p><strong>Impact:</strong> ~1,000 Iranian centrifuges destroyed; Iran's uranium enrichment delayed by an estimated 1–2 years</p>
      </div>
      <p>Stuxnet was discovered in 2010 but had likely been active since 2007–2009. It spread via infected USB drives and exploited four zero-day vulnerabilities simultaneously — an unprecedented number at the time. Once inside a network, it specifically targeted Siemens Step 7 software controlling PLCs at Iran's Natanz nuclear enrichment facility.</p>
      <p>The worm caused centrifuges to spin at incorrect speeds while reporting normal operations to operators. Centrifuges failed at an unusual rate. Iranian engineers couldn't determine why. Stuxnet was designed to destroy equipment while making the damage look like mechanical failure, not sabotage.</p>
      <p>Stuxnet permanently changed the threat landscape. It proved digital attacks could cause physical damage to critical infrastructure — and set a precedent: once the US used cyber operations as a covert tool of statecraft, it became harder to argue other nations shouldn't do the same.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Langner, R. (2011). "Stuxnet: Dissecting a Cyberwarfare Weapon." <em>IEEE Security &amp; Privacy</em>, 9(3), 49–51.</li>
        <li>Sanger, D. (2012). "Obama Order Sped Up Wave of Cyberattacks Against Iran." <em>New York Times.</em></li>
        <li>Zetter, K. (2014). <em>Countdown to Zero Day.</em> Crown.</li>
      </ol></div></div>
    `,

    point5: `
      <h3>The 2013 Target breach didn't start with Target — it started with a small HVAC company in Pennsylvania.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Eastern European cybercriminals (linked to the Rescator carding forum)</p>
        <p><strong>Type:</strong> Supply chain compromise → point-of-sale malware (BlackPOS)</p>
        <p><strong>Impact:</strong> 40 million credit card numbers stolen; 70 million customer records exposed; Target losses exceeded $300 million; CEO and CIO resigned</p>
      </div>
      <p>Attackers first compromised Fazio Mechanical, an HVAC contractor with remote access to Target's network for billing and project management. Using stolen credentials, they pivoted into Target's internal network and installed BlackPOS malware on point-of-sale terminals across 1,800 stores. The malware captured card data in real time from November 27 through December 15, 2013 — peak holiday shopping season.</p>
      <p>Target's $1.6 million FireEye intrusion detection system flagged the malware and sent alerts to the security operations center in Bangalore and Minneapolis. The alerts were reviewed but not acted on. The breach wasn't discovered until the US Department of Justice notified Target in mid-December.</p>
      <p>The fallout changed corporate security culture. It accelerated the US transition to chip-and-PIN (EMV) credit cards and established third-party vendor risk management as a boardroom issue, not just an IT concern.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Riley, M., et al. (2014). "Missed Alarms and 40 Million Stolen Credit Card Numbers." <em>Bloomberg Businessweek.</em></li>
        <li>Senate Commerce Committee. (2014). <em>A "Kill Chain" Analysis of the 2013 Target Data Breach.</em></li>
      </ol></div></div>
    `,

    point6: `
      <h3>On December 23, 2015, 230,000 Ukrainians lost power — the first confirmed cyberattack to cause a blackout.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Sandworm Team (attributed to Russian GRU Unit 74455)</p>
        <p><strong>Type:</strong> Spear-phishing → SCADA/ICS sabotage (BlackEnergy malware, KillDisk wiper)</p>
        <p><strong>Impact:</strong> Three Ukrainian energy companies taken offline; 230,000 customers without power for up to 6 hours</p>
      </div>
      <p>The attack began months earlier with spear-phishing emails sent to energy company employees. Malicious Word documents containing BlackEnergy malware gave attackers persistent access. For months they silently mapped operational technology (OT) systems — studying the SCADA controls that ran the physical power grid.</p>
      <p>On December 23, attackers struck simultaneously across three companies. They took over SCADA workstations, opened breakers to cut power, deployed KillDisk to wipe and brick infected systems, and flooded customer service lines with fake calls. Operators watched their cursors move on their own screens, locked out and unable to respond.</p>
      <p>This attack proved that power grids — not just corporate IT networks — could be brought down remotely. A second, more sophisticated attack hit Ukraine's grid in December 2016. The same group, Sandworm, later deployed NotPetya in 2017, the most destructive cyberattack in history.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>Zetter, K. (2016). "Inside the Cunning, Unprecedented Hack of Ukraine's Power Grid." <em>Wired.</em></li>
        <li>ICS-CERT. (2016). <em>Cyber-Attack Against Ukrainian Critical Infrastructure.</em> Alert IR-ALERT-H-16-056-01.</li>
        <li>Dragos Inc. (2017). <em>CRASHOVERRIDE: Analysis of the Threat to Electric Grid Operations.</em></li>
      </ol></div></div>
    `,

    point7: `
      <h3>In May 2017, WannaCry spread to 200,000 computers across 150 countries in a single day — without a single user clicking anything.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> Lazarus Group (attributed to North Korea's Reconnaissance General Bureau)</p>
        <p><strong>Type:</strong> Self-propagating ransomware cryptoworm using the NSA's EternalBlue exploit</p>
        <p><strong>Impact:</strong> UK NHS crippled — 19,000 appointments cancelled; global damages estimated at $4–8 billion</p>
      </div>
      <p>WannaCry used EternalBlue, an exploit developed by the NSA and leaked by the Shadow Brokers in April 2017 — five weeks before the attack. EternalBlue targeted a critical vulnerability in Windows SMB (file sharing). Microsoft had issued a patch (MS17-010) in March, but millions of systems — especially in healthcare and legacy enterprise environments — hadn't updated.</p>
      <p>Unlike typical ransomware, WannaCry required no user interaction. It scanned the internet for vulnerable machines and infected them automatically. The UK's National Health Service was hit hardest: 80 of 236 hospital trusts were affected, operations were cancelled, and ambulances were diverted. The estimated NHS cost was £92 million.</p>
      <p>A 22-year-old British researcher, Marcus Hutchins, discovered a kill switch embedded in the code — registering an unregistered domain halted propagation. His accidental discovery slowed the outbreak. WannaCry remains active today: unpatched systems still encounter it.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>NHS Digital. (2018). <em>Investigation: WannaCry Cyber Attack and the NHS.</em></li>
        <li>US Department of Justice. (2018). "North Korean Regime-Backed Programmer Charged." Press Release.</li>
        <li>Hutchins, M. (2017). "How I Accidentally Stopped a Global Cyberattack." <em>MalwareTech Blog.</em></li>
      </ol></div></div>
    `,

    point8: `
      <h3>The SolarWinds attack wasn't a hack — it was a hijacking. Attackers turned a trusted software update into a backdoor into the US government.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> APT29 / Cozy Bear (attributed to Russia's SVR Foreign Intelligence Service)</p>
        <p><strong>Type:</strong> Supply chain compromise — SUNBURST backdoor injected into SolarWinds Orion software updates</p>
        <p><strong>Impact:</strong> 18,000 organizations received the malicious update; 9 US federal agencies breached including Treasury, Commerce, DHS, DOJ, and the NSA</p>
      </div>
      <p>Attackers compromised SolarWinds' software build environment by October 2019 and inserted SUNBURST — a sophisticated backdoor — into routine Orion updates. Between March and June 2020, 18,000 customers downloaded the infected update. Once installed, SUNBURST lay dormant for up to two weeks before activating, mimicking legitimate traffic to avoid detection.</p>
      <p>FireEye discovered the breach in December 2020 while investigating a theft of its own red team tools. The scope was staggering: Microsoft, Intel, Cisco, and VMware were all compromised alongside nine federal agencies. Attackers had been inside some networks for over nine months, reading emails and exfiltrating sensitive documents.</p>
      <p>SolarWinds redefined supply chain security as a national security issue. It proved that even organizations with strong internal security could be compromised through trusted third-party software. The incident directly prompted Executive Order 14028 on Improving the Nation's Cybersecurity in 2021.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>FireEye. (2020). "Highly Evasive Attacker Leverages SolarWinds Supply Chain." <em>FireEye Blog.</em></li>
        <li>CISA. (2020). <em>Emergency Directive 21-01: Mitigate SolarWinds Orion Code Compromise.</em></li>
        <li>Sanger, D., &amp; Perlroth, N. (2020). "As Understanding of Russian Hack Grows, So Does Alarm." <em>New York Times.</em></li>
      </ol></div></div>
    `,

    point9: `
      <h3>On May 7, 2021, one compromised password shut down the largest fuel pipeline in the United States.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> DarkSide ransomware-as-a-service (RaaS) group — Russia-based affiliates</p>
        <p><strong>Type:</strong> Ransomware — initial access via stolen VPN credentials on an account with no multi-factor authentication</p>
        <p><strong>Impact:</strong> 5,500-mile pipeline offline for 6 days; fuel shortages across the Southeast US; Colonial paid $4.4 million ransom</p>
      </div>
      <p>Attackers gained access using a single compromised password for a legacy VPN account that lacked multi-factor authentication. Within hours, DarkSide had exfiltrated approximately 100 GB of data and deployed ransomware to Colonial's IT network. Colonial proactively shut down its operational technology (OT) pipeline systems to prevent further spread — a decision that caused immediate fuel shortages across the East Coast.</p>
      <p>Gas stations ran out of fuel. Airlines scrambled for reserves. The US Department of Transportation issued emergency waivers to allow fuel transport by road. President Biden declared a state of emergency. Colonial paid $4.4 million in Bitcoin within hours. The FBI later recovered approximately $2.3 million by seizing the attacker's cryptocurrency wallet.</p>
      <p>DarkSide stated they were financially motivated, not geopolitical — they hadn't intended to create a societal crisis. The incident nonetheless exposed how ransomware groups could accidentally destabilize critical infrastructure. DarkSide shut down shortly after, under pressure from the US government and Russian criminal networks who feared the attention.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>CISA &amp; FBI. (2021). <em>Alert AA21-131A: DarkSide Ransomware.</em></li>
        <li>Turton, W., &amp; Mehrotra, K. (2021). "Hackers Breached Colonial Pipeline Using Compromised Password." <em>Bloomberg.</em></li>
        <li>DOJ. (2021). "Department of Justice Seizes $2.3 Million in Cryptocurrency Paid to Ransomware Extortionists." Press Release.</li>
      </ol></div></div>
    `,

    point10: `
      <h3>The Change Healthcare attack disrupted prescription processing for 1 in 3 Americans — the most damaging cyberattack on US healthcare ever recorded.</h3>
      <div class="attack-meta">
        <p><strong>Actors:</strong> ALPHV/BlackCat ransomware group (Russia-based); RansomHub subsequently claimed additional data</p>
        <p><strong>Type:</strong> Ransomware — initial access via stolen Citrix credentials with no multi-factor authentication</p>
        <p><strong>Impact:</strong> 22-day outage; 100M+ Americans' data exposed; UnitedHealth paid $22 million ransom; estimated $870M+ in losses</p>
      </div>
      <p>Change Healthcare, a UnitedHealth Group subsidiary, processes 15 billion medical transactions annually — roughly 40% of all US insurance claims. On February 21, 2024, ALPHV/BlackCat used stolen credentials to access Change's Citrix remote desktop portal, which lacked multi-factor authentication. Attackers spent nine days on the network before deploying ransomware.</p>
      <p>Pharmacies couldn't verify insurance or process prescriptions. Hospitals couldn't submit claims or receive payments. Small medical practices faced existential cash-flow crises. The American Hospital Association estimated hospitals were losing $1 billion per day. UnitedHealth provided emergency advance payments to stave off collapse — then paid $22 million in ransom. ALPHV subsequently exit-scammed its own affiliates, keeping the payment.</p>
      <p>The incident prompted congressional hearings on healthcare cybersecurity, exposed the systemic risk of industry consolidation (a single vendor controlling 40% of claims processing), and revived calls for mandatory minimum cybersecurity standards in the healthcare sector.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li>HHS. (2024). <em>Change Healthcare Cybersecurity Incident: Frequently Asked Questions.</em></li>
        <li>American Hospital Association. (2024). <em>Change Healthcare Cyberattack: Impact on the Health Care Field.</em></li>
        <li>Senate Finance Committee. (2024). "Examining the Change Healthcare Cyberattack." Hearing Testimony.</li>
      </ol></div></div>
    `,

  };

  // === VIDEOS FOR EACH TIMELINE POINT (add file paths when you have them) ===
  const videos = {
    point1:  '',
    point2:  '',
    point3:  '',
    point4:  '',
    point5:  '',
    point6:  '',
    point7:  '',
    point8:  '',
    point9:  '',
    point10: '',
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
