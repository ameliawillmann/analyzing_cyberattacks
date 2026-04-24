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
      <h3>The world’s first cyber weapon</h3>
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
      <h3>First confirmed cyber operation to successfully attack energy infrastructure</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> December 2015</p>
        <p><strong>Actors:</strong> Sandworm (associated with Russia's GRU) targeting Ukraine</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>The 2015 power grid attack was the first of two widely publicized attacks against Ukraine critical infrastructure. The 2015 attack started with spear-phishing emails and malicious Microsoft Word files carrying BlackEnergy malware. This malware gave the attackers access to industrial control systems which controlled power delivery operations. In December, the attackers struck three regional electric power distribution companies, impacting about 225,000 customers. It was a calculated and coordinated attack taking out each company within 30 minutes of each other. After the attack, the attackers also deployed KillDisk malware to wipe files on the targeted systems and overall corrupt the systems to be inoperable.</p>
      <p>The 2016 attack built on the 2015 attack. It was more automated, with the code manipulations built right into the malware. Therefore, it was also ore scalable. Despite no major outages, Ukrainian grid operators had to manually close breakers at affected stations to restore electricity. The attackers made it significantly harder for the companies to recover. These attacks are part of the persistent cyberoperations that GRU has conducted against Ukraine. Over the past decade, attacks have grown increasingly complex, harder to detect, and more damaging.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01" target="_blank">https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01</a></li>
        <li><a href="https://www.cfr.org/cyber-operations/compromise-of-a-power-grid-in-eastern-ukraine" target="_blank">https://www.cfr.org/cyber-operations/compromise-of-a-power-grid-in-eastern-ukraine</a></li>
        <li><a href="https://www.congress.gov/crs-product/R48067" target="_blank">https://www.congress.gov/crs-product/R48067</a></li>
      </ol></div></div>
    `,

    point3: `
      <h3>Nuclear power plants are not as secure as we thought</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> September 2019</p>
        <p><strong>Actors:</strong> Targeted India. Unconfirmed attackers but possibly caused by a variant of the DTRACK virus that was developed by the North Korea-linked Lazarus group.</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>The Kudankulam Nuclear Power Plant (KKNPP) in Tamil Nadu is India's largest nuclear facility. In September 2019, the plant suffered a cyberattack. At first, KKNPP plant officials denied that it was a cyberattack, officially stating that "any cyberattack on the Nuclear Power Plant Control System is not possible."</p>
      <p>About a month later, the Nuclear Power Corporation Of India Limited (NPCIL) publicly confirmed it was a cyberattack that was first noticed in early September by CERT-In (Indian Computer Emergency Response Team). Investigations revealed that a user had connected a malware-infected personal computer to the plant's administrative network. The administrative network was completely compromised. While the plant's operational network and systems are not connected to the administrative network, a large amount of data from the KKNPP's administrative network was still stolen.</p>
      <p>There was no critical harm this time, but it is no secret that attacking a nuclear power plant can be catastrophic. Prior to this attack, it was understood that the "air gap" security strategy, which involves physical isolating computer or local networks from the Internet to prevent external breaches, were secure. However, this attack proved to government agencies around the world that air-gapped nuclear facilities can still be targeted and hacked. It also sparked worldwide discussions about what could have happened, and the destruction potential involved with hacking nuclear power plants.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://www.washingtonpost.com/politics/2019/11/04/an-indian-nuclear-power-plant-suffered-cyberattack-heres-what-you-need-know/" target="_blank">https://www.washingtonpost.com/politics/2019/11/04/an-indian-nuclear-power-plant-suffered-cyberattack-heres-what-you-need-know/</a></li>
        <li><a href="https://thebulletin.org/2019/11/lessons-from-the-cyberattack-on-indias-largest-nuclear-power-plant/" target="_blank">https://thebulletin.org/2019/11/lessons-from-the-cyberattack-on-indias-largest-nuclear-power-plant/</a></li>
        <li><a href="https://www.reuters.com/sustainability/boards-policy-regulation/india-shuts-unit-countrys-largest-nuclear-power-plant-maintenance-2025-08-11/" target="_blank">https://www.reuters.com/sustainability/boards-policy-regulation/india-shuts-unit-countrys-largest-nuclear-power-plant-maintenance-2025-08-11/</a></li>
      </ol></div></div>
    `,

    point4: `
      <h3>The potential of poison through cyberoperations</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> April 2020</p>
        <p><strong>Actors:</strong> Iran targeting Israel (Iran declined involvement)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>In April 2020, the Israel Water Authority detected that chlorine and other chemical levels in its water supply were abnormal and alerted Israel's National Cyber Directorate. The Israel Water Authority was able to mitigate the crisis before any real damage had occurred, but there was potential for chlorine or other chemicals to be mixed into the water in harmful proportions. The increase chlorine concentrations could have caused serious illness. The increase in chemical levels could have also triggered a fail-safe, shutting off the water supply to thousands of residents during a heatwave. Investigations later revealed the attackers were targeting computers that control water flow and wastewater treatment for rural communities in Israel.</p>
      <p>It is worth noting that this was not unprompted. Israel and Iran consistently hack into each other's critical infrastructure networks and systems. However, this attack exposed a critical vulnerability that could have caused mass harm. While unsuccessful, the attack could have potentially poisoned a country's water supply. This was one of the first major cyberattacks on critical infrastructure that would have caused mass harm to the civilians of the targeted nation.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://www.timesofisrael.com/iran-cyberattack-on-israels-water-supply-could-have-sickened-hundreds-report/" target="_blank">https://www.timesofisrael.com/iran-cyberattack-on-israels-water-supply-could-have-sickened-hundreds-report/</a></li>
        <li><a href="https://www.timesofisrael.com/after-alleged-iranian-cyberattack-israels-water-authority-beefs-up-defenses/" target="_blank">https://www.timesofisrael.com/after-alleged-iranian-cyberattack-israels-water-authority-beefs-up-defenses/</a></li>
        <li><a href="https://www.washingtonpost.com/national-security/intelligence-officials-say-attempted-cyberattack-on-israeli-water-utilities-linked-to-iran/2020/05/08/f9ab0d78-9157-11ea-9e23-6914ee410a5f_story.html" target="_blank">https://www.washingtonpost.com/national-security/intelligence-officials-say-attempted-cyberattack-on-israeli-water-utilities-linked-to-iran/2020/05/08/f9ab0d78-9157-11ea-9e23-6914ee410a5f_story.html</a></li>
      </ol></div></div>
    `,

    point5: `
      <h3>This Land is Your Land, This Land is China's Land</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> May 2023</p>
        <p><strong>Actors:</strong> Chinese state-sponsored actor Volt Typhoon targeted US</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>In May 2023, CISA, NSA, FBI, and intelligence agencies from other countries confirmed that Volt Typhoon, a Chinese state-sponsored actor, had been operating mostly undetected inside US critical infrastructure networks for at least 5 years. However, the actors caused no immediate disruption or damage. Why? The US called it "pre-positioning"—building capabilities and positioning themselves in networks or systems to destroy critical infrastructure in the event of a major crisis or conflict with the US.</p>
      <p>This is also known as the "living-off-the-land" technique.</p>
      <p>The US agencies confirmed that Volt Typhoon had compromised the IT systems of the critical infrastructure in primarily communications, energy, transportation systems, water and wastewater systems sectors. Microsoft identified the malicious activity that was focused on credential access network system discovery at critical infrastructure organizations. The attack seemed centered on information gathering. However, it is inferred that a military confrontation over Taiwan would prompt Volt Typhoon to paralyze US response capabilities through critical infrastructure destruction.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a" target="_blank">https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a</a></li>
        <li><a href="https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/" target="_blank">https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/</a></li>
      </ol></div></div>
    `,

    point6: `
      <h3>Large-scale attack on Danish energy sector</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> May 2023</p>
        <p><strong>Actors:</strong> Targeted Denmark. Unconfirmed attackers but Russia's GRU suspected.</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>May 2023 saw the largest cyberattack ever recorded against Danish critical infrastructure. 22 companies which operate Danish energy infrastructure were compromised. SektorCERT, Denmark's network of essential entities operating critical infrastructure, detected the attack. Its monitoring picked up on the simultaneous multi-target attacks.</p>
      <p>Prior to the attack, Zyxel had identified a critical vulnerability in its firewalls that many members used. An attacker could exploit the Zyxel firewall and gain complete control of the firewall without knowing either usernames or passwords for the device. An update was issued, but not all the companies applied the update immediately. Therefore, the attackers compromised 11 companies immediately in the first wave. A few weeks later, the attackers executed a second wave of attacks, exploiting two unknown vulnerabilities in the firewall. Several companies were forced to operate in complete isolation of the grid until the companies could secure their systems. Although no significant damage resulted, the attack exposed the systemic vulnerabilities within Denmark's energy sector. And how crucial it is to apply updates that patch vulnerabilities immediately.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://stateofgreen.com/en/solutions/the-cyber-resilience-of-danish-critical-infrastructure/" target="_blank">https://stateofgreen.com/en/solutions/the-cyber-resilience-of-danish-critical-infrastructure/</a></li>
        <li><a href="https://sektorcert.dk/wp-content/uploads/2023/11/SektorCERT-The-attack-against-Danish-critical-infrastructure-TLP-CLEAR.pdf" target="_blank">https://sektorcert.dk/wp-content/uploads/2023/11/SektorCERT-The-attack-against-Danish-critical-infrastructure-TLP-CLEAR.pdf</a></li>
      </ol></div></div>
    `,

    point7: `
      <h3>To be or not to be a cyberattack</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> April 2025</p>
        <p><strong>Actors:</strong> Targeted Spain & Portugal. Attackers unconfirmed.</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>On April 28, 2025, Spain, Portugal, and parts of France experienced nationwide power outages affecting millions of people. The lights went out, trains stopped mid-route, hospitals switched to back-up power, and ATMs shut down. The lack of electricity had a cascading effect on other critical infrastructures, such as water shortages and telecommunication networks. Panic spread across the streets.</p>
      <p>Spain's grid operator Red Eléctrica initially attributed the outage to a rare occurrence of rapid fluctuations in electric flow that triggered the protective grid shutdowns. Investigations revealed that a problem with the power connection between France and Spain resulted in the Spanish grid being disconnected from the European grid. While Spain has publicly ruled out the possibility of a cyberattack, this would not be the first blackout caused by a cyberattack.</p>
      <p>Nevertheless, this attack displayed the criticalness of critical infrastructure is and just how scary it is when the cause is "We don't know." Or rather, the public doesn't know …</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://www.bbc.com/news/articles/czx1qp64wrno" target="_blank">https://www.bbc.com/news/articles/czx1qp64wrno</a></li>
        <li><a href="https://www.weforum.org/stories/2025/10/dangerous-blindspot-in-infrastructure-cybersecurity/" target="_blank">https://www.weforum.org/stories/2025/10/dangerous-blindspot-in-infrastructure-cybersecurity/</a></li>
        <li><a href="https://www.bbc.com/news/articles/cd6jenl581vo" target="_blank">https://www.bbc.com/news/articles/cd6jenl581vo</a></li>
        <li><a href="https://www.reuters.com/world/europe/no-sign-cyberattack-grid-operator-during-spains-blackout-minister-says-2025-05-14/" target="_blank">https://www.reuters.com/world/europe/no-sign-cyberattack-grid-operator-during-spains-blackout-minister-says-2025-05-14/</a></li>
      </ol></div></div>
    `,

    point8: `
      <h3> City blackout coincidentally at the same time as a major military operation</h3>
      <div class="attack-meta">
        <p><strong>Date:</strong> January 2026</p>
        <p><strong>Actors:</strong> US targeting Venezuela (unconfirmed)</p>
        <p><strong>Criteria Category:</strong> [To be added]</p>
      </div>
      <p>On January 3, 2026, the US military captured Venezuelan President Nicolás Maduro. Caracas, Venezuela's capital, also entered a blackout. For most residents, it only lasted a few minutes. However, the areas surrounding the military compound where Maduro was captured experienced power outages up to three days.</p>
      <p>Although the US has not claimed responsibility, President Trump made a reference to the cyberoperation: "It was dark, the lights of Caracas were largely turned off due to a certain expertise that we have, it was dark, and it was deadly."</p>
      <p>In March 2019, Venezuela experienced a power outage attributed to the Guri hydroelectric plant in southeastern Venezuela. President Maduro blamed the US for attacking the Guri dam, and the US denied responsibility. The international discourse has been inconclusive; researchers have agreed that it could be a targeted cyberattack or a result of Venezuela's lack of investment in its infrastructure.</p>
      <p>Previously, only Russia's hacker group Sandworm had caused blackouts through cyberattacks. While this is still under investigation, this cyberattack was a public display of precise and powerful cybercapabilities.</p>
      <button id="toggleSourcesBtn" class="view-sources-btn" onclick="toggleFootnotes()">View Sources</button>
      <div class="footnotes-wrapper" id="footnotesWrapper"><div class="footnotes"><ol>
        <li><a href="https://www.nytimes.com/2026/01/15/us/politics/cyberattack-venezuela-military.html" target="_blank">https://www.nytimes.com/2026/01/15/us/politics/cyberattack-venezuela-military.html</a></li>
        <li><a href="https://www.wired.com/story/security-news-this-week-us-hackers-reportedly-caused-a-blackout-in-venezuela/" target="_blank">https://www.wired.com/story/security-news-this-week-us-hackers-reportedly-caused-a-blackout-in-venezuela/</a></li>
        <li><a href="https://www.reuters.com/article/world/venezuela-blaming-us-for-six-day-blackout-orders-diplomats-to-leave-idUSKBN1QT25T/" target="_blank">https://www.reuters.com/article/world/venezuela-blaming-us-for-six-day-blackout-orders-diplomats-to-leave-idUSKBN1QT25T/</a></li>
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
