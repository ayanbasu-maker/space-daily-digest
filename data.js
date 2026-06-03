// Space Daily Digest — All data

const AGENCIES = [
  {
    name: "NASA",
    fullName: "National Aeronautics and Space Administration",
    country: "United States",
    flag: "🇺🇸",
    color: "#0b3d91",
    url: "https://www.nasa.gov",
    description: "Leading crewed lunar return with Artemis. Artemis II crew launched April 1, 2026."
  },
  {
    name: "SpaceX",
    fullName: "Space Exploration Technologies Corp.",
    country: "United States",
    flag: "🇺🇸",
    color: "#4a90d9",
    url: "https://www.spacex.com",
    description: "Starship V3 with Raptor 3 engines in final ground testing. Falcon 9 dominates commercial launch."
  },
  {
    name: "Blue Origin",
    fullName: "Blue Origin LLC",
    country: "United States",
    flag: "🇺🇸",
    color: "#1ab8c4",
    url: "https://www.blueorigin.com",
    description: "New Glenn operational and ramping to 12+ launches in 2026. BE-4 engines also power Vulcan Centaur."
  },
  {
    name: "ISRO",
    fullName: "Indian Space Research Organisation",
    country: "India",
    flag: "🇮🇳",
    color: "#ff6b00",
    url: "https://www.isro.gov.in",
    description: "PSLV-C62 launched Jan 2026. Gaganyaan uncrewed test imminent. Aditya-L1 solar observatory operational."
  },
  {
    name: "CNSA",
    fullName: "China National Space Administration",
    country: "China",
    flag: "🇨🇳",
    color: "#de2910",
    url: "https://www.cnsa.gov.cn/english/",
    description: "Tiangong station crews rotating. Xuntian space telescope launching Dec 2026. Long March 10 debuts in 2026."
  },
  {
    name: "ESA",
    fullName: "European Space Agency",
    country: "Europe (22 member states)",
    flag: "🇪🇺",
    color: "#d4a017",
    url: "https://www.esa.int",
    description: "Ariane 6 restoring European independent launch access. SMILE solar-wind mission launching April 9, 2026."
  },
  {
    name: "Roscosmos",
    fullName: "State Space Corporation Roscosmos",
    country: "Russia",
    flag: "🇷🇺",
    color: "#3a5fad",
    url: "https://www.roscosmos.ru",
    description: "Soyuz and Progress vehicles continue ISS crew rotation and logistics. Luna-28 sample-return mission in development."
  }
];

const DIGESTS = {

  "2026-06-03": {
    date: "June 3, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Hits 200th Landing on Pacific Drone Ship as Falcon 9 Booster B1088 Delivers 24 Starlinks to Orbit on Milestone Starlink 17-47 Mission From Vandenberg — Cape Canaveral Starlink 10-43 With 29 Satellites Scrubbed by Weather Hours Before IPO Roadshow Opens Thursday",
        body: "SpaceX achieved a landmark booster recovery milestone Wednesday morning as Falcon 9 first stage B1088 — on its 16th flight — successfully touched down on drone ship 'Of Course I Still Love You' in the Pacific Ocean following liftoff from Space Launch Complex 4 East at Vandenberg Space Force Base at 8:37 a.m. PDT, marking the 200th recovery on that vessel and the 618th booster landing in SpaceX's operational history. The Starlink 17-47 mission deployed 24 Starlink V2 Mini Optimized broadband satellites into low Earth orbit, extending a constellation that now numbers more than 7,000 active spacecraft and underpins the Starlink connectivity revenue that SpaceX is positioning as its primary growth story heading into next week's Nasdaq debut. Simultaneously, SpaceX was forced to scrub the Starlink 10-43 mission from Cape Canaveral Space Force Station — scheduled to loft 29 satellites during a window open from 4:02 to 8:02 a.m. EDT — after weather conditions proved insurmountable across multiple holds within the window, with a new attempt expected in the coming days. Both events occurred as the company's IPO roadshow prepares to open Thursday, June 4, with Goldman Sachs and Morgan Stanley leading institutional presentations ahead of a June 11 pricing and June 12 first-trade day at a valuation that has climbed above $1.8 trillion in pre-roadshow bookbuilding.",
        sourceUrl: "https://spaceflightnow.com/2026/06/03/live-coverage-spacex-to-launch-24-starlink-satellites-on-falcon-9-rocket-from-vandenberg-3/",
        timestamp: "2026-06-03T16:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Investigation",
        headline: "Blue Origin Reveals LC-36 Damage Far Less Severe Than Feared and Announces Pivot to Vertical Operations Concept Eliminating Need for New Transporter-Erector — Propellant Farm, Tanks, and Support Tower Assessed as Salvageable as Company Reaffirms Return-to-Flight Before Year's End",
        body: "Blue Origin released detailed findings from its ongoing LC-36 damage assessment Wednesday, revealing the destruction from the May 28 New Glenn NG-4 static fire anomaly is less catastrophic than initial satellite imagery suggested and outlining a recovery strategy that could significantly accelerate the company's return to flight. The transporter-erector — which partially collapsed into the flame trench in the explosion — will not be replaced; CEO Dave Limp confirmed the company is pivoting immediately to an alternative vertical operations concept that keeps New Glenn vertical throughout vehicle processing, integration, and launch preparation, an approach the company had already been developing independently of the accident. Critical infrastructure at LC-36 survived in good condition: the propellant farm and its liquid oxygen, liquid hydrogen, and cryogenic methane tanks are undamaged, the water tower is intact, and the main support tower sustained damage that engineers assess can be repaired in place without demolition and replacement. With the scope of recovery now materially clearer, Limp reiterated his pledge that New Glenn will fly again before the end of 2026, while NASA continues its own schedule-impact assessment for the Artemis Moon Base programme that relies on Blue Origin's New Glenn-launched Blue Moon uncrewed cargo lander.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/06/blue-lc-36-recovery-rtf-end-2026/",
        timestamp: "2026-06-03T14:00:00Z"
      },
      {
        agency: "NASA",
        category: "Crew",
        headline: "NASA Schedules June 9 Live Reveal of Artemis III Crew at Johnson Space Center — Announcement Follows Artemis II Splashdown as Agency Advances Restructured Mission Targeting Mid-2027 Low Earth Orbit Rendezvous Rehearsal With SpaceX and Blue Origin Lander Prototypes",
        body: "NASA confirmed it will publicly reveal the four-member crew of the Artemis III mission during a live event at 11 a.m. EDT on Tuesday, June 9, at Johnson Space Center in Houston, with the event streaming on NASA+ and the agency's YouTube channel and crew members available for in-person and virtual media interviews immediately following. The announcement arrives approximately seven weeks after the Artemis II Orion spacecraft and its crew splashed down in the Pacific Ocean on April 12 following a successful 10-day crewed lunar flyaround, as NASA advances the restructured Artemis III concept — now targeting mid-2027 and configured as a low Earth orbit rendezvous rehearsal designed to validate docking procedures with prototype lander platforms from SpaceX and Blue Origin rather than attempting a lunar surface landing on this flight. Crew selection has been closely watched since NASA has not disclosed whether any members of the Artemis II crew — commander Reid Wiseman, pilot Victor Glover, mission specialists Christina Koch and CSA astronaut Jeremy Hansen — will continue to Artemis III, or whether an entirely new crew has been designated following the programme's 2025 restructuring. The June 9 reveal is expected to generate substantial public interest as the first formal Artemis crew assignment announcement since the mission architecture was overhauled.",
        sourceUrl: "https://www.nasa.gov/2026-news-releases/",
        timestamp: "2026-06-03T13:00:00Z"
      },
      {
        agency: "ESA",
        category: "Crew",
        headline: "ESA Holds Press Q&A on Sophie Adenot's Epsilon Mission Three Months In — France's Second Woman Aboard ISS Shares Progress on 36 European Experiments as Nine-Month Stay Tracks Toward Longest ESA Spaceflight on Record",
        body: "The European Space Agency hosted a press Q&A session Wednesday at ESA headquarters in Paris, with colleagues and journalists receiving an update on astronaut Sophie Adenot's ongoing epsilon mission aboard the International Space Station, now approximately three months into her planned up-to-nine-month stay following her February 13 launch on SpaceX Crew-12 alongside NASA astronauts Jessica Meir and Jack Hathaway, and Roscosmos cosmonaut Andrei Fedyaev. Adenot — the second French woman to reach the ISS after Claudie Haigneré 25 years ago and the first French astronaut assigned to the station since Thomas Pesquet's Alpha mission in 2021 — is conducting 36 European science experiments including seven developed specifically by CNES, spanning cardiovascular adaptation in microgravity, plant biology, and the ChlorISS seed-growing experiment running simultaneously in more than 4,000 classrooms across Europe. If she completes the full mission duration, epsilon will become the longest spaceflight by a European astronaut in ISS history, producing a biomedical dataset that ESA expects to be directly applicable to planning for future long-duration deep-space exploration missions. Mission controllers at ESOC in Darmstadt confirmed all station systems supporting the epsilon science programme are performing nominally at the three-month mark.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/epsilon",
        timestamp: "2026-06-03T11:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Confirms PSLV-C63 Return-to-Flight Remains on Track for Late June With Technology Demonstrator Satellite-01 Payload — Success Prerequisite for Gaganyaan G1 Uncrewed Test Flight Targeting August–September Window",
        body: "ISRO confirmed this week that the PSLV-C63 mission carrying the Technology Demonstrator Satellite-01 (TDS-01) remains on schedule for a late-June 2026 launch, clearing a critical pre-launch readiness review that advances the agency's recovery from two consecutive third-stage failures affecting PSLV-C61 in May 2025 and PSLV-C62 in January 2026 and representing the most significant reliability crisis in PSLV's 31-year operational history. The return-to-flight mission proceeds under heightened technical and political scrutiny following corrective measures including enhanced ultrasonic inspection of PS3 solid motor grain bonding layers, revised propellant cure cycle acceptance criteria, and additional hydrostatic pressure testing of flight-qualified motor cases — all implemented after the failure review committee traced both anomalies to manufacturing defects in the PS3 propellant grain bonding layer at the Vikram Sarabhai Space Centre. A successful PSLV-C63 outcome is considered a prerequisite by ISRO leadership before proceeding with the Gaganyaan G1 uncrewed orbital test flight — targeting an August–September 2026 window — which will carry the Vyommitra semi-humanoid robot aboard the crew module to validate India's human-rated launch system ahead of crewed missions planned for 2027. The mission also clears the path for PSLV-N1, the first PSLV rocket assembled entirely by NewSpace India Limited under ISRO's commercial production expansion, marking a major milestone in the agency's strategy to scale launch cadence through private sector partnership.",
        sourceUrl: "https://www.indiatvnews.com/science/isro-to-relaunch-pslv-in-june-after-back-to-back-failures-sabotage-ruled-out-2026-02-03-1028693",
        timestamp: "2026-06-03T08:00:00Z"
      }
    ]
  },

  "2026-06-02": {
    date: "June 2, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Crew",
        headline: "NASA Confirms June 9 Live Event at Johnson Space Center to Reveal Four-Person Artemis III Crew and Provide Mission Progress Update — Announcement Comes Seven Weeks After Artemis II Splashdown as Agency Advances Toward Mid-2027 Low Earth Orbit Rendezvous Rehearsal With SpaceX and Blue Origin Lander Prototypes",
        body: "NASA confirmed Monday that it will publicly announce the four-member crew of the Artemis III mission during a live event at 11 a.m. EDT on June 9 at Johnson Space Center in Houston, with the event streaming on NASA+ and the agency's YouTube channel and crew members available for in-person and virtual interviews immediately following. The announcement arrives seven weeks after the Artemis II Orion spacecraft and its four-person crew splashed down safely in the Pacific Ocean on April 12 following a successful 10-day crewed lunar flyaround — the first humans to travel to the Moon's vicinity since Apollo 17 in 1972. Artemis III, targeted for mid-2027, will function as a complex low Earth orbit rendezvous rehearsal in which the crew will validate docking protocols with prototype lander platforms developed by SpaceX and Blue Origin rather than proceeding directly to a lunar surface landing as originally planned before the programme's 2025 restructuring. The crew selection announcement is expected to generate significant public interest as NASA has not yet disclosed whether any of the Artemis II crew — commander Reid Wiseman, pilot Victor Glover, mission specialists Christina Koch and CSA astronaut Jeremy Hansen — will be reassigned to Artemis III or whether an entirely new crew has been designated.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-announce-artemis-iii-crew-provide-mission-progress-update/",
        timestamp: "2026-06-02T14:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Investigation",
        headline: "NASA's Isaacman Says Blue Origin Pad Restoration Is Achievable Within 2028 Moon Base Schedule While CEO Limp Vows New Glenn Flies Again Before Year End — Competing Timelines Emerge as U.S. Space Force Reaffirms NRO Task Order-4 Worth Hundreds of Millions Awarded to Blue Origin Hours Before May 28 Explosion",
        body: "NASA Administrator Jared Isaacman offered a carefully calibrated public assessment of the Blue Origin LC-36 damage on Monday, telling CNBC it will 'take some serious time' to restore the launchpad but framing the situation around the Moon Base schedule: 'Those missions are not until 2028, which should be well within what is possible for pad recovery' — language designed to reassure Congress and international partners that the national lunar architecture timeline remains achievable despite the destruction of New Glenn NG-4 on May 28. Blue Origin CEO Dave Limp posted a direct counter-message on X Monday, writing 'We will fly again before the end of this year. Gradatim Ferociter,' asserting the company has regained physical access to LC-36 and developed a rebuild plan — a bolder claim than any timeline NASA's leadership has publicly endorsed and one that aerospace analysts have received with scepticism given that the transporter-erector, lightning protection towers, and launch mount infrastructure all sustained severe damage. The divergence between Isaacman's 2028-alignment framing and Limp's aggressive year-end pledge reflects competing institutional pressures: NASA must protect Artemis schedule credibility for Congress and partners including ESA and JAXA, while Blue Origin must reassure the employees, investors, and Amazon Kuiper program managers whose deployment timelines depend entirely on New Glenn's return. Separately, U.S. Space Force's National Security Space Launch program this week released details of the NRO Task Order-4 award — issued hours before the explosion on May 28 under the NSSL Phase 3 Lane 1 contract — calling for a single national reconnaissance mission launch from Cape Canaveral between Q4 2027 and Q1 2028, a timeline the Space Force said it continues to regard as achievable pending Blue Origin's pad restoration.",
        sourceUrl: "https://www.cnbc.com/2026/06/01/blue-origin-launchpad-may-not-be-restored-until-2028-nasas-isaacman.html",
        timestamp: "2026-06-02T11:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Business",
        headline: "SpaceX SPCX IPO Roadshow Opens in Two Days as Goldman Sachs-Led Syndicate Prepares Institutional Book With Valuation Floor Now Above $1.8 Trillion — Musk Retains 85.1% of Voting Power Under Prospectus While Retail Investors Receive Unprecedented 30% Share Allocation Across Robinhood, Fidelity, and Schwab Platforms",
        body: "SpaceX is two days from launching its historic investor roadshow on June 4, beginning a six-day institutional presentation campaign led by Goldman Sachs, Morgan Stanley, Bank of America, Citigroup, and JPMorgan Chase before pricing the offering on June 11 and listing on Nasdaq under ticker SPCX on June 12 — targeting a valuation that has climbed past $1.8 trillion in pre-roadshow bookbuilding conversations, which would surpass Saudi Aramco's 2019 offering as the largest IPO in capital markets history and raise up to $75 billion in primary and secondary proceeds. Founder Elon Musk will retain 85.1 percent of combined voting power under the terms of SpaceX's prospectus filed with the SEC, ensuring the company's strategic direction remains under his control regardless of public float, while an unusual retail allocation of approximately 30 percent of shares — triple the historical IPO norm — will be distributed across Robinhood, Fidelity, and Charles Schwab platforms in a structure analysts attribute to both Musk's populist shareholder messaging and the political climate around democratised finance. SpaceX enters roadshow week in the most commercially advantageous environment the company has ever faced: the Blue Origin New Glenn explosion eliminated the company's sole remaining orbital-launch competitor, Starlink's 10.3 million subscribers generated $11.39 billion in revenue in 2025 as the sole profit-making segment of an otherwise net-loss-making enterprise, and the FAA's ongoing Starship mishap investigation — while a headwind — has not curtailed Falcon 9's dominant commercial launch position. Analysts at multiple investment banks covering the IPO describe SpaceX as a 'conglomerate with exposure to AI, advertising, communications, and space manufacturing' rather than a traditional launch company, a framing central to justifying a valuation that prices in decades of Starlink and Starship revenue that does not yet exist.",
        sourceUrl: "https://www.cnbc.com/2026/05/20/spacex-ipo-live-updates.html",
        timestamp: "2026-06-02T09:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Global Amateur Radio Network Decodes Tianwen-2 Telemetry and Confirms Spacecraft Is Healthy on Final Approach to Kamo'oalewa — Citizen Science Effort Verifies Mid-June Orbit Insertion Remains on Track for China's First Asteroid Sample Return Mission as Science Community Awaits First Close-Up Views of Quasi-Satellite Suspected to Be a Lunar Fragment",
        body: "A distributed network of amateur radio operators and citizen scientists spanning Europe, Asia, and Australia has successfully decoded the continuous telemetry downlink broadcast by CNSA's Tianwen-2 spacecraft, publicly confirming in reverse-engineered data streams that the probe's bus systems, attitude control, and scientific instruments are all performing nominally as it closes in on near-Earth quasi-satellite 469219 Kamo'oalewa for a mid-June 2026 orbit insertion approximately 13 months after its May 2025 launch from Xichang. The community decoding effort — documented in technical detail by Hackaday — involved reverse-engineering Tianwen-2's telemetry framing conventions to extract spacecraft status data that CNSA has not published in real time, yielding readings consistent with nominal bus voltages, stable thermal control, and a trajectory matching the published mission profile; the decoded data has been independently cross-checked by multiple operators and corroborates CNSA's official status updates. Tianwen-2's target, Kamo'oalewa, is a 40-to-100-metre carbonaceous body whose reflectance spectrum so closely matches lunar silicate materials that leading researchers believe it may be a fragment ejected from the Moon by an ancient impact — a hypothesis that makes the upcoming sample return scientifically extraordinary, as the mission could simultaneously return the first asteroid samples and the first off-Moon lunar material ever retrieved. Following orbit insertion and sample collection targeted for July 2026, the spacecraft will dispatch its Earth-return capsule with over 100 grams of regolith before redirecting toward its second target, Comet 311P/PANSTARRS, for a rendezvous expected around 2034.",
        sourceUrl: "https://hackaday.com/2026/05/27/decoding-the-tianwen-2-sample-return-missions-telemetry-signal/",
        timestamp: "2026-06-02T07:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Targets June 2026 for PSLV-C63 Return-to-Flight After Two Consecutive Third-Stage Failures — Science Minister Singh Confirms Corrective Measures Complete as Failure Review Committee Traces Back-to-Back PS3 Anomalies to Propellant Grain Bonding Defect and Enhanced Inspection Protocols Now Implemented Across Vehicle Production Line",
        body: "Science and Technology Minister Jitendra Singh confirmed in a parliamentary committee briefing Monday that ISRO is targeting a June 2026 return-to-flight launch for the PSLV-C63 mission following two consecutive third-stage failures — PSLV-C61 in May 2025 and PSLV-C62 in January 2026 — both of which resulted in payloads being delivered to incorrect orbits after anomalous chamber pressure drops in the PS3 solid motor segment triggered flight computer performance disturbance flags approximately eight minutes after liftoff. ISRO's failure review committee has identified a manufacturing defect in the PS3 propellant grain bonding layer as the probable root cause of the C62 anomaly, with corrective measures including enhanced ultrasonic inspection protocols, revised propellant cure cycle acceptance criteria, and additional hydrostatic pressure testing of flight-qualified motor cases now fully implemented across the production line at the Vikram Sarabhai Space Centre in Thiruvananthapuram. The back-to-back failures represent the most significant reliability crisis in PSLV's 31-year operational history — the rocket had previously flown 56 consecutive successful missions between 1994 and 2025 — and have disrupted domestic Earth observation and commercial remote sensing payload schedules while raising questions about quality-control systems during ISRO's rapid production expansion phase. The PSLV-C63 mission, which will carry a Defence Research and Development Organisation Earth observation satellite, is being treated as a confidence-restoring flight under heightened technical and political scrutiny, with a successful outcome considered prerequisite for clearing the Gaganyaan G1 uncrewed orbital test campaign now targeting an August–September 2026 launch window.",
        sourceUrl: "https://www.deccanherald.com/science/space/after-2-failures-isro-to-attempt-pslv-launch-in-june-jitendra-singh-3883945",
        timestamp: "2026-06-02T06:00:00Z"
      }
    ]
  },

  "2026-06-01": {
    date: "June 1, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Crew",
        headline: "SpaceX Crew-11 Astronauts Cardman, Fincke, and JAXA's Yui Hold Public Event at NASA Headquarters Today Discussing 167-Day ISS Mission Cut Short by Fincke's In-Flight Medical Condition — Expedition 73/74 Science Highlights and Early Return Circumstances Examined as Crew Reintegrates Into Public Life",
        body: "NASA hosted a public event today at 11 a.m. EDT at the Webb Auditorium in the Mary W. Jackson Building at NASA Headquarters in Washington, D.C., featuring three members of the SpaceX Crew-11 crew: commander Zena Cardman, pilot Mike Fincke, and JAXA mission specialist Kimiya Yui, who returned to Earth approximately one month earlier than planned after Fincke developed a medical condition that could not be resolved aboard the station. The crew discussed their 167-day mission as part of ISS Expeditions 73 and 74, during which they conducted wide-ranging scientific experiments in microgravity spanning human health, materials science, and Earth observation designed to advance preparations for long-duration exploration missions. Fincke's medical situation — the nature of which NASA has not publicly disclosed beyond confirming it could not be managed in the space environment — required mission managers at Johnson Space Center to coordinate an expedited return, marking one of the few early crew rotations from the ISS driven by an in-flight health event. Today's public event at NASA HQ marked the crew's formal reintegration into outward-facing roles following the post-landing medical reconditioning period standard for astronauts returning from long-duration spaceflight.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-hosts-spacex-crew-11-astronauts-for-public-event-at-headquarters/",
        timestamp: "2026-06-01T15:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Business",
        headline: "SpaceX SPCX Roadshow Launches June 4 as $1.75 Trillion Nasdaq IPO Counts Down to June 12 Trading Debut — Company Enters Historic Public Market Week With Falcon 9 as World's Sole High-Cadence Orbital Vehicle and Starship Still Grounded Under FAA Mishap Review Following Flight 12 Booster Anomaly",
        body: "SpaceX enters the final countdown to its landmark IPO roadshow beginning June 4, with Goldman Sachs, Morgan Stanley, Bank of America, Citigroup, and JPMorgan Chase leading institutional presentations ahead of a planned June 11 pricing and June 12 first-trade day on the Nasdaq under ticker SPCX at a target valuation of approximately $1.75 trillion — a figure that would make it the largest IPO in U.S. market history. The company heads into roadshow week in a position of unparalleled commercial launch dominance: Blue Origin's New Glenn pad destruction at LC-36 leaves Falcon 9 as the world's only operational high-cadence orbital launch vehicle at a moment of record commercial demand for launch slots. Complicating the narrative, Starship remains grounded under FAA mandatory mishap review following the Flight 12 anomaly in which Super Heavy Booster 19's Raptor 3 engines failed to reignite properly during the boostback burn, sending the booster to a hard uncontrolled splashdown in the Gulf of America and halting a Starlink V3 deployment schedule investors regard as central to the company's long-term revenue thesis. SpaceX's S-1 disclosed 2025 revenue of $18.67 billion, of which $11.39 billion came from Starlink's 10.3 million subscribers — the company's sole profit-generating segment and the primary growth story management will present to institutional buyers across this week's roadshow.",
        sourceUrl: "https://www.tradingkey.com/analysis/stocks/us-stocks/261904604-spacex-ipo-spcx-date-set-for-june-12-175-trillion-valuation-tradingkey",
        timestamp: "2026-06-01T09:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Investigation",
        headline: "Industry Analysis Puts Blue Origin LC-36 Restoration at Six Months Minimum as Amazon Kuiper's July FCC Deadline Becomes Unachievable and SpaceX Gains Decisive Commercial Advantage — Pad Damage Survey Ongoing With No Confirmed Timeline for New Glenn Return to Flight",
        body: "A detailed aerospace industry analysis published today concludes that the May 28 destruction of New Glenn NG-4 and the associated blast damage to Launch Complex 36 will sideline Blue Origin from orbital launch operations for a minimum of six months, with more pessimistic engineering assessments projecting that full pad restoration — including rebuilding the transporter-erector, lightning protection towers, and launch mount infrastructure — could extend well into 2027. Amazon Project Kuiper's regulatory situation has simultaneously grown acute: the FCC required Amazon to deploy more than half of its planned 3,236-satellite LEO constellation by July 2026, a milestone the company was relying on New Glenn's superior payload capacity to achieve, and with that path now closed, any partial mitigation via Falcon 9 would require roughly double the number of launches to carry equivalent satellite mass. Blue Origin CEO Dave Limp confirmed the company's root-cause investigation is active and a rebuild plan exists but declined to offer any timeline, while engineers continue mapping the full extent of structural damage at Cape Canaveral Space Force Station. The incident deals a decisive competitive advantage to SpaceX's Falcon 9 — the world's only remaining high-cadence commercial launch vehicle — arriving just days before SpaceX's landmark Nasdaq IPO debut.",
        sourceUrl: "https://www.technology.org/2026/06/01/blue-origin-launch-pad-explosion-amazon-delay/",
        timestamp: "2026-06-01T12:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China's Tianwen-2 Enters Final Approach Phase for Kamo'oalewa Orbit Insertion Targeted Mid-June — Spacecraft Healthy After 13-Month Interplanetary Cruise as First Close-Up Images of the Mysterious Quasi-Satellite Expected Shortly After Rendezvous",
        body: "CNSA's Tianwen-2 deep-space probe has entered its final approach phase toward near-Earth quasi-satellite 469219 Kamo'oalewa, with mission controllers at the Beijing Aerospace Command and Control Centre confirming all eight science instruments and spacecraft systems are performing nominally as the probe closes in for orbit insertion targeted in mid-June 2026, approximately 13 months after its May 28, 2025 launch aboard a Long March-3B/E from Xichang Satellite Launch Center. Kamo'oalewa — a 40-to-100-metre carbonaceous body whose unusual retrograde quasi-satellite orbit has led researchers to theorize it may be a fragment ejected from the lunar surface by an ancient impact — will be observed in unprecedented close-up detail for the first time following rendezvous, with the mission's science teams anticipating the first resolved surface images within days of arrival. Sample collection is planned for July 2026 following the orbit insertion and approach phase, with the spacecraft ultimately designed to return over 100 grams of asteroid regolith to Earth in the late 2020s. After releasing its Earth-return sample capsule, Tianwen-2 will redirect toward its second target, Comet 311P/PANSTARRS, for a rendezvous expected around 2034 — making this the most ambitious multi-target deep-space mission CNSA has ever flown.",
        sourceUrl: "https://newspaceeconomy.ca/2026/04/18/tianwen-2-reaches-kamooalewa-chinas-asteroid-sample-return-mission-in-focus/",
        timestamp: "2026-06-01T07:00:00Z"
      },
      {
        agency: "ESA",
        category: "Policy",
        headline: "ESA June Council Faces Critical Decision on Fate of Billion-Dollar Gateway Hardware After NASA's March Cancellation — Director General Aschbacher to Present Path Forward for I-Hab, Lunar View, and Lunar Link Modules as European Space Industry Awaits Clarity on Contracts Worth Several Billion Euros",
        body: "ESA's governing council is meeting this month to determine what becomes of Europe's substantial Gateway hardware investments following NASA's surprise March 24 cancellation of the Lunar Gateway cislunar station, with Director General Josef Aschbacher set to present a formal path forward for the I-Hab habitation module, the Lunar View refueling and docking module, and the Lunar Link communications system — elements contracted to Thales Alenia Space Italy and Thales Alenia Space France worth several billion euros in combined development and production costs. NASA informed ESA, JAXA, and CSA of the Gateway cancellation alongside the general public, a move that deeply strained relations with international partners who had invested years of hardware development and political capital in the programme and were given no advance consultation before the announcement. ESA Director General Aschbacher subsequently stated that 'Europe has become too exposed to decisions beyond its control,' and has been consulting with member states to assess whether completed and in-progress Gateway hardware can be repurposed for an ESA-led lunar initiative, sold or transferred to other programmes, or whether European industry partners will seek compensation for cancelled contracts. The June council decision is among the most consequential ESA has faced in a decade, directly shaping whether Europe pivots toward greater spaceflight independence or re-engages with NASA under new terms for the Moon Base architecture that replaced Gateway.",
        sourceUrl: "https://spacenews.com/esa-to-decide-by-june-on-europes-gateway-contributions/",
        timestamp: "2026-06-01T10:00:00Z"
      }
    ]
  },

  "2026-05-31": {
    date: "May 31, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Business",
        headline: "SpaceX Confirms June 4 Roadshow Kickoff for Historic SPCX Nasdaq IPO as Institutional Valuation Floor Rises to $1.8 Trillion — Goldman Sachs-Led Syndicate Targets June 11 Pricing and June 12 Trading Debut at Up to $75 Billion Capital Raise That Would Surpass Saudi Aramco as History's Largest Public Offering",
        body: "SpaceX confirmed Sunday that its IPO roadshow will formally begin June 4 with a series of institutional investor presentations led by Goldman Sachs, Morgan Stanley, Bank of America, Citigroup, and JPMorgan Chase, with pricing set for June 11 and shares expected to begin trading on Nasdaq under ticker SPCX on June 12 — marking the culmination of a process that began with the company's S-1 filing in early May. New bookbuilding data from late May indicates that institutional demand has pushed the implied valuation floor to approximately $1.8 trillion, with the deal structured to raise roughly $75 billion in primary and secondary proceeds and retail investors allocated approximately 30 percent of the offering across Robinhood, Fidelity, and Charles Schwab platforms. SpaceX's S-1 disclosed 2025 revenue of $18.67 billion driven primarily by Starlink's 10.3 million active subscribers, who generated $11.39 billion in connectivity revenue and $1.19 billion in operating income — the company's sole profitable segment — while total operations remained net-loss-making at approximately $4.9 billion, and the company disclosed more than $15 billion spent on Starship development to date. The roadshow timing coincides with a moment of unusual fragility in the commercial launch sector: Starship remains grounded under FAA investigation following the Booster 19 relight failure on Flight 12, and Blue Origin's New Glenn pad at LC-36 is destroyed, leaving SpaceX's Falcon 9 as the world's sole operational high-cadence orbital launch vehicle just days before the company asks public investors to price the entirety of its future.",
        sourceUrl: "https://en.cryptonomist.ch/2026/05/29/spacex-ipo-valuation-1-8-trillion/",
        timestamp: "2026-05-31T14:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Investigation",
        headline: "Blue Origin CEO Dave Limp Confirms Engineering Teams Have Regained Access to LC-36 Wreckage and Are Actively Investigating New Glenn Hotfire Anomaly — Company Says Rebuild Plan Is in Place But Offers No Timeline as FAA Confirms Pad Explosion Falls Outside Launch License Scope and Internal Inquiry Proceeds Without Federal Oversight",
        body: "Blue Origin CEO Dave Limp confirmed in a Sunday statement that the company's engineering teams have regained physical access to the ruins of Launch Complex 36 at Cape Canaveral Space Force Station and are now actively conducting a root-cause investigation into the May 28 hotfire anomaly that destroyed the New Glenn NG-4 rocket, obliterated the transporter-erector, leveled at least one lightning protection tower, and rendered the company's sole orbital launch pad non-operational with no confirmed restoration date. Limp stated that Blue Origin has 'a good rebuild plan in place' but declined to offer any restoration timeline, while engineers focus on determining why the BE-4 engine ignition sequence during what was intended as a qualification static fire instead produced the catastrophic fireball that consumed the methane-fueled 321-foot vehicle. The Federal Aviation Administration confirmed that because the event occurred during a ground test — not during a licensed launch activity — it falls outside FAA jurisdiction under 14 CFR Part 450, meaning there will be no independent federal investigation as occurred after Starship Flight 12's Booster 19 loss, and Blue Origin's internal inquiry proceeds with the company as its own lead investigator, coordinating only with Space Launch Delta 45's range safety office. Aerospace analysts noted that even if Blue Origin identifies the root cause within weeks, full reconstruction of LC-36 — a facility the company originally built for more than $1 billion after acquiring the pad from the U.S. Air Force in 2015 — is likely to take many months, effectively freezing the company's 2026 manifest including Amazon Kuiper broadband deployments and the NASA Moon Base I contract pending a scope-of-damage engineering survey still underway.",
        sourceUrl: "https://www.usnews.com/news/top-news/articles/2026-05-30/blue-origin-faces-months-of-delays-after-rocket-explosion-damages-launch-pad",
        timestamp: "2026-05-31T10:00:00Z"
      },
      {
        agency: "ESA",
        category: "Science",
        headline: "ESA-CAS SMILE Solar-Wind Mission Enters Healthy Cruise Phase Twelve Days After Vega-C VV29 Launch — All Four Science Instruments Reporting Nominal Telemetry as Spacecraft Climbs Toward Highly Elliptical Operational Orbit With Science Data Collection Targeted for September 2026",
        body: "ESA confirmed that the joint ESA–Chinese Academy of Sciences SMILE satellite — the Solar Wind Magnetosphere Ionosphere Link Explorer — is healthy and performing nominally 12 days after its May 19 launch aboard Vega-C flight VV29 from Europe's Spaceport in Kourou, French Guiana, with all four science instruments powered on and responding to ground commands as the spacecraft climbs toward its highly elliptical operational orbit reaching approximately 120,000 kilometres above Earth at apogee. SMILE carries four instruments: the Soft X-ray Imager, which will produce the first X-ray images of Earth's magnetopause and bow shock where the solar wind meets the geosphere; the Ultraviolet Imager designed to monitor the northern lights continuously for up to 45 hours per orbit; the Light Ion Analyser; and the Flux Gate Magnetometer — together forming a comprehensive observatory to reveal how Earth's magnetic environment responds to solar particle streams and radiation. The mission had been planned for early spring 2026 but suffered a delay after a technical issue was discovered in a subsystem component production line following launcher integration; all parties approved a revised May 19 launch date that proceeded nominally on Vega-C's return-to-flight mission VV29. ESA mission controllers at ESOC in Darmstadt expect the approximately one-month cruise phase to conclude in late June, after which instrument commissioning and calibration campaigns will precede the formal start of science operations targeted for September 2026.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_launch_highlights",
        timestamp: "2026-05-31T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Crew",
        headline: "Shenzhou-23 Begins First Full Day as Tiangong's Sole Resident Crew Following Shenzhou-22 Departure — Commander Zhu Yangzhu Assumes Full Station Command as Year-Long Mission Protocol Activates and Payload Specialist Lai Ka-ying Makes History as First Hong Kong Taikonaut to Serve Aboard China's National Space Station",
        body: "The three-person Shenzhou-23 crew — commander Zhu Yangzhu, pilot Zhang Zhiyuan, and payload specialist Lai Ka-ying — began their first full day as Tiangong's sole resident crew on Sunday, two days after the Shenzhou-22 crew's successful May 29 return to Earth, as China's most ambitious long-duration spaceflight programme transitioned from handover operations to independent scientific operations under Zhu's full station command. Lai Ka-ying, a former Hong Kong officer who became the first person from the city to serve aboard Tiangong following her selection through China's third astronaut cohort in 2022, is conducting a full schedule of science experiment activations across the Wentian and Mengtian laboratory modules that the Shenzhou-22 crew maintained during their six-month stay. The designated year-long crew member — whose protocol activated Sunday — has begun the comprehensive physiological monitoring programme designed to track cardiovascular, musculoskeletal, and neurovestibular adaptation over 12 continuous months in microgravity, generating China's most extensive human spaceflight health dataset and providing critical biomedical data for the country's planned crewed lunar surface missions in the early 2030s. China's state broadcaster CCTV aired a Sunday segment documenting the crew's transition to independent operations and highlighting a new menu of over 120 food items developed by nutrition specialists at the China Aerospace Science and Technology Corporation to maintain caloric intake, micronutrient balance, and crew morale across the 365-day stay.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/05/shenzhou-23-launch/",
        timestamp: "2026-05-31T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission",
        headline: "ISRO's Gaganyaan G1 Campaign Reaches Key Integration Milestone as Vyommitra Joins Crew Module at VSSC and Service Module Assembly Advances at URSC — Human-Rated LVM3 Stack Integration Targeted for Late June as August–September Launch Window Solidifies After National Review Committee Clearance",
        body: "ISRO's Gaganyaan G1 uncrewed orbital test mission is advancing toward a firm August–September 2026 launch window as the two primary spacecraft elements move through parallel integration campaigns at separate ISRO centres, with the crew module assembly at the Vikram Sarabhai Space Centre in Thiruvananthapuram now incorporating the Vyommitra half-humanoid robot that will occupy the crew seat and monitor life-support systems in place of a human astronaut. Vyommitra's integration into the crew module represents a major milestone in the 90-day campaign the National Review Committee greenlit in late May, as the robot's sensor suite and telemetry systems are being calibrated against the spacecraft's upgraded Environmental Control and Life Support System to confirm the system will accurately simulate the biomedical and atmospheric management demands of a crewed flight profile. The service module, undergoing parallel integration at the U R Rao Satellite Centre in Bengaluru, carries the propulsion system, power generation arrays, and communications subsystems that must operate flawlessly throughout the three-day orbital mission at a 400-kilometre circular orbit designed to replicate the profile of the planned crewed H1 mission in 2027. ISRO Chairman V. Narayanan confirmed that both modules are on track for transport to Satish Dhawan Space Centre on Sriharikota Island by mid-July, with the human-rated LVM3 vehicle slated to be fully stacked in the vehicle assembly building by late June — keeping India's most ambitious mission to date firmly within the authorised launch window.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-clears-gaganyaan-g-1-mission-for.html",
        timestamp: "2026-05-31T07:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA JPL Tracks Two Airplane-Sized Near-Earth Asteroids on Safe Close Approaches as Earth Experiences Rare Blue Moon Micromoon Combination — 2026 KA3 and 2026 KJ2 Pass Within Millions of Miles While Tonight's Second Full Moon of May Reaches Peak Illumination at 4:45 a.m. EDT in an Alignment That Will Not Recur Until 2037",
        body: "NASA's Center for Near Earth Object Studies at Jet Propulsion Laboratory confirmed that two near-Earth asteroids — 2026 KA3 and 2026 KJ2, each measuring roughly 77 to 82 feet across — are making their closest approaches to Earth today, passing at distances of approximately 2.3 million and 4.2 million miles respectively, both well outside any hazard threshold and presenting no risk to Earth, with trajectories confirmed as Earth-non-intersecting on all dynamically significant timescales through the end of the century. The dual close approach coincides with a rare astronomical event: tonight's full moon is a Blue Moon — the second full moon within the calendar month of May, following the Flower Moon that illuminated the sky on May 1 — which reached peak illumination at 4:45 a.m. EDT Sunday at a moment when the Moon was also positioned near apogee, the farthest point in its elliptical orbit, making tonight's Blue Moon simultaneously a Micromoon appearing approximately six to seven percent smaller and dimmer than the average full moon. NASA skywatching guidance notes that the micromoon-Blue Moon combination — in which the second full moon in a calendar month coincides with apogee — is an uncommon alignment that will not recur until February 2037, offering observers a visible contrast to the supermoons that draw public attention when the Moon is near perigee. Both asteroids were tracked using observations from the Catalina Sky Survey at the University of Arizona and follow-up measurements from JPL's planetary radar, with discovery and characterisation timelines consistent with the expanded detection capabilities funded by the 2022 Planetary Defense Coordination Office budget increase.",
        sourceUrl: "https://www.jpl.nasa.gov/asteroid-watch/next-five-approaches/",
        timestamp: "2026-05-31T16:00:00Z"
      }
    ]
  },

  "2026-05-30": {
    date: "May 30, 2026",
    stories: [
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "Blue Origin Checks Explosion Damage at Cape Canaveral LC-36 and Opens Formal Anomaly Investigation as Bezos Vows to Rebuild — Aerial Surveys Reveal Heaps of Crumpled Steel, Toppled Lightning Tower, and Destroyed Transporter-Erector as Amazon Kuiper Launch Delayed Indefinitely and NASA Artemis Timeline Now Officially Under Review",
        body: "Blue Origin engineers and company leadership conducted initial damage assessments Friday at Launch Complex 36 in Cape Canaveral, one day after the catastrophic destruction of the New Glenn NG-4 rocket during a static fire test, with aerial imagery revealing extensive devastation including crumpled structural steel, at least one toppled lightning protection tower, and severe damage to the transporter-erector system that leaves the company's sole New Glenn launch pad with no confirmed restoration timeline. Jeff Bezos, who has personally invested roughly $28 billion in Blue Origin over 25 years, addressed employees and the public pledging that the company would rebuild and return to flight — stating he is 'confident we will find it, fix it, and fly again' — while confirming a formal anomaly investigation is now open to determine why the BE-4 engine ignition sequence during Thursday's static fire test produced the catastrophic fireball that destroyed the 321-foot rocket. Amazon confirmed the Project Kuiper Leo broadband satellite deployment — the intended NG-4 payload — has been delayed indefinitely pending restoration of New Glenn's launch capability, raising questions about Amazon's FCC-mandated Kuiper deployment deadlines and potentially opening the door to competitive bids from Falcon 9 or Ariane 6 for near-term Kuiper launches. NASA has simultaneously opened an assessment of schedule impacts to Artemis and the Moon Base program, as Blue Origin's Blue Moon Mark 1 Endurance uncrewed cargo lander — contracted to deliver the first lunar terrain vehicles to Shackleton Connecting Ridge in a fall 2026 mission — depends entirely on a functional New Glenn launch pad that may require many months to rebuild.",
        sourceUrl: "https://www.1news.co.nz/2026/05/30/bezos-blue-origin-launches-investigation-into-rocket-explosion/",
        timestamp: "2026-05-30T12:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Falcon 9 Deploys 24 Starlink V2 Mini Satellites From Vandenberg Space Force Base as Veteran Booster B1082 Scores Record 22nd Career Landing on Drone Ship 'Of Course I Still Love You' in the Pacific — Mission Underscores SpaceX's Uninterrupted Operational Cadence as Competitor Blue Origin Surveys LC-36 Wreckage Across the Country",
        body: "A SpaceX Falcon 9 rocket lifted off from Space Launch Complex 4 East at Vandenberg Space Force Base, California, during the morning window on Saturday, deploying 24 Starlink V2 Mini Optimized satellites to a polar low Earth orbit as SpaceX sustained its relentless constellation deployment schedule even as the aerospace world's attention remained fixed on the ruins of Blue Origin's New Glenn at Cape Canaveral. First stage booster B1082, flying for a record 22nd time after a career spanning national security and commercial Starlink deliveries, completed a propulsive landing on the drone ship 'Of Course I Still Love You' positioned in the Pacific Ocean approximately 8.5 minutes after liftoff, adding another successful recovery to SpaceX's growing total of more than 617 booster landings to date. The mission adds 24 V2 Mini Optimized satellites to a Starlink constellation now exceeding 10,000 active spacecraft across multiple orbital shells, continuing the rapid throughput that underlies both Starlink's growing subscriber base and SpaceX's narrative heading into its anticipated June 12 Nasdaq IPO under the ticker SPCX. Residents along California's central coast were offered a pre-dawn launch viewing opportunity, with the potential for a double sonic boom during the booster's supersonic return to the drone ship depending on prevailing atmospheric conditions.",
        sourceUrl: "https://keyt.com/vandenberg-space-base/2026/05/29/falcon-9-launch-of-starlink-satellites-from-vandenberg-sfb-scheduled-for-saturday-morning-2/",
        timestamp: "2026-05-30T14:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China's Tianwen-2 Marks Year-One Cruise Milestone En Route to Near-Earth Quasi-Satellite Kamo'oalewa With All Eight Science Instruments Nominal — Mission Controllers Confirm Spacecraft Health Ahead of July 2026 Asteroid Rendezvous Before Decade-Long Journey to Comet 311P/PANSTARRS Begins",
        body: "China's Tianwen-2 deep-space probe, launched May 28, 2025 aboard a Long March-3B/E rocket from Xichang Satellite Launch Center, is approaching a significant trajectory milestone approximately one year into its interplanetary cruise, with CNSA mission controllers at the Beijing Aerospace Command and Control Centre confirming all spacecraft systems and all eight onboard science instruments are operating nominally as the probe closes in on its primary target: near-Earth quasi-satellite 469219 Kamo'oalewa, with arrival on track for July 2026. Kamo'oalewa — a carbonaceous asteroid between 40 and 100 metres wide whose unusual retrograde quasi-satellite orbit has led researchers to theorize it may be a fragment ejected from the lunar surface by an ancient impact — will be the focus of years of proximity operations, remote sensing, and sample collection designed to return more than 100 grams of asteroid regolith to Earth in a capsule re-entry scheduled for the late 2020s. After releasing its Earth-return sample capsule during a flyby around 2029, Tianwen-2 will redirect itself toward a second target: Comet 311P/PANSTARRS, an active main-belt comet whose nucleus the spacecraft is expected to reach around 2034 for characterization of cometary activity and composition. The mission — the most ambitious planetary science programme CNSA has ever flown — is operated jointly by the National Space Science Center in Beijing and the Deep Space Exploration Laboratory in Hefei.",
        sourceUrl: "https://www.spacedaily.com/reports/Chinas_Tianwen_2_probe_marks_halfway_milestone_en_route_to_asteroid_target_999.html",
        timestamp: "2026-05-30T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Science",
        headline: "ESA-JAXA EarthCARE Earth Explorer Marks Two-Year Launch Anniversary With Mission Life Extended Through 2034 Despite Ongoing Cloud Profiling Radar Anomaly — Lidar, Radiometer, and Imager Continue Science Operations as Engineers Pursue CPR Recovery and Fuel Budget Confirms Decade-Plus Operational Lifespan",
        body: "ESA and JAXA's EarthCARE satellite — the most complex Earth Explorer mission ever built and the largest joint ESA-JAXA spacecraft — marked the two-year anniversary of its May 28, 2024 launch this week, with mission engineers at ESA's European Space Operations Centre in Darmstadt confirming a fuel budget analysis projects an operational lifespan extending to at least 2034, more than double the satellite's original three-year design life and a significant return on the mission's fourteen-year development programme. The anniversary comes as the mission manages an active anomaly: the Cloud Profiling Radar — EarthCARE's 94-GHz Doppler radar and the world's first space-borne Doppler cloud profiler — has been unavailable since May 2, 2026, with ESA's mission team characterizing the fault and developing recovery options while the satellite's three other instruments continue generating operational science data. EarthCARE's three operating instruments — the ATLID Atmospheric Lidar, MSI Multi-Spectral Imager, and BBR Broadband Radiometer — continue providing simultaneous measurements of cloud and aerosol vertical structure alongside Earth's reflected and emitted radiation, central to the mission's objective of reducing the largest remaining uncertainty in climate model projections: the net radiative forcing of clouds and aerosols. ESA Director General Josef Aschbacher described the confirmed extended lifespan as enabling a uniquely long cloud-aerosol dataset that climate scientists regard as irreplaceable for quantifying decadal-scale changes in Earth's energy budget.",
        sourceUrl: "https://earth.esa.int/eogateway/news/earthcare-lifetime-update-mission-targets-2034-and-beyond",
        timestamp: "2026-05-30T09:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Technology",
        headline: "ISRO Unveils Gaganyaan Life-Support System and Orbital Maneuvering Upgrades Cleared for G1 Integration — Enhanced CO2 Scrubbing, Redundant Cabin Sensors, and Improved RCS Thrusters Validated as 90-Day G1 Launch Campaign Advances Toward August–September Liftoff With Vyommitra Aboard LVM3",
        body: "ISRO's Human Space Flight Centre disclosed a suite of advanced life-support and orbital maneuvering system upgrades incorporated into the Gaganyaan crew module ahead of the G1 uncrewed orbital test flight, with the enhancements significantly improving the system's atmospheric management, carbon dioxide scrubbing, humidity control, and pressure regulation capabilities relative to the baseline design validated during ISRO's 2023 Pad Abort Test. The upgraded closed-loop Environmental Control and Life Support System — which will monitor cabin conditions during G1 with the Vyommitra half-humanoid robot simulating astronaut presence — now incorporates redundant sensor arrays, improved molecular sieve beds for CO2 removal, and an enhanced water recovery subsystem, while upgraded Reaction Control System thrusters validated at the ISRO Propulsion Complex in Mahendragiri deliver more precise attitude control across the full crew module maneuvering envelope. ISRO Chairman V. Narayanan described the technology upgrades as a direct readiness enhancement for the multi-day orbital profile of the crewed H1 mission in 2027, noting that G1's life-support performance data will be the primary certification gate for Gaganyaan's human-rated systems before any Indian Air Force astronaut-candidate boards the vehicle. The G1 campaign, formally cleared by the National Review Committee in late May, remains on track for an August–September 2026 window at Satish Dhawan Space Centre using the human-rated LVM3 heavy-lift vehicle.",
        sourceUrl: "https://technosports.co.in/isro-unveils-new-space-tech/",
        timestamp: "2026-05-30T07:00:00Z"
      },
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Publishes Detailed Moon Base Rover and Lander Mission Cadence Update — Moon Base I With Blue Origin Endurance Lander Now Under Schedule Review After LC-36 Explosion, Moon Base II Griffin-FLIP Rover Delivery Becomes Priority Mission, and Moon Base III Lunar Vertex Science Anchor Advances as Agency Weighs Contingency Launch Options",
        body: "NASA released a comprehensive mission progress update detailing all three planned 2026 robotic lunar surface deliveries under the Moon Base architecture, while acknowledging that Thursday's catastrophic destruction of New Glenn NG-4 at Launch Complex 36 has placed the Moon Base I schedule under formal review — as Blue Origin's Blue Moon Mark 1 Endurance lander depends entirely on a New Glenn vehicle whose sole launch pad is now severely damaged with no confirmed restoration timeline. Moon Base II — which uses Astrobotic's Griffin lander to deliver more than 1,100 pounds of cargo including Astrolab's FLIP pressurized rover, the first pressurized lunar mobility vehicle planned to reach the Moon since Apollo — now emerges as the highest-priority and most immediately achievable 2026 robotic lunar delivery mission, carrying no dependency on Blue Origin's compromised infrastructure. Moon Base III will carry the Lunar Vertex payload selected through NASA's PRISM initiative, targeting a lunar swirl region to characterize the mysterious crustal magnetic anomalies that produce localized solar-wind shielding at select sites across the nearside — data that directly informs astronaut surface operations planning for the permanent south-pole habitat. NASA stated the agency will publish an updated Moon Base I schedule once the full scope of LC-36 damage and alternative launch options — potentially including international commercial vehicles — have been formally assessed, with Administrator Isaacman directing program teams to develop contingency delivery architectures that do not depend on any single launch vehicle.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-provides-update-on-moon-base-rovers-landers-missions/",
        timestamp: "2026-05-30T17:00:00Z"
      }
    ]
  },

  "2026-05-29": {
    date: "May 29, 2026",
    stories: [
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-4 Destroyed in Catastrophic Launchpad Explosion at Cape Canaveral During Static Fire Test — Fireball Engulfs 320-Foot Vehicle as First Stage Collapses, Transporter-Erector and Lightning Towers at LC-36 Obliterated; No Personnel Injuries as Amazon Leo Satellite Launch Delayed Indefinitely",
        body: "Blue Origin's New Glenn NG-4 rocket was catastrophically destroyed late Thursday evening when the vehicle exploded during a static fire test at Launch Complex 36 at Cape Canaveral Space Force Station, with the fireball lighting up the Florida coast around 9 p.m. EDT as the 188-foot first stage caught fire during a BE-4 engine ignition sequence and then collapsed, causing the 86-foot upper stage to tilt and the fully fueled vehicle to detonate in a rapidly expanding cloud of burning methane and liquid oxygen. The blast obliterated the transporter-erector system — the only such structure at Blue Origin's sole New Glenn launch pad — along with at least one lightning protection tower, leaving LC-36 severely damaged and raising immediate questions about how long the company's single-pad infrastructure will require to be rebuilt before any future New Glenn mission is possible. The rocket was being readied for a planned June 4 commercial launch to deploy the first operational batch of Amazon's Project Kuiper 'Leo' broadband satellites, a mission already carrying added urgency after NG-3's April upper-stage anomaly had delayed the Kuiper deployment schedule by more than a month and put Amazon's FCC deployment milestone under pressure. Blue Origin founder Jeff Bezos confirmed all personnel were safe in a brief statement — 'All personnel are accounted for and safe. It's too early to know the root cause but we're already working to find it' — while company leadership immediately launched an anomaly investigation as industry observers assessed the explosion as the most damaging setback in Blue Origin's history and potentially the most consequential pad accident in the American commercial launch industry in decades.",
        sourceUrl: "https://spaceflightnow.com/2026/05/29/blue-origins-new-glenn-rocket-explodes-during-prelaunch-testing-at-cape-canaveral/",
        timestamp: "2026-05-29T01:05:00Z"
      },
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Issues Artemis and Moon Base Impact Statement Following Blue Origin New Glenn Destruction — Agency Confirms Immediate Review of Blue Moon HLS Timeline and Artemis III Docking Mission Schedule as Administrator Isaacman Signals Contingency Planning With SpaceX Has Already Begun",
        body: "NASA issued a formal statement hours after the Blue Origin New Glenn NG-4 explosion at Cape Canaveral, confirming that the agency is conducting an immediate assessment of schedule impacts to both the Artemis program and the Moon Base initiative, noting that Blue Origin holds the Human Landing System contract for the Blue Moon Mark 2 crewed lander that is slated to participate in the Artemis III low-Earth orbit docking demonstration targeting late 2027 and to carry astronauts to the lunar surface in Artemis IV. Administrator Jared Isaacman said the agency 'will provide information on any impacts to the Artemis and Moon Base programs as it becomes available,' and separately confirmed in a series of meetings with Artemis program executives at Johnson Space Center that contingency planning with SpaceX — whose Starship HLS would be the sole crewed lunar lander option if Blue Moon's schedule slips — was already underway as a precautionary measure. The destruction of Blue Origin's only New Glenn launch pad is a critical concern beyond the lander hardware itself: Blue Origin's Blue Moon Mark 1 Endurance uncrewed cargo lander — set to deliver the first lunar terrain vehicles to Shackleton Connecting Ridge in the fall 2026 Moon Base I mission — also depends on New Glenn for launch, and that mission is now considered highly unlikely to proceed on its originally planned schedule. Analysts at the Secure World Foundation and Space Policy Institute described the situation as a potential multi-year setback for the Moon Base architecture that Isaacman unveiled just three days ago, noting that the simultaneous grounding of Starship following Flight 12 and now the loss of New Glenn's pad creates an unusually acute period of vulnerability for NASA's near-term lunar delivery plans.",
        sourceUrl: "https://www.cnbc.com/2026/05/29/blue-origin-new-glenn-rocket-explosion-florida-test-nasa-artemis.html",
        timestamp: "2026-05-29T10:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Falcon 9 Deploys 29 Starlink Satellites on Starlink 10-53 as Veteran Booster B1085 Scores 16th Career Flight With Flawless Landing on Drone Ship 'A Shortfall of Gravitas' — Mission Marks SpaceX's 616th Successful Booster Recovery as Constellation Growth Continues Hours After Blue Origin's Catastrophic Launchpad Loss",
        body: "A SpaceX Falcon 9 launched 29 Starlink V2 Mini Optimized satellites to low Earth orbit from Space Launch Complex 40 at Cape Canaveral Space Force Station on the Starlink 10-53 mission, maintaining the company's relentless constellation deployment cadence on the same day that rival Blue Origin suffered the catastrophic destruction of its New Glenn NG-4 rocket just miles away at LC-36. First stage booster B1085, flying for a record-equalling 16th time following a career that included NASA's Crew-9 crewed Dragon mission, the Fram2 polar orbit human spaceflight mission, and Firefly's Blue Ghost lunar lander delivery, executed a textbook entry burn and propulsive landing on the drone ship 'A Shortfall of Gravitas' in the Atlantic Ocean approximately 8.5 minutes after liftoff — the 152nd recovery aboard that vessel and SpaceX's 616th total booster landing to date. The Starlink 10-53 satellites join a constellation now exceeding 10,000 active spacecraft in multiple orbital shells, with V2 Mini Optimized units' per-satellite throughput continuing to raise the network's total capacity in advance of the planned transition to Starship-delivered Starlink V3 payloads beginning in 2027. The successful mission further cements SpaceX's position as the world's sole high-cadence launch provider operating without interruption, a distinction made more pronounced by Starship's ongoing FAA-mandated stand-down and Blue Origin's now-uncertain operational timeline.",
        sourceUrl: "https://spaceflightnow.com/2026/05/29/live-coverage-spacex-to-launch-29-starlink-satellites-on-falcon-9-rocket-from-cape-canaveral-14/",
        timestamp: "2026-05-29T15:30:00Z"
      },
      {
        agency: "CNSA",
        category: "Crew",
        headline: "Shenzhou-22 Crew Undocks From Tiangong and Returns to Inner Mongolia After Six-Month Mission — Trio's Departure Leaves Shenzhou-23 in Full Command as China's Historic Year-Long Spaceflight Officially Begins Under Taikonaut Zhu Yangzhu's Leadership",
        body: "The three-person Shenzhou-22 crew undocked from the Tianhe core module's rear axial port and began the return-to-Earth sequence after completing six months of continuous service aboard Tiangong, with the crew module performing the de-orbit burn and re-entry before executing a parachute descent and soft landing in the Dongfeng landing zone in China's Inner Mongolia Autonomous Region, covered live by CCTV and China Media Group. The departure marks the formal transfer of full station command to Shenzhou-23 commander Zhu Yangzhu, pilot Zhang Zhiyuan, and payload specialist Lai Ka-ying — Hong Kong's historic first astronaut — who will now operate Tiangong at the standard three-person crew complement for the remainder of their planned stay, with one designated crew member beginning the intensive physiological monitoring protocol underpinning China's most ambitious long-duration spaceflight experiment to date. The Shenzhou-22 crew leaves behind a research legacy across more than 60 active experiments in the Wentian and Mengtian laboratory modules spanning materials science, fluid physics, space medicine, and plant biology, with data continuity maintained through the multi-day handover that concluded yesterday and ensured no experiment gaps during the crew transition. With Shenzhou-23's arrival last week and today's Shenzhou-22 departure, China's sixth crew rotation since Tiangong reached full three-module configuration in late 2022 proceeded nominally, sustaining the unbroken human presence aboard the station that Beijing views as the operational backbone of its path to crewed lunar missions in the early 2030s.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/05/shenzhou-23-launch/",
        timestamp: "2026-05-29T06:30:00Z"
      }
    ]
  },

  "2026-05-28": {
    date: "May 28, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Regulation",
        headline: "FAA Grounds Starship Flight 13 Pending Mishap Investigation Into Booster 19 Engine Relight Failure — Agency Declares Flight 12 Booster Loss a Federal 'Mishap,' Orders SpaceX-Led Investigation With FAA Oversight Before Any New Launch License Can Be Issued",
        body: "The Federal Aviation Administration formally declared the loss of Super Heavy Booster 19 during Starship Flight 12 on May 22 a 'mishap' under 14 CFR Part 450 commercial spaceflight regulations, grounding the Starship program and requiring a SpaceX-led investigation the agency will supervise and must approve in full before a launch license for Flight 13 is issued. Booster 19's seven Raptor 3 engines failed to reignite properly during the boostback burn over the Gulf of America, sending the vehicle to an uncontrolled hard splashdown rather than the intended catch — a failure mode distinct from Ship 39's partial success in completing a controlled Indian Ocean splashdown and deploying 22 Starlink simulator payloads. The FAA confirmed no public injuries or property damage resulted from the incident, but said it will be involved in every step of the investigation and must approve SpaceX's final report, including all corrective actions. Analysts at NASASpaceFlight estimate a July–August 2026 window for Flight 13 if the review proceeds at the pace of prior Starship mishap investigations, though the debut of the Raptor 3 engine architecture — which had no prior flight history before Flight 12 — may require additional technical scrutiny and extend the timeline, complicating SpaceX's June 12 IPO narrative.",
        sourceUrl: "https://spaceflightnow.com/2026/05/27/faa-requires-spacex-led-mishap-investigation-before-resumption-of-starship-launches/",
        timestamp: "2026-05-28T01:00:00Z"
      },
      {
        agency: "NASA",
        category: "Crew",
        headline: "NASA to Reveal Artemis 3 Crew on June 9 at Johnson Space Center — Four Astronauts to Fly Orion on Earth-Orbit Docking Test Mission Targeting Late 2027 After Mission Profile Was Shifted Away From Lunar Surface Landing",
        body: "NASA announced Thursday it will reveal the four-person crew assigned to Artemis 3 during a live event at 11 a.m. EDT on June 9 at Johnson Space Center in Houston, streamed on NASA+ and YouTube, accompanied by a full mission progress briefing covering Space Launch System and Orion preparations and updated commercial landing system timelines. Artemis 3 was originally slated to be the first crewed lunar surface landing since Apollo 17, but administrator Jared Isaacman restructured the mission profile in April 2026, redesignating it as an Earth-orbit rendezvous and docking demonstration that will validate Orion's ability to dock with commercial human landing systems before committing to a full lunar descent. The mission now targets late 2027 after delays in both SpaceX's Starship HLS and Blue Origin's Blue Moon Mark 2 programs, and will carry four astronauts to orbit to test the proximity operations, docking interfaces, and crew transfer procedures that Artemis IV will depend on for the first actual crewed Moon landing. The June 9 event will mark the first time NASA has formally named a crew for any Artemis mission since the Artemis II crew was announced in April 2023, and is expected to include at least one international partner astronaut from ESA or JAXA.",
        sourceUrl: "https://www.space.com/space-exploration/artemis/nasa-will-reveal-the-artemis-3-astronauts-on-june-9",
        timestamp: "2026-05-28T15:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Government",
        headline: "SpaceX Wins $2.29 Billion Space Force Contract to Build Space Data Network Backbone — Starshield Mesh Constellation to Form Military Internet in LEO for Golden Dome Integration, Missile Warning, and Warfighter Connectivity With Full Prototype Capability Required by End of 2027",
        body: "The U.S. Space Force awarded SpaceX a $2.29 billion contract to develop the Space Data Network Backbone, a mesh constellation of optically interconnected low Earth orbit satellites built on the government-focused Starshield platform that will route military data through space rather than ground-relay networks — providing resilient, low-latency pathways connecting missile warning sensors, interceptors, drones, and warfighters globally. SpaceX must deliver a fully operational prototype capability by end of 2027, with the network designed to integrate with the Space Development Agency's existing Transport Layer constellation to form a unified military space communications architecture capable of supporting multi-domain operations. The SDN Backbone is a foundational element of the Trump administration's Golden Dome missile defense initiative, providing the near-real-time data handoffs between space-based sensors and interceptors needed to defeat hypersonic glide vehicles, ballistic missiles, and cruise missiles. SpaceX secured the contract over bids from Northrop Grumman and a Lockheed Martin–Raytheon joint venture, with the Space Force citing Starshield's operational heritage, demonstrated laser inter-satellite link technology, and SpaceX's manufacturing throughput as the decisive discriminators.",
        sourceUrl: "https://spacenews.com/spacex-wins-2-29-billion-space-force-contract-for-military-data-network/",
        timestamp: "2026-05-27T22:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "Blue Origin Completes Successful NG-4 Pre-Launch Static Fire at LC-36 — All Seven BE-4 Engines Perform Nominally Through 38-Second Full-Duration Test at 100% Thrust, Clearing Path to New Glenn Return-to-Flight Launch in Early June",
        body: "Blue Origin completed a successful fully integrated hotfire test of the New Glenn NG-4 launch vehicle at Launch Complex 36 at Cape Canaveral Space Force Station, with all seven BE-4 engines performing nominally through a 38-second full-duration test that included 22 seconds at 100 percent rated thrust — confirming the readiness of the thermal insulation and hydraulic line engineering changes incorporated after the April 19 NG-3 upper-stage anomaly. The hotfire is the final major milestone before Blue Origin can submit its pre-launch verification package to the FAA and set a launch date, with CEO Dave Limp having committed publicly to a return to flight 'within weeks' of the FAA's May 22 acceptance of the corrective action plan. NG-4 will carry an undisclosed commercial payload, and a successful mission would restore Blue Origin's launch cadence toward the 8-to-12 annual New Glenn missions the company originally targeted for 2026, with particular urgency given that NG-5 through NG-8 carry Amazon Project Kuiper constellation satellites and TeraWave demonstration hardware. A launch window in early-to-mid June is anticipated pending FAA license issuance.",
        sourceUrl: "https://www.blueorigin.com/news/new-glenn-completes-integrated-launch-vehicle-hotfire",
        timestamp: "2026-05-28T12:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Shenzhou-22 Crew Completes Final Handover Day Aboard Tiangong — Departure Set for May 29 as Six-Person Joint Operations Conclude and Shenzhou-23 Assumes Full Station Command With Year-Long Mission Member Beginning Extended Isolation Protocol",
        body: "The outgoing Shenzhou-22 crew completed their final full day of joint operations with the incoming Shenzhou-23 crew aboard Tiangong on Thursday, wrapping the multi-day handover in preparation for a May 29 undocking and return to Earth that will end six months of continuous service and return the station to a standard three-person crew configuration for the next phase of the mission. The handover formally transferred operational responsibility for all ongoing science experiments across the Mengtian and Wentian laboratory modules to Shenzhou-23 commander Zhu Yangzhu, with particular care given to long-duration biology, materials science, and fluid physics payloads requiring uninterrupted data collection through the crew transition. With departure imminent, Shenzhou-23's designated year-long crew member formally commenced the intensive daily exercise and physiological monitoring protocol that will generate China's most comprehensive long-duration spaceflight dataset — data considered directly applicable to the cardiovascular, musculoskeletal, and neurological adaptation challenges of the nation's 2030s crewed lunar surface missions. The May 29 re-entry and Inner Mongolia landing will be covered live by CCTV and China Media Group, with the return sequence nominally lasting approximately ten hours from undocking to touchdown.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/05/shenzhou-23-launch/",
        timestamp: "2026-05-28T08:00:00Z"
      }
    ]
  },

  "2026-05-27": {
    date: "May 27, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Awards Nearly $1 Billion in First Moon Base Contracts for Lunar Terrain Vehicles, Rovers, and Landers — Blue Origin Wins $188M Delivery Deal via Blue Moon Endurance Lander, Astrolab and Lunar Outpost Share $439M Rover Awards, Firefly Receives Lander Contract as Isaacman Calls for Reduced Taxpayer Reliance and Moon Base I Targets Fall 2026 Launch to Shackleton Connecting Ridge",
        body: "NASA Administrator Jared Isaacman unveiled nearly $1 billion in initial Moon Base contract awards at Wednesday's headquarters briefing, with Blue Origin receiving $188 million to deliver the first lunar terrain vehicles to the lunar surface using its uncrewed Blue Moon Mark 1 Endurance cargo lander — a contract that includes an optional extension worth an additional $280.4 million for two task orders — while Astrolab and Lunar Outpost received $219 million and $220 million respectively to develop the actual electric pressurised and unpressurised rovers those deliveries will carry. Firefly Aerospace received a contract to develop a dedicated lunar lander for Moon Base logistics, rounding out the initial $1 billion package that Isaacman described as the first tranche of a $20 billion seven-year architecture funded in partnership with commercial co-investors rather than relying solely on taxpayer funding — a model he said would make the programme 'more resilient, more affordable, and more sustainable' than Apollo-era NASA could have achieved. Moon Base I, the first mission under the new architecture, is targeted for no earlier than fall 2026, with Blue Origin's Blue Moon Mark 1 Endurance lander set to touch down on the Shackleton Connecting Ridge near the lunar south pole to demonstrate precision landing, payload offloading, and surface operations capabilities that directly reduce risk for the first crewed Artemis surface landing in early 2028. NASA framed the awards as the beginning of a sustained delivery cadence, stating the agency and its commercial partners plan to execute dozens of robotic precursor missions over the next four years to emplace power systems, habitats, communications infrastructure, and in-situ resource utilisation hardware in advance of permanent human occupation in the 2030s.",
        sourceUrl: "https://spaceflightnow.com/2026/05/27/nasa-outlines-nearly-1-billion-investment-into-initial-moon-base-missions/",
        timestamp: "2026-05-27T18:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "Blue Origin Secures $188 Million NASA Moon Base I Delivery Contract — Blue Moon Mark 1 Endurance Lander to Carry First Lunar Terrain Vehicles to Shackleton Connecting Ridge in Fall 2026 as Company Simultaneously Advances New Glenn Return-to-Flight and Completes Blue Moon Radio-Frequency Testing at Kennedy Space Center",
        body: "Blue Origin emerged from NASA's first round of Moon Base contract awards as the sole provider selected to deliver surface mobility assets to the lunar south pole, winning a $188 million firm deal with an optional extension worth $280.4 million to carry Astrolab and Lunar Outpost lunar terrain vehicles to the surface using its uncrewed Blue Moon Mark 1 Endurance cargo lander — a mission that will mark the first operational flight of any Blue Moon variant and represent the company's first surface delivery on the Moon. The contract win arrives as Blue Origin simultaneously advances its New Glenn rocket toward a return-to-flight static fire test at Launch Complex 36 following the FAA's acceptance of the corrective action plan for the April 19 upper-stage anomaly, with CEO Dave Limp having indicated the launch campaign remains on schedule for flight resumption within weeks as the company works to recover its 2026 manifest. Blue Moon Mark 1 Endurance, the uncrewed cargo-only variant of Blue Origin's lunar lander architecture, is designed to carry up to 3 metric tonnes of payload to the lunar surface in a single delivery, and the Shackleton Connecting Ridge target landing zone for Moon Base I overlaps closely with the Blue Moon Mark 2 crewed landing site identified in Blue Origin's Human Landing System contract scope — meaning the fall 2026 mission will also generate high-resolution terrain, thermal, and electromagnetic environment data directly applicable to crewed Blue Moon mission planning. For Blue Origin, the contract simultaneously validates its vertical integration strategy — developing both the delivery vehicle and the BE-7 engine that powers the lander's descent — and represents the first standalone revenue from the Blue Moon programme after years of development investment.",
        sourceUrl: "https://www.geekwire.com/2026/nasa-taps-blue-origin-to-deliver-lunar-rovers-for-moon-base-initiative/",
        timestamp: "2026-05-27T19:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Policy",
        headline: "SpaceX Starship Flight 12 Post-Flight Analysis Strengthens IPO Case as Analysts Cite Fault-Tolerant V3 Ship Performance While Noting Booster Relight Failure as Outstanding Risk — Roadshow Set for June 4 Ahead of June 12 Nasdaq Debut Under Ticker SPCX at Up to $2 Trillion Valuation",
        body: "Financial analysts covering SpaceX's pending initial public offering published post-Flight 12 assessments on Wednesday concluding that Ship 39's successful Indian Ocean splashdown on two engines and its deployment of 22 Starlink simulator satellites has bolstered investor confidence in the V3 architecture's core capabilities, even as the loss of Booster 19 due to a failed engine relight after hot-stage separation draws scrutiny as an unresolved reliability risk ahead of the planned rapid-turnaround cadence that underpins SpaceX's long-term launch cost projections. The company's S-1 prospectus, published earlier this month, revealed that Starlink's 10.3 million active subscribers generated $11.39 billion in connectivity revenue in 2025 — 61 percent of total company revenues — rising to 69 percent of first-quarter 2026 revenues and representing the only profitable business segment, generating $1.19 billion in operating income while rocket operations remained loss-making despite high cadence. The IPO roadshow is set to begin June 4 under the stewardship of Goldman Sachs and Morgan Stanley, targeting a June 12 Nasdaq listing under the ticker SPCX at a valuation of up to $2 trillion — which would surpass Saudi Aramco's 2019 offering as the largest IPO in history and raise as much as $80 billion in primary and secondary proceeds. SpaceX confirmed this week that Ship 40 will fly as the upper stage for Starship Flight 13, with the mission profile — potentially targeting full orbital insertion rather than a suborbital splashdown — contingent on completion of the Booster 19 relight failure investigation and satisfaction of performance margins for the circularisation burn.",
        sourceUrl: "https://kfgo.com/2026/05/27/analysis-spacexs-starship-test-strengthens-ipo-case-though-hurdles-remain/",
        timestamp: "2026-05-27T12:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission",
        headline: "ISRO Details Gaganyaan Astronaut Training Upgrades and 27-Mission 2026–27 Annual Plan as Vyommitra Integration With Crew Module Advances — Static Mock-Up Simulator, Virtual Reality Training, and Four Dedicated Gaganyaan Missions Including G1 Uncrewed Orbital Flight Anchor India's Most Ambitious Annual Launch Schedule",
        body: "ISRO published a detailed mission readiness and astronaut training update on Wednesday as the agency formally announced a 27-mission plan for financial year 2026–27 — the most ambitious annual launch programme in the organisation's history — with four dedicated Gaganyaan human spaceflight missions at its core including the G1 uncrewed orbital test, a pad abort demonstration, an in-flight abort test at maximum dynamic pressure, and an integrated systems qualification flight. Astronaut training for the four Indian Air Force officer-candidates has been intensified following the National Review Committee's May 26 clearance of the G1 launch campaign, with the Static Mock-up Simulator — a full-scale ground replica of the crew module — now hosting extended occupancy sessions of two, six, ten, and eighteen hours to refine crew reachability to all panels, test onboard audio-visual systems, rehearse emergency exit procedures, and evaluate responses to off-nominal scenarios that cannot be replicated in zero-gravity simulation. A newly commissioned Virtual Reality Training Simulator supplements the physical mock-up by digitally replicating mission scenarios in high fidelity, enabling astronauts to rehearse orbital operations, navigation, and emergency handling with a level of environmental variability that physical hardware alone cannot provide, while an upgraded centrifuge programme is addressing the cardiovascular and orthostatic tolerance profile that ISRO's flight surgeons require ahead of the planned crewed H1 mission in 2027. The 27-mission plan also encompasses five Small Satellite Launch Vehicle missions, three Earth observation satellite launches, two communication and navigation satellite missions, and the debut of the first PSLV assembled entirely by NewSpace India Limited, reflecting the full scope of ISRO's pivot from a government-only execution model toward a public-private partnership framework for routine launch operations.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-details-gaganyaan-astronaut.html",
        timestamp: "2026-05-27T07:00:00Z"
      },
      {
        agency: "Roscosmos",
        category: "Mission",
        headline: "Roscosmos Expedition 74 Cosmonauts Kud-Sverchkov and Mikaev Complete 279th ISS Spacewalk in Five Hours Outside Zvezda and Poisk Modules — Solar Radiation Experiment Installed, Science Hardware Removed, and Failed Progress 94 Kurs Antenna Photographed for Engineering Analysis",
        body: "International Space Station Expedition 74 commander Sergey Kud-Sverchkov and flight engineer Sergei Mikaev completed a five-hour spacewalk beginning at 10:15 a.m. EDT on Wednesday, exiting through the Pirs docking compartment in Orlan spacesuits distinguished by red and blue leg stripes respectively, in the 279th spacewalk devoted to ISS assembly, maintenance, and upgrades and the second career spacewalk for Kud-Sverchkov and the first ever for Mikaev. The primary tasks of the excursion involved mounting a new solar radiation monitoring experiment on the exterior of the Zvezda service module — contributing to the long-running dataset of radiation flux in low Earth orbit used by Russian and international researchers to characterise the space radiation environment for crewed mission planning — and removing legacy science hardware from both the Poisk mini-research module and the Nauka multipurpose laboratory module for return to Earth on a future Soyuz or Progress vehicle. Among the secondary objectives completed during the excursion was a photographic inspection of the Kurs rendezvous antenna on the Progress 94 cargo spacecraft that failed to deploy after its March launch, with Kud-Sverchkov capturing close-range imagery of the mechanism that mission controllers at TsUP in Korolyov will analyse to determine whether the hardware failure reflects a systemic risk to the Kurs antenna deployment design used across Soyuz and Progress vehicles. NASA provided live coverage of the spacewalk beginning at 9:45 a.m. EDT on NASA+, Amazon Prime Video, and the agency's YouTube channel, with the excursion timed to avoid a predicted period of elevated electron flux from a coronal mass ejection that departed the Sun on Monday.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-sets-coverage-for-roscosmos-spacewalk-outside-space-station-2/",
        timestamp: "2026-05-27T14:15:00Z"
      }
    ]
  },

  "2026-05-26": {
    date: "May 26, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Formally Unveils $20 Billion Moon Base Architecture at May 26 Headquarters Briefing — Administrator Isaacman Confirms Shackleton Crater Rim Site, Artemis IV First Crewed Landing in Early 2028, and Nuclear-Powered Permanent Lunar Station by 2036 as New Commercial Co-Investment Partners Announced",
        body: "NASA Administrator Jared Isaacman, acting associate administrator Lori Glaze, and newly named Moon Base program executive Carlos García-Galán jointly presented the agency's comprehensive lunar surface architecture at the 2 p.m. EDT news conference at NASA headquarters in Washington, D.C., formally committing to a $20 billion seven-year foundational phase and a broader $30 billion eleven-year architecture anchored at a site on the high-elevation ridges along the rim of Shackleton Crater at the lunar south pole — chosen for near-continuous solar illumination and access to confirmed water-ice deposits in permanently shadowed adjacent craters. The program advances in three phases: an initial infrastructure phase delivering pressurised habitats, nuclear power systems, and mobility hardware via Artemis IV through VI between 2028 and 2032; a consolidation phase expanding base capacity and crew rotation length from 2032 to 2034; and a permanent occupation phase from 2034 targeting year-round human presence in the mould of Antarctic research stations. Newly selected industry partners — required to co-invest in technology development in exchange for rights to commercialise their lunar hardware for private enterprise in the late 2030s — received contracts covering pressurised habitat modules, in-situ resource utilisation systems for extracting water ice and producing oxygen and rocket propellant, and nuclear fission surface power units. Isaacman framed Moon Base as the capstone of NASA's pivot from single-expedition visits to sustained presence: 'We are not going to the Moon to leave footprints and plant flags — we are going to stay, to learn, and to build the foundation for crewed missions to Mars in the 2040s.'",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-provide-update-on-moon-base-strategy-missions/",
        timestamp: "2026-05-26T18:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Falcon 9 Deploys 24 Starlink V2 Mini Satellites From Vandenberg SFB at 14:50 UTC as Veteran Booster B1100 Scores Sixth Career Landing on Drone Ship 'Of Course I Still Love You' — Constellation Push Continues Days After Starship Flight 12 Milestone",
        body: "A SpaceX Falcon 9 rocket lifted off from Space Launch Complex 4 East at Vandenberg Space Force Base, California, at 7:50 a.m. PDT (14:50 UTC) on Tuesday, delivering 24 Starlink V2 Mini Optimized satellites to low Earth orbit in the Starlink 17-37 mission as the company maintains its aggressive megaconstellation deployment cadence. First stage booster B1100, flying for its sixth time after previously carrying the NROL-105 national security payload and four prior Starlink batches, completed an automated propulsive landing on the drone ship 'Of Course I Still Love You' positioned in the Pacific Ocean approximately 8.5 minutes after liftoff — the 198th recovery on that vessel and SpaceX's 615th successful booster landing overall. The mission continues SpaceX's rapid-fire Falcon 9 schedule just days after the landmark Starship Flight 12 partial success on May 22-23, during which Ship 39 deployed 22 Starlink simulator satellites before completing a controlled Indian Ocean splashdown — demonstrating the company's ability to simultaneously manage test-flight milestones and high-cadence operational constellation missions across two distinct vehicle families. The Vandenberg launch adds to a Starlink constellation now exceeding 10,000 active spacecraft, with the V2 Mini satellites' higher throughput per unit steadily increasing internet capacity ahead of the planned transition to Starship-delivered Starlink V3 payloads in the 2027 timeframe.",
        sourceUrl: "https://spaceflightnow.com/2026/05/26/live-coverage-spacex-to-launch-24-starlink-satellites-on-falcon-9-rocket-from-vandenberg-sfb-8/",
        timestamp: "2026-05-26T14:50:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Shenzhou-23 and Shenzhou-22 Crews Begin Multi-Day Tiangong Handover at Full Six-Person Capacity as Commander Zhu Yangzhu, Zhang Zhiyuan, and Hong Kong's Lai Ka-ying Settle Into Station Duties — Year-Long Mission Member Begins Dedicated Exercise Protocol",
        body: "The joint six-person Tiangong crew comprising the incoming Shenzhou-23 team — commander Zhu Yangzhu, pilot Zhang Zhiyuan, and payload specialist Lai Ka-ying — and the outgoing Shenzhou-22 crew began formal multi-day handover operations on Tuesday, one day after Shenzhou-23 docked at the Tianhe core module's forward radial port at 02:45 a.m. Beijing Time, with mission controllers at the Beijing Aerospace Command and Control Centre confirming all station environmental systems and life-support hardware performing nominally at full six-person occupancy. The Shenzhou-23 crew member designated for China's first-ever year-long continuous spaceflight — whose official role will be confirmed at the formal handover ceremony — commenced the intensive daily exercise and physiological monitoring protocol designed to track cardiovascular, musculoskeletal, and neurological adaptation in extended microgravity, generating a long-duration dataset directly applicable to China's 2030s crewed lunar-surface and eventual Mars mission planning. Lai Ka-ying, Hong Kong's historic first astronaut and a police superintendent with a doctoral degree in computer forensics, spent her first full day aboard Tiangong conducting payload orientation sessions and reviewing ongoing scientific experiments across the Mengtian and Wentian laboratory modules under briefings from the departing Shenzhou-22 specialists. The standard handover period runs four to seven days before the outgoing crew seals Shenzhou-22, undocks, and begins the re-entry sequence for landing in Inner Mongolia.",
        sourceUrl: "https://www.cbsnews.com/news/china-launches-shenzhou-spacecraft-astronauts/",
        timestamp: "2026-05-26T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission",
        headline: "ISRO's National Review Committee Formally Clears Gaganyaan G1 Uncrewed Orbital Test for Launch Within Four Months — Vyommitra Humanoid Robot to Fly Complete LVM3 Mission Profile as 90-Day Certification Campaign Now Begins",
        body: "ISRO's National Review Committee has formally cleared the Gaganyaan G1 uncrewed orbital test flight for launch within the next three to four months, marking the programme's most significant milestone since the GSLV-F17 return-to-flight success on May 21 provided the critical gate event ISRO Chairman V. Narayanan had identified as a prerequisite for advancing the human-rated programme. G1 will fly the complete Gaganyaan mission profile — ascent aboard the LVM3 human-rated vehicle, orbital operations, re-entry, and Indian Ocean crew module recovery — with Vyommitra, ISRO's half-humanoid robot, aboard to monitor life-support performance, cabin atmospheric conditions, and environmental health data in lieu of a human occupant. The 90-day launch campaign required for human-rated system certification must now begin in earnest, placing G1 on a trajectory toward an August–September 2026 launch window, after which two additional uncrewed G2 and G3 qualification flights are planned before the programme's first crewed H1 flight carrying Indian Air Force astronaut-designates in 2027. The G1 clearance arrives as ISRO concurrently advances EOS-05 toward its final geostationary orbit through a continuing apogee-motor burn sequence, with the Master Control Facility in Hassan reporting all satellite subsystems nominal ahead of final circularisation within approximately two weeks.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-clears-gaganyaan-g-1-mission-for.html",
        timestamp: "2026-05-26T09:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Technology",
        headline: "Blue Origin Rolls New Glenn First Stage to Launch Complex 36 for Pre-Return-to-Flight Static Fire Test as CEO Limp Reaffirms Launch 'Within Weeks' — TeraWave FCC Filings and Blue Moon RF Testing Advance During Stand-Down",
        body: "Blue Origin has transferred a refurbished New Glenn first stage booster from its horizontal integration facility to Launch Complex 36 at Cape Canaveral Space Force Station for a pre-return-to-flight static fire test expected within days, validating the thermal insulation and hydraulic line engineering changes embedded in the corrective action plan the FAA formally accepted on May 22. CEO Dave Limp reiterated in a company-wide address Tuesday that the campaign remains on schedule for a return to flight 'within weeks,' and confirmed the 2026 manifest has been reconstituted to recover as many of the company's original 8-to-12 annual launch targets as the remaining calendar permits after the month-long grounding. During the stand-down, Blue Origin continued advancing its Federal Communications Commission spectrum coordination filings for the TeraWave high-throughput communications constellation and the Project Sunrise orbital compute network — both of which depend on the very high New Glenn cadence the company is now racing to restore — while simultaneously advancing radio-frequency compatibility testing of the Blue Moon Mark 1 uncrewed lunar lander at Kennedy Space Center. A potential first-ever external investment round, being evaluated to supplement Jeff Bezos's roughly $28 billion in personal funding, remains under active consideration as the capital demands of concurrently developing New Glenn, TeraWave, Blue Moon, and Project Sunrise press against the company's current self-funded model.",
        sourceUrl: "https://orbitaltoday.com/2026/05/25/the-faa-clears-the-blue-origin-new-glenn-rocket-for-flight/",
        timestamp: "2026-05-26T11:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA SMILE Completes Fifth Orbit-Raising Manoeuvre Seven Days After Vega-C Launch, Advancing Through 11-Burn Sequence Toward 121,000 km Polar Science Orbit as Instrument Calibration Runs Ahead of Schedule — Formal Science Ops Now Targeted for Mid-September",
        body: "The joint ESA–Chinese Academy of Sciences SMILE spacecraft completed its fifth apogee-raising manoeuvre on schedule seven days after its May 19 Vega-C launch from Kourou, with ESA's ESOC mission operations team in Darmstadt confirming all four science instruments — the soft X-ray imager, ultraviolet auroral imager, ion mass spectrometer, and magnetometer — remain powered on and returning nominal telemetry across all spacecraft subsystems as the probe advances steadily toward the highly elliptical polar science orbit at the core of its three-year mission. Joint ESA–Chinese Academy of Sciences science teams are refining instrument sensitivity and pointing calibration parameters using housekeeping data streamed via the New Norcia and Malargüe ground stations, with calibration progressing ahead of the original schedule and raising confidence that formal science operations could begin by mid-September rather than the more conservative late-September target. Each successive manoeuvre progressively reshapes SMILE's orbit toward the 121,000 km north polar apogee that enables the uninterrupted 45-hour observing sessions of Earth's magnetopause, bow shock, and auroral ovals at the heart of the mission's science case, with approximately six burns remaining in the 11-manoeuvre orbit-raising sequence before the spacecraft reaches its operational configuration. SMILE represents the first ESA–China jointly designed and built science satellite, and its smooth early commissioning progress has been highlighted by ESA Director General Josef Aschbacher as a demonstration of the value of deep international collaboration in space science, particularly in space weather research where both agencies have sustained investment programmes.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_lifts_off_on_quest_to_reveal_Earth_s_invisible_shield_against_the_solar_wind",
        timestamp: "2026-05-26T10:00:00Z"
      }
    ]
  },

  "2026-05-25": {
    date: "May 25, 2026",
    stories: [
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Shenzhou-23 Docks With Tiangong at 02:45 Beijing Time as Commander Zhu Yangzhu, Zhang Zhiyuan, and Hong Kong's Historic First Astronaut Lai Ka-ying Float Into Tianhe Core Module — Six-Person Station at Full Capacity as One Taikonaut Begins Record Year-Long Stay",
        body: "China's Shenzhou-23 crewed spacecraft autonomously docked with the forward radial port of the Tiangong space station at 02:45 a.m. Beijing Time on Monday, approximately 6.5 hours after its Long March-2F Y23 liftoff from Jiuquan Satellite Launch Center on Sunday evening, with mission controllers confirming all docking mechanisms latched nominally and all spacecraft subsystems healthy. Commander Zhu Yangzhu, pilot Zhang Zhiyuan, and payload specialist Lai Ka-ying — Hong Kong's historic first astronaut — opened the hatches and floated into the Tianhe core module to greet the waiting Shenzhou-22 crew, bringing Tiangong to its full six-person capacity for the multi-day handover period before the outgoing crew departs. The successful docking marks China's 16th crewed space mission and a significant operational milestone for Tiangong, which has now hosted continuous crew rotations for more than three years. One designated crew member will remain aboard for a full 12-month continuous stay — more than double China's standard six-month rotation — gathering long-duration physiological and psychological data considered essential for the nation's 2030 crewed lunar landing programme.",
        sourceUrl: "https://en.people.cn/n3/2026/0525/c90000-20459754.html",
        timestamp: "2026-05-24T18:45:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Falcon 9 Launches 29 Starlink V2 Mini Optimized Satellites From Cape Canaveral at 07:41 EDT on Starlink 10-47 Mission — Veteran Booster B1078 Scores Record 28th Landing on 'A Shortfall of Gravitas' as Constellation Surpasses 10,000 Active Spacecraft",
        body: "A SpaceX Falcon 9 rocket lifted off from Space Launch Complex 40 at Cape Canaveral Space Force Station at 7:41 a.m. EDT on May 25, deploying 29 Starlink V2 Mini Optimized satellites 61 minutes and 26 seconds after liftoff in the Starlink 10-47 mission, adding to a megaconstellation that now exceeds 10,000 active spacecraft in low Earth orbit. First stage booster B1078 — flying for a record 28th time on a career that includes NASA's Crew-6, USSF-124, SES O3b mPOWER-B, and more than 20 Starlink deliveries — completed a smooth automated landing on the drone ship A Shortfall of Gravitas approximately 8.5 minutes after liftoff, marking the 151st recovery for that vessel and SpaceX's 614th successful booster landing overall. The mission continues SpaceX's aggressive Starlink V2 Mini deployment campaign, which underpins the company's near-term revenue strategy and feeds directly into the high-throughput constellation narrative at the heart of its S-1 IPO prospectus filed earlier this month. Starlink 10-47 is one of several rapid-fire Falcon 9 missions SpaceX is maintaining alongside Starship Flight 13 preparations, demonstrating the multi-vehicle cadence at the core of the company's $1.75 trillion IPO valuation case.",
        sourceUrl: "https://spaceflightnow.com/2026/05/24/live-coverage-spacex-to-launch-29-starlink-satellites-on-a-falcon-9-rocket-from-cape-canaveral/",
        timestamp: "2026-05-25T11:41:00Z"
      },
      {
        agency: "NASA",
        category: "Policy",
        headline: "Details Emerge on Tomorrow's Moon Base Briefing: $20 Billion Seven-Year Architecture, Shackleton Crater South-Pole Site, and 2028 First Crewed Landing — Administrator Isaacman, Lori Glaze, and Program Executive Carlos García-Galán to Present Live at 2 p.m. EDT May 26",
        body: "New details previewed ahead of Tuesday's 2 p.m. EDT Moon Base news conference at NASA headquarters reveal a program with a topline cost envelope of approximately $20 billion over seven years and $30 billion over the full 11-year architecture, anchored by site selection on the high-elevation ridges along the rim of Shackleton Crater at the lunar south pole — a location chosen for near-continuous solar illumination for power arrays and proximity to permanently shadowed craters confirmed to contain water ice. Administrator Jared Isaacman, acting exploration associate administrator Lori Glaze, and newly named Moon Base program executive Carlos García-Galán will jointly present newly selected industry partner awards, mission schedules, and the infrastructure roadmap that envisions Artemis IV delivering the first crewed surface landing in early 2028. The programme builds progressively toward a permanently occupied, nuclear-power-supported lunar base by the mid-2030s, operating on the Antarctic station model of continuous scientific staffing rather than short expedition visits. The May 26 briefing, streaming live on NASA+, YouTube, and NASA Television, is expected to be the agency's most consequential lunar policy announcement since Artemis was formally chartered, and comes just days after Isaacman's sweeping reorganisation merging human spaceflight and operations into a single streamlined directorate.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-provide-update-on-moon-base-strategy-missions/",
        timestamp: "2026-05-25T14:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA Powers Down AWE Atmospheric-Waves Experiment on ISS After 30-Month Mission Collecting 80 Million Nighttime Airglow Images — ISS Exterior Slot to Be Taken by CLARREO Pathfinder Solar Reflectance Sensor Offering Five-to-Ten Times Greater Measurement Accuracy",
        body: "Ground controllers at NASA formally powered down the Atmospheric Waves Experiment (AWE) instrument mounted on the exterior of the International Space Station on May 21, marking the planned and successful conclusion of a heliophysics mission that exceeded its two-year design life by six months and generated more than 80 million nighttime infrared images of mesosphere airglow used to trace large-scale atmospheric gravity waves. During its 30-month tenure, AWE's cameras captured four frames per second, recording gravity-wave signatures from major weather events including the May 2024 central U.S. tornado outbreak and Hurricane Helene's September 2024 Gulf Coast landfall, directly linking violent tropospheric events to perturbations in the near-space environment that affect satellite communications and GPS accuracy. The dataset produced will feed atmospheric and space-weather models that seek to understand how energy from surface storms propagates upward through the atmosphere and into the ionosphere and thermosphere where operational satellites operate. The AWE mounting location will next host CLARREO Pathfinder, a solar reflectance calibration instrument designed to measure Earth- and Moon-reflected sunlight with five to ten times greater absolute accuracy than current Earth-observing sensors, improving the reliability of long-term climate trend records derived from the satellite era.",
        sourceUrl: "https://science.nasa.gov/science-research/heliophysics/nasas-awe-completes-mission-to-study-earths-effect-on-space-weather/",
        timestamp: "2026-05-25T15:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "Blue Origin Completes FAA-Approved New Glenn NG-3 Upper-Stage Anomaly Investigation and Advances Return-to-Flight Preparations While Weighing Historic First External Investment Round — Blue Moon RF Testing and $600 Million Cape Canaveral Expansion Continue in Parallel",
        body: "Blue Origin confirmed the Federal Aviation Administration has formally approved its investigation report into the April 19 New Glenn NG-3 mission anomaly, in which an off-nominal thermal condition ahead of the BE-3U upper stage's second burn caused one engine to fail to achieve full thrust — leaving AST SpaceMobile's BlueBird-7 satellite stranded in a decay orbit where it is expected to re-enter the atmosphere within months. With the corrective action plan now FAA-accepted, CEO Dave Limp has indicated a return-to-flight announcement could come within weeks as engineers implement the thermal system modifications and work to recover as many of the company's targeted 8-to-12 launches for 2026 as the calendar permits. Separately, reporting confirmed Blue Origin is evaluating external investment for the first time in the company's 25-year, self-funded history — backed entirely by Jeff Bezos to the tune of roughly $28 billion — as the capital requirements of simultaneously scaling New Glenn's cadence and deploying the TeraWave broadband satellite constellation strain the company's current funding model. Blue Origin is simultaneously advancing radio-frequency compatibility testing of the Blue Moon Mark 1 uncrewed lunar lander at Kennedy Space Center and has broken ground on a $600 million upper-stage manufacturing campus expansion in Cape Canaveral, keeping multiple major programmes progressing during the launch stand-down.",
        sourceUrl: "https://spacenews.com/blue-origin-completes-investigation-into-new-glenn-launch-failure/",
        timestamp: "2026-05-25T09:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA SMILE Completes Fourth Orbit-Raising Manoeuvre Six Days After Vega-C Launch, Advancing Through 11-Burn 25-Day Sequence Toward 121,000 km Polar Science Orbit as Instrument Calibration Begins — First Formal Science Observations Targeted for September 2026",
        body: "The joint ESA–Chinese Academy of Sciences SMILE spacecraft completed its fourth apogee-raising manoeuvre on schedule six days after its May 19 Vega-C launch from Kourou, with ESA's ESOC mission operations team in Darmstadt reporting nominal telemetry across all four science instruments — the soft X-ray imager, ultraviolet auroral imager, ion mass spectrometer, and magnetometer — as the probe advances through a planned 11-burn sequence designed to reach its operational science orbit within 25 days of launch. Each successive manoeuvre progressively elongates SMILE's orbit from its 700 km circular parking configuration toward the highly elliptical science orbit with a 121,000 km north polar apogee, enabling the uninterrupted 45-hour observing sessions of Earth's magnetopause, bow shock, and auroral ovals at the heart of the mission's science case, before sweeping to 5,000 km above the South Pole for high-bandwidth data downlinks. With approximately 18 days of burns remaining, joint ESA–CAS science teams have begun preliminary instrument calibration using housekeeping data streamed via the New Norcia and Malargüe ground stations, though formal science observations are not expected to begin until September 2026 following full commissioning. SMILE's three-year mission will deliver the first simultaneous global-scale images of Earth's entire magnetosphere boundary layer alongside in-situ particle and field measurements, generating space weather datasets projected to substantially improve predictive models protecting satellites, power grids, and high-latitude aviation communications.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_lifts_off_on_quest_to_reveal_Earth_s_invisible_shield_against_the_solar_wind",
        timestamp: "2026-05-25T10:00:00Z"
      }
    ]
  },

  "2026-05-24": {
    date: "May 24, 2026",
    stories: [
      {
        agency: "CNSA",
        category: "Launch",
        headline: "Shenzhou-23 Lifts Off at 15:08 UTC From Jiuquan With Commander Zhu Yangzhu, Zhang Zhiyuan, and Lai Ka-ying — Hong Kong's Historic First Astronaut — as One Crew Member Begins Unprecedented Year-Long Stay Aboard Tiangong to Support Future Deep-Space Planning",
        body: "China's Long March-2F Y23 rocket carried the Shenzhou-23 crewed spacecraft aloft from Pad 921 at the Jiuquan Satellite Launch Center at 15:08 UTC (11:08 p.m. Beijing time) on Sunday, May 24, placing commander Zhu Yangzhu, pilot Zhang Zhiyuan, and payload specialist Lai Ka-ying on course for an automated docking with China's Tiangong space station approximately six hours after liftoff. Lai Ka-ying, a 43-year-old police superintendent and computer science PhD from the University of Hong Kong who is making her first spaceflight, becomes the first astronaut from the Hong Kong Special Administrative Region and the first female payload specialist selected from Hong Kong or Macao — cementing Shenzhou-23 as one of the most symbolically significant crewed missions in the history of the Chinese space program. One crew member will carry out a full year-long continuous spaceflight experiment aboard Tiangong, more than doubling China's standard six-month crew rotation and generating long-duration physiological and psychological datasets directly applicable to crewed lunar and Mars mission planning. The mission paves the way for Shenzhou-24, planned for October 2026, which is set to carry a Pakistani astronaut as the first foreign national ever to fly aboard a Chinese crewed spacecraft.",
        sourceUrl: "https://news.cgtn.com/news/2026-05-23/China-to-launch-Shenzhou-23-crewed-spaceship-on-May-24-1Nn49DFWuuA/p.html",
        timestamp: "2026-05-24T15:08:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "SpaceX Confirms Ship 40 Will Fly Starship Flight 13 After Post-Flight 12 Analysis Clears V3 Architecture — Next Mission May Attempt Full Orbital Insertion as Engineers Study Booster 19 Relight Failure and Raptor Data From Partial-Engine Ship 39 Splashdown",
        body: "SpaceX has confirmed that Ship 40 will serve as the upper stage for Starship Flight 13, the follow-on to last Friday's Flight 12 partial success, as engineers complete a detailed post-flight data review of Booster 19's hot-stage separation and failed engine relight and Ship 39's two-engine Indian Ocean splashdown. The company has indicated Flight 13 may attempt a full orbital insertion rather than a suborbital splashdown profile, contingent on findings from the Flight 12 booster relight investigation and verification that Ship 40's propulsion configuration meets the performance margins required for circularization burns at orbital altitude. Ship 39's successful deployment of all 22 Starlink simulator satellites — the first payload ever flown on a Starship test vehicle — and its controlled ocean touchdown despite operating on just two engines has been celebrated internally as a landmark validation of the V3 architecture's fault tolerance. The IPO roadshow implication of Flight 13 timing is not lost on analysts, given that SpaceX's S-1 prospectus targets a June 12 public debut under ticker SPCX at an implied $1.75 trillion valuation and frames Starship's operational cadence as the primary growth driver for the next decade.",
        sourceUrl: "https://nextspaceflight.com/starship/",
        timestamp: "2026-05-24T12:00:00Z"
      },
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Moon Base May 26 Briefing Set to Detail South Pole Infrastructure Timeline, New Industry Partners, and Mission Cadence as Administrator Isaacman Prepares First Full Public Presentation of Sustained Lunar Presence Architecture",
        body: "NASA will host a live news conference at 2 p.m. EDT on Tuesday, May 26, at agency headquarters in Washington, D.C., at which Administrator Jared Isaacman and acting associate administrator Lori Glaze will publicly present the full Moon Base program architecture for the first time — including new industry partnerships, mission timelines, and the infrastructure roadmap for establishing a permanent crewed presence near the lunar south pole in the 2030s. The briefing follows this week's agency-wide reorganisation that merged Human Exploration and Space Operations into a single directorate and opened JPL management to competitive bidding, moves Isaacman described as clearing bureaucratic obstacles in advance of an accelerated Moon Base delivery schedule. Moon Base is designed to evolve from Artemis's initial short surface visits toward a permanently staffed Antarctic-style research station drawing on south-pole water-ice deposits for drinking water, oxygen, and rocket propellant — enabling weeks- or months-long crew stays that feed directly into the physiological database needed for eventual crewed Mars missions in the 2040s. The briefing will be streamed live on NASA+, the agency's YouTube channel, and NASA Television.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-provide-update-on-moon-base-strategy-missions/",
        timestamp: "2026-05-24T14:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission",
        headline: "ISRO EOS-05 Satellite Completes Second Apogee-Raising Burn on Path to Geostationary Slot as Gaganyaan Integrated Air Drop Test-2 Data Confirms Crew Module Parachute System Ready for G1 Uncrewed Orbital Test",
        body: "India's EOS-05 (GISAT-1A) geostationary Earth observation satellite, placed into transfer orbit by the successful GSLV-F17 return-to-flight launch on May 21, has completed its second liquid apogee motor burn on schedule, progressively circularising its orbit toward the final 36,000 km geostationary operational slot from which it will image the entire Indian subcontinent every 30 minutes under routine conditions. ISRO controllers at the Master Control Facility in Hassan are monitoring spacecraft health across all subsystems and confirm nominal performance ahead of the remaining apogee burns that will place EOS-05 in its final geostationary slot within approximately two weeks. In parallel, ISRO engineers have released processed data from the second integrated air drop test (IADT-02) of the Gaganyaan crew module parachute recovery system, confirming that the system met all design criteria for both terminal deceleration and precision splashdown — a critical green gate for the G1 uncrewed orbital test. The combination of a clean EOS-05 orbit-raising profile and verified crew module recovery performance puts ISRO on track to announce a G1 launch date in the coming weeks.",
        sourceUrl: "https://www.isro.gov.in/FutureMissions.html",
        timestamp: "2026-05-24T08:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "FAA Formally Clears New Glenn for Return to Flight as Blue Origin CEO Dave Limp Signals First Launch of Reconstituted 2026 Manifest Could Come Within Weeks — $600 Million Cape Canaveral Factory Expansion Breaks Ground This Month",
        body: "Blue Origin confirmed Sunday that the Federal Aviation Administration has formally accepted the company's corrective action plan for the April 19 BE-3U upper-stage thrust anomaly that stranded AST SpaceMobile's BlueBird-7 satellite in an unusably low orbit, lifting the New Glenn grounding and clearing the vehicle for a return to flight at a date Blue Origin has not yet announced publicly. CEO Dave Limp indicated in internal communications reviewed by industry reporters that the company is targeting a return-to-flight window within the coming weeks and has begun reconstituting the 2026 manifest to recover as much of the company's 8-to-12 launch goal as the remaining calendar year permits. Simultaneously, Blue Origin broke ground on the $600 million 'Project Horizon' upper-stage manufacturing campus expansion at Rocket Park in Cape Canaveral on Friday, a 830,000-square-foot facility designed to produce the BE-3U upper stages and TeraWave satellite components needed to support triple-digit annual launch cadence in the late 2020s. The expansion, backed in part by Space Florida's Spaceport Improvement Program, will create 500 aerospace jobs averaging more than $98,000 annually and bring Blue Origin's Florida employment to nearly 4,500.",
        sourceUrl: "https://techcrunch.com/2026/05/22/blue-origin-cleared-to-fly-new-glenn-mega-rocket-after-april-mishap/",
        timestamp: "2026-05-24T10:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA SMILE Spacecraft Completes Third Orbit-Raising Manoeuvre Five Days After Vega-C Launch, Remaining in Nominal Health as It Climbs Toward 121,000 km Polar Science Orbit — Joint ESA-CAS Science Teams Begin Instrument Calibration",
        body: "The joint ESA–Chinese Academy of Sciences SMILE spacecraft completed its third apogee-raising manoeuvre on Sunday, five days after its May 19 Vega-C launch from Kourou, with ESA's ESOC mission operations team in Darmstadt confirming nominal telemetry across the spacecraft bus and all four science instruments — the soft X-ray imager, ultraviolet auroral imager, ion mass spectrometer, and magnetometer — as the probe continues methodically climbing toward the highly elliptical science orbit that will define its three-year mission. Joint ESA–CAS science teams have begun preliminary instrument calibration exercises using housekeeping data streamed via the New Norcia and Malargüe ground stations, with the calibration process expected to refine pointing accuracy and instrument sensitivity models ahead of the first formal science observations planned for late June. Each successive manoeuvre progressively reshapes SMILE's orbit toward the 121,000 km north polar apogee that will enable uninterrupted 45-hour observing sessions imaging Earth's magnetopause, bow shock, and auroral ovals, with the full burn sequence expected to complete over the next three to four weeks. SMILE's science data will feed improved space weather forecasting models benefiting satellite operators, power grid managers, and high-latitude aviation communications currently vulnerable to major geomagnetic storm events.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_lifts_off_on_quest_to_reveal_Earth_s_invisible_shield_against_the_solar_wind",
        timestamp: "2026-05-24T11:00:00Z"
      }
    ]
  },

  "2026-05-23": {
    date: "May 23, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Starship V3 Makes Historic Debut on Flight 12 as Ship 39 Reaches Indian Ocean on Two Engines While Booster 19 Is Lost Over Gulf of Mexico Following Engine Failures — 22 Starlink Simulators Deployed Successfully in First-Ever Starship Payload Drop",
        body: "SpaceX's Starship Flight 12 completed the debut of the Version 3 architecture on Friday evening, lifting off from Orbital Launch Pad 2 at Starbase, Texas at 6:30 p.m. EDT in a mission that delivered a partial but significant success: Ship 39 deployed all 22 Starlink simulator satellites — the first payload ever flown on a Starship test vehicle — and completed a controlled splashdown in the Indian Ocean on just two of its six Raptor engines at approximately 7:36 p.m. CT, while Super Heavy Booster 19 was lost when its engines failed to relight after hot-stage separation, sending it into an uncontrolled descent that ended in a hard impact in the Gulf of Mexico. Ship 39 operated through the mission with one engine already out, executing a landing flip maneuver and sustaining a burn on only two of three functioning engines before touching down in the target zone, demonstrating the fault tolerance of the V3 architecture and the ship's ability to complete primary objectives despite propulsion degradation. SpaceX confirmed the 22 Starlink simulators separated successfully mid-flight — the first-ever operational payload deployment from a Starship vehicle — a milestone tied directly to the company's IPO narrative and its near-term plan to use Starship for Starlink V3 megaconstellation launches. The loss of Booster 19 means SpaceX must analyze the relight failure data before committing Flight 13 objectives, though engineers will draw significant validation data from Ship 39's successful coast, reentry, and ocean touchdown.",
        sourceUrl: "https://www.space.com/news/live/spacex-starship-flight-12-launch-updates-may-22-2026",
        timestamp: "2026-05-23T00:36:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Unveils Shenzhou-23 Crew at Saturday Press Conference — Commander Zhu Yangzhu Leads Mission With Zhang Zhiyuan and Lai Ka-ying, Hong Kong's First-Ever Astronaut and Police Superintendent With a Computer Science PhD, Ahead of Sunday 11:08 p.m. Beijing Time Liftoff",
        body: "China's Manned Space Agency formally announced the three-member Shenzhou-23 crew at a press conference Saturday morning in Beijing, with Zhu Yangzhu — a veteran of Shenzhou-16 — serving as commander, Zhang Zhiyuan as spacecraft pilot, and Lai Ka-ying as payload specialist; both Zhang and Lai are making their first spaceflight. The mission's most historic element is Lai Ka-ying, a 43-year-old police superintendent and computer science PhD from the University of Hong Kong who becomes the first astronaut from the Hong Kong Special Administrative Region and the first female payload specialist selected from Hong Kong or Macao, having applied to China's fourth batch of astronaut recruitment in October 2022 despite a personal history of motion sickness, enduring three gruelling rounds of selection before joining the People's Liberation Army Astronaut Corps in August 2024. Shenzhou-23 is scheduled to lift off from Pad 921 at the Jiuquan Satellite Launch Center aboard a Long March-2F Y23 rocket at 11:08 p.m. Sunday Beijing time (15:08 UTC Sunday), with the crew set to dock at Tiangong and relieve the Shenzhou-22 crew in a standard handover, after which one crew member will begin the planned one-year long-duration physiological experiment. The mission also paves the way for Shenzhou-24, currently planned for October 2026, which is expected to carry a Pakistani astronaut as the first foreign national aboard a Chinese crewed spacecraft.",
        sourceUrl: "https://english.news.cn/20260523/7c50f7f18a4e4b62b8a2f7ee62c0a902/c.html",
        timestamp: "2026-05-23T06:00:00Z"
      },
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Administrator Isaacman Unveils Sweeping Agency Reorganization, Merging Human Spaceflight and Space Operations Into One Directorate and Opening JPL Management to Competition for the First Time in the Lab's 90-Year History — Restructuring Tied to Moon Base Acceleration",
        body: "NASA Administrator Jared Isaacman announced the agency's most significant structural reorganization in recent memory on Friday, consolidating the Human Exploration and Operations Mission Directorate and the Space Operations Mission Directorate into a unified Human Spaceflight Mission Directorate, while merging the Aeronautics Research Mission Directorate and Space Technology Mission Directorate into a new Research and Technology Mission Directorate — changes designed to eliminate redundant reporting layers as the agency accelerates toward its Moon Base goals. Under the new structure, all mission directorates will report directly to Isaacman rather than through the associate administrator, a chain-of-command shortening intended to improve coordination across NASA's field centers and international partnerships. In a parallel announcement, NASA said it will open the management contract for the Jet Propulsion Laboratory to competition for the first time in the lab's history, ending the sole-source arrangement with the California Institute of Technology that has governed JPL since its founding in the 1930s. Isaacman framed both moves as part of a wider effort to liberate the workforce from unnecessary bureaucracy — stating 'we are focusing resources on the most pressing objectives only NASA is capable of undertaking' — with the structural changes expected to take effect in the coming weeks ahead of the May 26 Moon Base strategy briefing at NASA headquarters.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-announces-realignment-to-accelerate-mission-delivery/",
        timestamp: "2026-05-22T17:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "FAA Clears New Glenn for Return to Flight After April Upper-Stage Mishap While Blue Origin Simultaneously Announces $600 Million 'Project Horizon' Cape Canaveral Factory Expansion Creating 500 Aerospace Jobs",
        body: "The Federal Aviation Administration formally lifted its grounding of Blue Origin's New Glenn rocket on May 22, clearing the vehicle for flight resumption after reviewing and accepting the corrective action plan addressing the April 19 BE-3U upper-stage thrust anomaly that stranded AST SpaceMobile's BlueBird-7 satellite in an unusably low orbit — though Blue Origin has not yet announced a specific return-to-flight date as it works through its reconstituted 2026 launch manifest. The FAA clearance arrived on the same day that Florida Governor Ron DeSantis announced Blue Origin's $600 million 'Project Horizon' campus expansion at its Rocket Park in Cape Canaveral — an 830,000-square-foot upper-stage manufacturing facility that CEO Dave Limp called 'the latest and most ambitious chapter in Blue Origin's decade-long commitment to Florida,' supporting 500 new aerospace jobs with average salaries exceeding $98,000 and financed in part through the Spaceport Improvement Program administered jointly by Space Florida and the Florida Department of Transportation. Blue Origin has invested more than $2.3 billion across 500 Florida suppliers since 2015 and now employs nearly 4,000 people in the state, with the expanded campus designed to support the high-cadence New Glenn launch rate needed to deploy the company's TeraWave broadband constellation. Blue Origin has stated an 8-to-12 New Glenn launch target for 2026, a goal whose achievability will depend on how quickly the company can work through its reconstituted manifest after the month-long grounding.",
        sourceUrl: "https://techcrunch.com/2026/05/22/blue-origin-cleared-to-fly-new-glenn-mega-rocket-after-april-mishap/",
        timestamp: "2026-05-22T16:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA SMILE Spacecraft Completes Second Orbit-Raising Manoeuvre Four Days After Vega-C Launch, Maintaining Healthy Telemetry Across All Four Science Instruments as It Climbs Toward 121,000 km Polar Apogee Science Orbit",
        body: "The joint ESA–Chinese Academy of Sciences SMILE spacecraft completed its second apogee-raising manoeuvre on Saturday, four days after its May 19 Vega-C launch from Kourou, with ESA's ESOC mission operations team in Darmstadt confirming nominal telemetry across the spacecraft bus and all four science instruments — the soft X-ray imager, ultraviolet auroral imager, ion mass spectrometer, and magnetometer — as the probe continues its methodical climb toward the highly elliptical science orbit that will define its three-year mission. Each manoeuvre progressively reshapes SMILE's orbit from its initial parking configuration toward the 121,000 km north polar apogee that will enable uninterrupted 45-hour observing sessions imaging Earth's magnetopause, bow shock, and auroral ovals during periods of active solar wind, with the full sequence of burns expected to complete over the coming weeks before formal science operations begin. SMILE is the first jointly designed and built ESA–China science satellite, and its commissioning progress is being monitored in parallel by ESA's European Space Astronomy Centre and the National Space Science Center in Beijing, with joint science teams already beginning calibration preparations using instrument housekeeping data. The probe's science data will feed directly into improved space weather forecasting models projected to benefit satellite operators, power grid managers, and high-latitude aviation communications currently vulnerable to major geomagnetic storm events.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_lifts_off_on_quest_to_reveal_Earth_s_invisible_shield_against_the_solar_wind",
        timestamp: "2026-05-23T10:00:00Z"
      }
    ]
  },

  "2026-05-22": {
    date: "May 22, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Makes Fourth Attempt at Starship Flight 12 V3 Debut Tonight at 7:30 p.m. EDT After Last-Minute Scrub Just Before Liftoff on May 21 — Launch Comes as Company Files $1.75 Trillion IPO Prospectus Targeting June 12 Public Debut Under Ticker SPCX",
        body: "SpaceX is targeting a fourth attempt at the Starship Flight 12 inaugural V3 launch with a window opening at 7:30 p.m. EDT (23:30 UTC) on Friday, May 22, after engineers scrubbed Thursday's attempt just minutes before the planned liftoff, the fourth consecutive hold since the first attempt was scheduled for May 18, with SpaceX again not citing a specific technical cause. Booster 19, carrying 33 next-generation Raptor 3 engines, and Ship 39, whose stretched propellant tanks give it a reusable low-Earth-orbit capacity exceeding 100 metric tonnes, remain stacked and healthy on Orbital Launch Pad 2 at Starbase, Texas; Flight 12 will carry 22 Starlink simulator satellites — the first payload ever flown on a Starship test vehicle — and attempt an in-space Raptor engine relight before both stages target ocean splashdowns rather than a tower catch. The launch arrives as SpaceX publicly released its S-1 prospectus this week targeting a June 12 IPO under the ticker symbol SPCX at an implied valuation of approximately $1.75 trillion, which would make it the largest initial public offering in history; the filing revealed 2025 revenues of $18.7 billion and first-quarter 2026 revenues of $4.7 billion, underscoring how tightly the V3 debut is now linked to SpaceX's commercial narrative for prospective public investors. A successful Flight 12 is widely regarded as the most consequential single demonstration SpaceX could make ahead of the IPO, as the V3 architecture's 100-tonne reusable payload capability and aviation-style turnaround ambition are central to the company's long-term revenue projections for both Starlink constellation upgrades and commercial cargo.",
        sourceUrl: "https://www.cnbc.com/2026/05/21/spacex-plans-12th-test-flight-of-massive-starship-rocket-as-ipo-looms.html",
        timestamp: "2026-05-22T14:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA Announces 'Moon Base' Program to Establish Permanent Crewed Lunar Habitat Near South Pole, With Full Details to Be Shared at May 26 Headquarters Briefing — Artemis Infrastructure Push Marks Shift From Short Visits to Long-Duration Sustained Presence",
        body: "NASA announced this week that it is formally developing a permanent crewed lunar habitat program under the name Moon Base, targeting a sustained human presence on the lunar surface in the 2030s, with agency leadership scheduled to share mission timelines, industry partnership details, and the full south-pole site strategy at a live news conference on Tuesday, May 26, at 11 a.m. EDT from NASA headquarters in Washington, D.C. The Moon Base concept marks a strategic evolution from Artemis's initial phase of short surface excursions — exemplified by the Artemis II crew's April 2026 lunar flyby — toward long-duration habitation infrastructure including pressurised living quarters, power systems, communications networks, and resource utilisation equipment capable of supporting crews for weeks or months rather than days. The programme will lean heavily on robotic precursor missions to scout and prepare the south-pole terrain, leveraging the region's permanently shadowed craters containing water ice deposits that could be processed into drinking water, breathable oxygen, and hydrogen-oxygen rocket propellant, providing a critical in-situ resource base that reduces the mass of consumables that must be launched from Earth. NASA has framed Moon Base as the direct analogue to Antarctic research stations, with the goal of enabling continuous scientific occupation of the lunar surface that feeds into the physiological and operational data needed for eventual crewed Mars missions in the 2040s.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-provide-update-on-moon-base-strategy-missions/",
        timestamp: "2026-05-22T13:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Reveals Three-Member Shenzhou-23 Crew Hours Before NET May 24 Launch as Long March-2F Y23 Stands Ready at Jiuquan Pad 921 — Commander Tang Shengjie Leads Mission as One Taikonaut Prepares for Historic Year-Long Tiangong Stay",
        body: "China's Manned Space Engineering Office announced the three-member Shenzhou-23 crew today in keeping with its standard pre-launch security protocol of revealing crew identities approximately 24 hours before liftoff, with veteran taikonaut Tang Shengjie serving as mission commander for China's 11th crewed Tiangong flight targeting launch no earlier than May 24 at 3:08 p.m. UTC aboard the Long March-2F Y23 rocket from Pad 921 at Jiuquan Satellite Launch Center. The mission's defining element is a planned year-long continuous spaceflight experiment — more than doubling China's standard six-month crew rotation — which will generate long-duration physiological and psychological data directly applicable to crewed lunar and Mars mission planning, while the other two crew members will rotate home with the outgoing Shenzhou-22 crew after completing a standard overlap handover period. The crew announcement also formally clears the schedule for the historic Shenzhou-24 mission in October 2026, on which a Pakistani astronaut is set to become the first foreign national to fly aboard a Chinese crewed spacecraft, a milestone CNSA described as reflecting China's growing international human spaceflight cooperation agenda. The Long March-2F completed a full combined systems rehearsal on May 20 and has been in launch-ready status since its rollout on May 16, with no anomalies reported across all preflight checkpoints.",
        sourceUrl: "https://news.cgtn.com/news/2026-05-16/China-to-launch-Shenzhou-23-crewed-mission-to-space-station-1NbELlzHy7e/p.html",
        timestamp: "2026-05-22T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA-CAS SMILE Spacecraft Completes First Orbit-Raising Manoeuvre Three Days After Launch, With All Four Science Instruments Confirmed Healthy and Telemetry Nominal as Probe Begins Weeks-Long Journey to 121,000 km Polar Science Orbit",
        body: "The ESA–Chinese Academy of Sciences SMILE spacecraft successfully completed its first apogee-raising manoeuvre on Friday, three days after its May 19 Vega-C launch from Kourou, with ESA's ESOC mission operations team in Darmstadt confirming all four science instruments — the soft X-ray imager, ultraviolet auroral imager, ion mass spectrometer, and magnetometer — remain powered on and reporting nominal telemetry across all subsystems as the probe continues its commissioning phase. The manoeuvre is the first in a series of autonomous perigee and apogee burns that will progressively reshape SMILE's orbit over the coming weeks from its initial parking configuration into the highly elliptical science orbit, ultimately reaching a 121,000 km north polar apogee that will enable uninterrupted 45-hour observing sessions imaging Earth's magnetopause, bow shock, and auroral ovals during periods of solar wind activity. SMILE represents the first ESA–China jointly designed and built science satellite, with ESA providing the spacecraft bus and science operations leadership while the Chinese Academy of Sciences contributed the UV auroral imager and ion mass spectrometer instruments; its successful commissioning progress is being monitored by joint science teams at ESA's European Space Astronomy Centre and the National Space Science Center in Beijing. The probe's three-year mission will produce the first-ever simultaneous global-scale images of Earth's entire magnetosphere boundary layer alongside in-situ particle and field measurements, generating space weather datasets expected to substantially improve the predictive models that protect telecommunications satellites, power grids, and high-latitude aviation routes.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_lifts_off_on_quest_to_reveal_Earth_s_invisible_shield_against_the_solar_wind",
        timestamp: "2026-05-22T10:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission",
        headline: "ISRO EOS-05 Geostationary Imager Reaches Transfer Orbit Insertion Point 24 Hours After GSLV-F17 Return-to-Flight Launch, With Onboard Propulsion System Armed for Apogee Burns to Circularise at 36,000 km — Gaganyaan G1 Uncrewed Test Path Now Clear",
        body: "India's ISRO confirmed Friday that EOS-05 (GISAT-1A), the geostationary Earth observation satellite delivered to orbit by Thursday's successful GSLV-F17 return-to-flight mission, has completed its initial 24-hour orbital health checkout and is performing nominally in its transfer orbit, with the spacecraft's onboard liquid apogee motor system now armed and scheduled to begin the first of three circularisation burns that will raise the orbit from the current elliptical transfer trajectory to a geostationary operational altitude of approximately 36,000 km. The spacecraft, which carries a multi-spectral and thermal infrared imager capable of imaging the entire Indian subcontinent every 30 minutes under normal operating conditions and compressing revisit time to five minutes over designated disaster-priority zones, is expected to reach its final geostationary slot and enter commissioning within approximately three weeks. ISRO Chairman V. Narayanan issued a statement confirming that the GSLV-F17 success formally clears the critical gate event the agency had identified as the prerequisite for proceeding with the Gaganyaan G1 uncrewed orbital test, which will be the first fully integrated Gaganyaan crew module and service module to fly the complete mission profile before a human crew is placed aboard. The successful return to flight ends the four-month stand-down that began with a PSLV-C62 third-stage spin failure in January 2026, and restores full GSLV fleet operational status ahead of a busy second half of the year that includes the first PSLV-N1 assembled by NewSpace India Limited.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-to-launch-gslv-f17-with-gisat-1a.html",
        timestamp: "2026-05-22T08:00:00Z"
      }
    ]
  },

  "2026-05-21": {
    date: "May 21, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Targets Third Consecutive Attempt at Starship Flight 12 V3 Debut Tonight at 6:30 p.m. EDT — Booster 19 With 33 Raptor 3 Engines and Ship 39 Stand Ready on Orbital Launch Pad 2 as 55% Favorable Weather Holds for 90-Minute Window",
        body: "SpaceX is targeting a third consecutive launch opportunity opening at 6:30 p.m. EDT (22:30 UTC) tonight for Starship Flight 12, the inaugural flight of the Version 3 architecture, after standing down from two earlier attempts earlier this week for additional pre-flight verification without citing a specific technical cause. Booster 19, equipped with 33 newly designed Raptor 3 engines, and Ship 39, whose stretched propellant tanks push reusable low-Earth-orbit payload capacity past 100 metric tonnes, remain stacked and healthy on Orbital Launch Pad 2 at Starbase, Texas, with the 90-minute window running from 6:30 to 8:00 p.m. EDT. Flight 12 will carry 22 Starlink simulator satellites — the first payload ever flown aboard a Starship test vehicle — and attempt the first in-space Raptor engine relight before both stages target controlled ocean splashdowns in the Gulf of Mexico and Indian Ocean, with SpaceX prioritising clean V3 performance data over repeating the mechazilla tower catch achieved on Flight 11. Weather stands at 55% favorable for the window opening with conditions expected to improve across the duration, and SpaceX live coverage begins approximately 45 minutes before the targeted liftoff on X.",
        sourceUrl: "https://www.space.com/news/live/spacex-starship-flight-12-launch-updates-may-21-2026",
        timestamp: "2026-05-21T16:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO GSLV-F17 Lifts Off at 08:45 IST From Sriharikota Carrying EOS-05 Geostationary Imager in Return-to-Flight Mission — CE-20 Cryogenic Stage Performs Nominally, Ending Four-Month Stand-Down and Clearing Path to Gaganyaan G1 Uncrewed Test",
        body: "India's ISRO launched the GSLV-F17 rocket at 08:45 IST (03:15 UTC) from the Satish Dhawan Space Centre at Sriharikota, placing the EOS-05 (GISAT-1A) geostationary Earth observation satellite on its planned transfer trajectory in the agency's first mission since a PSLV-C62 third-stage spin failure grounded the fleet for four months beginning in January 2026. The indigenously developed CE-20 cryogenic upper stage — which underwent extensive additional cold-flow testing and turbopump acceptance inspections during the stand-down — performed nominally throughout its burn, validating the engineering changes made in the months since the January anomaly. EOS-05, a 2,100-kilogram geostationary imager, will image the entire Indian subcontinent every 30 minutes under routine operations and can compress coverage to five-minute repeat cycles over designated disaster priority zones, serving cyclone tracking, flood response, agricultural monitoring, and forest-fire detection agencies across South Asia. The return-to-flight success clears the critical gate event that ISRO Chairman V. Narayanan identified as the prerequisite for both the Gaganyaan G1 uncrewed orbital test and the debut flight of the first PSLV-N1 assembled by NewSpace India Limited.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-to-launch-gslv-f17-with-gisat-1a.html",
        timestamp: "2026-05-21T03:15:00Z"
      },
      {
        agency: "NASA",
        category: "Technology",
        headline: "NASA 2026 Lunabotics Challenge Concludes at Kennedy Space Center With Finals Day Showcasing 50 University Teams' Fully Autonomous Lunar Regolith Excavators — Competition Results Feed Directly Into Artemis Surface Infrastructure Engineering",
        body: "NASA's 2026 Lunabotics Challenge wrapped up its three-day final competition today at the Astronauts Memorial Foundation's Center for Space Education at Kennedy Space Center Visitor Complex in Florida, with 50 university teams having competed since Tuesday to build and operate fully autonomous rovers capable of excavating simulated lunar regolith and constructing protective berms without any real-time human control inputs — directly mirroring the communication latency constraints that make Earth-based teleoperation impractical from the lunar surface. The challenge directly addresses one of the Artemis programme's most pressing unresolved engineering problems: constructing earthen berms that shield surface equipment from landing and launch ejecta, shade cryogenic propellant storage tanks, and reduce radiation exposure for nuclear power systems intended to support sustained human presence on the Moon. Teams were evaluated on both the mechanical performance of their excavators and the robustness of their autonomy software, with NASA officials on-site to identify engineering talent and technology approaches that may influence future prototype specifications for Artemis surface operations. The competition is one of NASA's longest-running university engineering challenges and was streamed live each day from KSC, with standout robotic designs potentially informing NASA-funded development contracts that feed into Artemis crewed surface operations planning in the late 2020s.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-invites-media-to-annual-lunabotics-robotics-competition/",
        timestamp: "2026-05-21T18:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Shenzhou-23 Crew Names Expected Within Hours as Long March-2F Stands Ready at Jiuquan for NET May 24 Liftoff — Tianwen-2 Probe Transmits First Deep-Space Image En Route to July Rendezvous With Asteroid Kamoʻoalewa",
        body: "China's Manned Space Engineering Office is expected to announce the three-member Shenzhou-23 crew within the next 24 to 48 hours in keeping with its standard pre-launch operational security protocol, as the Long March-2F Y23 rocket sits in launch-ready status at Jiuquan Satellite Launch Center's Pad 921 targeting a no-earlier-than May 24 liftoff for the 11th crewed mission to Tiangong — with one crew member committed to an unprecedented year-long continuous stay that would more than double China's standard six-month rotation and generate critical physiological data for crewed lunar and Mars mission planning. Meanwhile, the Tianwen-2 planetary probe, which launched in May 2025, transmitted its first deep-space photograph this week as it continues its outbound trajectory toward near-Earth quasi-satellite asteroid Kamoʻoalewa (469219 Kamo'oalewa), where the spacecraft is expected to arrive for close-proximity operations and surface sample collection in July 2026 ahead of a planned Earth sample return in 2027. A Pakistani astronaut is also scheduled to fly aboard the subsequent Shenzhou-24 mission in October 2026 — making him the first foreign national to launch on a Chinese crewed spacecraft — contingent on a successful Shenzhou-23 mission completing the current Tiangong crew rotation. The concurrent progress of Shenzhou-23's crewed mission preparation and Tianwen-2's active deep-space journey underscores the remarkable breadth of China's simultaneously running crewed and robotic space exploration agenda.",
        sourceUrl: "https://www.space.com/space-exploration/missions/chinas-tianwen-2-spacecraft-sends-home-1st-photo-as-it-heads-for-mysterious-quasi-moon-asteroid",
        timestamp: "2026-05-21T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA-CAS SMILE Spacecraft Enters Commissioning Phase Two Days After Successful Vega-C Launch — All Four Science Instruments Healthy as Probe Begins Autonomous Orbit-Raising Burns Toward 121,000 km Polar Apogee Science Orbit",
        body: "The ESA–Chinese Academy of Sciences SMILE (Solar wind Magnetosphere Ionosphere Link Explorer) spacecraft entered its formal commissioning phase today in confirmed good health, two days after its successful Vega-C launch from Kourou on May 19, with all four science instruments — the soft X-ray imager, ultraviolet auroral imager, ion mass spectrometer, and magnetometer — powered on and confirmed functional following initial in-orbit checkouts conducted by ESA's mission operations team at ESOC in Darmstadt. SMILE has begun a series of autonomous apogee-raising manoeuvres that will gradually shape its highly elliptical science orbit over the coming weeks, ultimately reaching a 121,000 km north polar apogee for uninterrupted 45-hour observing sessions imaging Earth's magnetopause and bow shock, then sweeping to a 5,000 km southern perigee for high-bandwidth data downlinks to New Norcia and Malargüe ground stations. The spacecraft represents the first jointly designed and built ESA–China mission-level science satellite, with ESA providing the overall spacecraft bus and science operations leadership while the Chinese Academy of Sciences contributed the ultraviolet auroral imager and ion mass spectrometer, and its successful launch also marked Vega-C's return to operational service following a production-line defect stand-down. SMILE's three-year science programme will deliver the first-ever simultaneous global images of Earth's entire magnetosphere boundary layer while measuring in-situ particle and field conditions, data products expected to substantially improve space weather forecasting models protecting satellites, power grids, and aviation communications worldwide.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_lifts_off_on_quest_to_reveal_Earth_s_invisible_shield_against_the_solar_wind",
        timestamp: "2026-05-21T10:00:00Z"
      }
    ]
  },

  "2026-05-20": {
    date: "May 20, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Stands Down from Starship Flight 12 for Second Consecutive Day, Shifting V3 Debut to Thursday May 21 at 6:30 p.m. EDT — Third Scheduling Adjustment Since Monday as Booster 19 and Ship 39 Remain Stacked and Healthy on Pad 2",
        body: "SpaceX has stood down from Starship Flight 12 for a second consecutive day, shifting the V3 debut to no earlier than Thursday, May 21 at 6:30 p.m. EDT from Orbital Launch Pad 2 at Starbase, Texas — the third scheduling adjustment since the flight was originally targeted for Monday, May 18. Booster 19, equipped with 33 Raptor 3 engines, and Ship 39, with stretched propellant tanks that push reusable LEO payload capacity past 100 metric tonnes, remain fully stacked and in good health; SpaceX cited the need for additional pre-flight verification time without identifying a specific technical concern. Thursday's 90-minute window again opens at 6:30 p.m. EDT, with the mission carrying 22 Starlink simulator satellites — the first payload ever flown aboard a Starship test vehicle — and targeting an in-space Raptor engine relight before both stages make controlled ocean splashdowns. The repeated holds are consistent with SpaceX's pattern ahead of a new vehicle configuration's inaugural flight, as engineers work through the comprehensive verification checklist required before Flight 12 can attempt to make history as the most powerful rocket ever to fly.",
        sourceUrl: "https://www.space.com/news/live/spacex-starship-flight-12-launch-updates-may-20-2026",
        timestamp: "2026-05-20T22:30:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA Confirms Airplane-Sized Asteroid 2026 JP1 Safely Passes Earth at 4.2 Million Miles on May 20 — No Impact Threat as 180-Foot Space Rock Joins Growing List of Near-Earth Objects Tracked by JPL Planetary Defense Network",
        body: "An airplane-sized near-Earth asteroid designated 2026 JP1, measuring approximately 55 metres (180 feet) wide, safely flew past Earth today at a distance of 4.2 million miles — roughly 17 times the average Earth-Moon separation — posing zero impact threat, according to NASA's Jet Propulsion Laboratory. The object was placed on JPL's 'Next Five Approaches' dashboard in the days leading up to the encounter, where its distinctive brightness and steady orbital path provided useful data for refining trajectory models. Unlike the more dramatic 2026 JH2 pass two days prior, which came within a quarter of the lunar distance, JP1's much greater separation puts it firmly in the routine monitoring category even for an object of its size. NASA uses encounters like today's to calibrate ground-based radar and optical tracking systems that form the first line of planetary defense against genuinely hazardous impactors, continuously improving detection lead-times for any future object on a collision course.",
        sourceUrl: "https://www.newsbytesapp.com/news/science/nasa-asteroid-2026-jp1-will-safely-pass-earth-may-20/tldr",
        timestamp: "2026-05-20T12:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "Jeff Bezos Cautions That 2-3 Year Timelines for Orbital Data Centers Are 'A Little Ambitious' Despite Calling Space Compute 'Very Realistic,' as Blue Origin's Project Sunrise Eyes 51,600-Satellite Constellation with 2027 TeraWave Backbone",
        body: "Amazon founder Jeff Bezos publicly acknowledged on Wednesday that two-to-three-year industry timelines for deploying space-based AI data centers are 'a little ambitious,' even as he reaffirmed that offloading energy- and water-intensive compute to orbital platforms is 'very realistic' over a longer horizon. Bezos was responding to optimistic estimates from rivals including SpaceX CEO Elon Musk, who has suggested Starship could begin delivering orbital data center hardware within a similar timeframe. Blue Origin filed plans with the Federal Communications Commission in March to deploy Project Sunrise — a constellation of up to 51,600 orbital compute satellites operating in sun-synchronous orbits between 500 and 1,800 km altitude — backed by the TeraWave high-throughput communications constellation that Blue Origin is simultaneously seeking FCC approval to build. With New Glenn currently grounded pending an FAA investigation into the April upper-stage anomaly, the heavy-lift launch cadence Project Sunrise would ultimately require remains a significant open question for the company's orbital compute ambitions.",
        sourceUrl: "https://www.cnbc.com/2026/05/20/bezos-blue-origin-space-data-centers.html",
        timestamp: "2026-05-20T14:00:00Z"
      },
      {
        agency: "ESA",
        category: "Technology",
        headline: "ESA Hosts Final Cleanroom Media Viewing of Plato Planet-Hunting Satellite at ESTEC Noordwijk as Spacecraft Completes Thermal Vacuum Testing — 26-Camera Exoplanet Observatory on Track for Early 2027 Ariane 6 Launch to Sun-Earth L2",
        body: "The European Space Agency opened its ESTEC test centre in Noordwijk, the Netherlands to journalists on Wednesday for a final opportunity to see the Plato spacecraft inside the cleanroom before the observatory ships to Kourou for launch preparations — a milestone that reflects how deep into final integration the exoplanet hunter has progressed. Plato, short for PLAnetary Transits and Oscillations of stars, carries 26 individual cameras designed to discover potentially habitable, Earth-sized planets around bright, Sun-like stars by precisely measuring the tiny brightness dips produced when a planet crosses in front of its host. The spacecraft recently emerged from the Large Space Simulator at ESTEC having passed a full suite of thermal vacuum tests under simulated deep-space conditions — the most demanding environmental qualification a satellite undergoes before flight. Plato remains on schedule for launch aboard an Ariane 6 rocket from French Guiana in early 2027, following which it will travel to the Sun-Earth L2 Lagrange point to begin a multi-year photometric survey covering more than 200,000 nearby stars.",
        sourceUrl: "https://www.esa.int/Newsroom/Press_Releases/Media_invitation_Final_chance_to_see_Europe_s_planet-hunting_satellite_Plato_in_cleanroom",
        timestamp: "2026-05-20T10:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO GSLV-F17 Enters Final 24-Hour Countdown for Thursday's EOS-05 Return-to-Flight Launch at Sriharikota, With CE-20 Cryogenic Stage Cleared and Range Conditions Nominal — Success Unlocks Gaganyaan G1 Uncrewed Test Path",
        body: "India's ISRO entered the final 24-hour countdown phase on Wednesday for the GSLV-F17 return-to-flight mission, targeting liftoff at 03:15 UTC on Thursday, May 21, from the Satish Dhawan Space Centre at Sriharikota — the agency's first launch since a PSLV-C62 third-stage failure in January 2026 triggered a four-month fleet-wide safety review. The vehicle carries EOS-05 (GISAT-1A), a 2,100-kilogram geostationary Earth observation satellite capable of imaging the entire Indian subcontinent every 30 minutes under normal conditions and compressing coverage to five-minute repeat cycles over disaster-zone priority areas for cyclone, flood, and forest-fire monitoring. ISRO's indigenously developed CE-20 cryogenic upper stage — which underwent additional turbopump acceptance testing and cold-flow inspections in the wake of the January anomaly — has been formally declared flight-ready, with range and weather assessments at Sriharikota reported as nominal through Wednesday evening. ISRO Chairman V. Narayanan has described a successful GSLV-F17 launch as the critical gate event that clears the path to the Gaganyaan G1 uncrewed orbital test and the maiden flight of the first PSLV-N1 assembled by NewSpace India Limited.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-to-launch-gslv-f17-with-gisat-1a.html",
        timestamp: "2026-05-20T07:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China's Shenzhou-23 Crewed Mission to Tiangong Now Targeting NET May 24 Launch as Long March-2F Y23 Stands Ready at Jiuquan Pad 921 — One Taikonaut to Attempt Historic Year-Long Stay to Gather Deep-Space Health Data Ahead of Lunar Ambitions",
        body: "China's Manned Space Engineering Office has set a launch date of no earlier than May 24 for the Shenzhou-23 crewed mission to Tiangong, with the Long March-2F Y23 rocket standing in launch-ready status at Jiuquan's Pad 921 following its rollout on May 16 and successful completion of all joint function checks. In keeping with China's standard operational security protocol, the three-member crew names will be announced approximately 24 hours before liftoff, placing a public crew reveal on the evening of May 23 local time barring any further schedule adjustments. The mission's defining element is a planned year-long continuous spaceflight experiment for one of the three crew members — more than doubling China's standard six-month rotation — generating long-duration physiological and psychological data that will directly inform human lunar and Mars mission planning. A successful one-year Tiangong stay would also clear the schedule for a Pakistani astronaut to fly aboard Shenzhou-24 in October 2026, making him the first foreign national to launch on a Chinese crewed mission.",
        sourceUrl: "https://dailygalaxy.com/2026/05/china-shenzhou-23-mission-to-space-station/",
        timestamp: "2026-05-20T06:00:00Z"
      }
    ]
  },

  "2026-05-19": {
    date: "May 19, 2026",
    stories: [
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA-CAS SMILE Lifts Off on Vega-C at 05:52 CEST and Declares Full Mission Success as Solar Panels Deploy 57 Minutes Later, Sending First Signal to New Norcia Ground Station and Confirming Start of Three-Year Magnetosphere Science Mission",
        body: "The Solar wind Magnetosphere Ionosphere Link Explorer (SMILE), a joint ESA–Chinese Academy of Sciences spacecraft, lifted off from Europe's Spaceport in Kourou, French Guiana at 05:52 CEST (03:52 UTC) on Tuesday on a Vega-C rocket, with the first telemetry received by ESA's New Norcia ground station in Australia at 06:48 CEST and solar panels confirmed deployed just one minute later — the primary milestone that declared the launch a complete success. SMILE's four science instruments — a soft X-ray imager, an ultraviolet auroral imager, an ion mass spectrometer, and a magnetometer — will combine to produce the first simultaneous global images of Earth's magnetopause and bow shock boundaries while tracking auroral oval dynamics during uninterrupted 45-hour observing sessions from a 121,000 km polar apogee. The spacecraft will autonomously raise itself into its highly elliptical science orbit over the coming weeks, alternating between the deep polar apogee for extended imaging passes and a 5,000 km southern perigee for high-bandwidth data downlinks; SMILE entered commissioning phase healthy on all systems shortly after separating from Vega-C's upper stage. The launch also formally marks Vega-C's return to operational service following the stand-down to address a production-line component defect, and represents the first ESA–China mission-level cooperation in space science — a milestone CNSA described as a new breakthrough in China–Europe aerospace collaboration.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_lifts_off_on_quest_to_reveal_Earth_s_invisible_shield_against_the_solar_wind",
        timestamp: "2026-05-19T03:52:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "Starship Flight 12 Scrubbed for Second Consecutive Day as SpaceX Moves V3 Debut to Thursday May 21 — Booster 19 and Ship 39 Remain Stacked on Pad 2 While Teams Complete Additional Pre-Flight Checkouts Before Third Attempt at History's Most Powerful Rocket Launch",
        body: "SpaceX has postponed the Starship Version 3 debut to no earlier than Thursday, May 21, 2026, after standing down from Tuesday's 6:30 p.m. EDT launch window at Orbital Launch Pad 2 in Starbase, Texas — a second consecutive day of holds after the opening attempt was first moved from Monday to Tuesday and then to Wednesday evening before teams called a second stand-down without entering the formal countdown. SpaceX cited the need for additional time to complete pre-flight checkouts without specifying a technical root cause, a routine outcome during the lead-up to a configuration's inaugural flight as engineering teams work through the final items on an extensive verification checklist. Booster 19, equipped with 33 Raptor 3 engines, and Ship 39, whose stretched propellant tanks push reusable LEO payload capacity past 100 metric tonnes, remain fully stacked, fuelled-and-drained successfully during scrub days, and in good mechanical condition; Thursday's 90-minute window again opens at 6:30 p.m. EDT. Flight 12 will carry 22 Starlink simulator satellites — the first payload ever flown on a Starship test vehicle — and attempt the first in-space Raptor engine relight before both stages target ocean splashdowns rather than a tower catch, with SpaceX prioritising clean V3 performance data as the primary objective.",
        sourceUrl: "https://www.space.com/news/live/spacex-starship-flight-12-launch-updates-may-18-2026",
        timestamp: "2026-05-19T22:00:00Z"
      },
      {
        agency: "NASA",
        category: "Technology",
        headline: "NASA 2026 Lunabotics Challenge Opens at Kennedy Space Center as 50 College Teams Spend Three Days Building Autonomous Moon-Regolith Robots to Solve the Unsolved Problem of Constructing Protective Berms for Artemis Lunar Surface Infrastructure",
        body: "NASA kicked off its 2026 Lunabotics Challenge today at the Astronauts Memorial Foundation's Center for Space Education at the Kennedy Space Center Visitor Complex in Florida, with 50 college teams from across the United States competing through Thursday, May 21 to design, build, and operate fully autonomous rovers capable of excavating simulated lunar regolith and constructing protective berms — earthen mounds that would shield Artemis equipment from ejecta during landings and launches, shade cryogenic propellant storage tanks, and reduce radiation exposure for surface nuclear power systems. The robots must perform all excavation and construction without real-time human control inputs, simulating the round-trip communication latency that makes direct teleoperation impractical from Earth-based mission control, meaning teams must solve both the mechanical and software autonomy challenges simultaneously. Competition rounds run from 8 a.m. to 6 p.m. EDT each day, with NASA streaming events live through the agency's Lunabotics page; Wednesday, May 20 is the designated media day at KSC. The challenge is one of NASA's longest-running university engineering competitions and feeds directly into the Artemis programme's need for practical solutions to lunar surface infrastructure problems that no previous programme has had to address at scale.",
        sourceUrl: "https://www.techtimes.com/articles/316808/20260518/lunar-regolith-excavation-has-no-working-solution-50-college-robots-compete-kennedy-change-that.htm",
        timestamp: "2026-05-19T12:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Shenzhou-23 Crew Announcement Hours Away as Long March-2F Y23 Completes All Final Functional Checks at Jiuquan Pad 921 — Historic One-Year Taikonaut Mission Aboard Tiangong to Set New Chinese Spaceflight Endurance Record",
        body: "China's Shenzhou-23 crewed spacecraft and Long March-2F Y23 carrier rocket have cleared all pre-launch joint functional inspections and are in launch-ready status at Jiuquan Satellite Launch Center's Pad 921, with the China Manned Space Engineering Office expected to announce the three-member crew roughly 24 hours before liftoff in keeping with its standard operational security protocol — placing the announcement within the current news cycle as a late-May window approaches. The mission will relieve the Shenzhou-22 crew currently aboard Tiangong and will include one taikonaut committed to a full one-year continuous stay aboard the station, more than doubling China's standard six-month rotation and establishing a new national human spaceflight endurance record intended to generate long-duration physiological data in direct support of crewed lunar and Mars mission planning. CMSE has previously confirmed that the year-long crew member underwent more than 18 months of dedicated medical screening and adaptation training, underscoring how seriously China is treating the physiological unknowns that extend-duration spaceflight in low Earth orbit can help de-risk before human deep-space exploration begins in earnest. The launch will also mark the seventh crewed Tiangong rotation and comes as Tianwen-2 continues its outbound trajectory toward near-Earth asteroid Kamoʻoalewa, illustrating the breadth of CNSA's simultaneously running exploration agenda.",
        sourceUrl: "https://dailygalaxy.com/2026/05/china-shenzhou-23-mission-to-space-station/",
        timestamp: "2026-05-19T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Enters 48-Hour Countdown for GSLV-F17 Return-to-Flight With EOS-05 Geostationary Imager, Targeting 03:15 UTC Thursday to End Four-Month Stand-Down and Unlock Gaganyaan G1 Uncrewed Test and Full 2026 Launch Manifest",
        body: "India's ISRO formally entered the final 48-hour countdown phase Tuesday for the GSLV-F17 rocket carrying EOS-05 (GISAT-1A), targeting liftoff at 03:15 UTC on Thursday, May 21 from the Satish Dhawan Space Centre in Sriharikota — the agency's first launch since a third-stage spin failure grounded the PSLV-C62 vehicle in January 2026 and triggered a fleet-wide safety review. EOS-05, a 2,100-kilogram geostationary Earth observation satellite, is designed to image the entire Indian subcontinent every 30 minutes under normal operating conditions — compressible to five-minute repeat cycles over priority zones — serving agricultural monitoring, cyclone tracking, flood response, and disaster management agencies across South Asia once on station. The vehicle's indigenously developed CE-20 cryogenic upper stage, the component most scrutinised after the January anomaly, has completed additional cold-flow testing and turbopump acceptance inspections and is declared flight-ready; range and weather assessments were nominal as of Tuesday evening, and a backup window extends through May 25 before orbital insertion geometry requires a full window reassessment. ISRO Chairman V. Narayanan has repeatedly framed a successful GSLV-F17 as the critical gate event that clears the path to the Gaganyaan G1 uncrewed orbital test and the debut flight of the first PSLV-N1 assembled by NewSpace India Limited.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-to-launch-gslv-f17-with-gisat-1a.html",
        timestamp: "2026-05-19T07:00:00Z"
      }
    ]
  },

  "2026-05-18": {
    date: "May 18, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Science",
        headline: "Newly Discovered Asteroid 2026 JH2 Makes Safe Closest-Ever Flyby of Earth Today at 90,000 km — Under a Quarter of the Lunar Distance — as Virtual Telescope Project Streams Live Views at 3:45 p.m. EDT",
        body: "Asteroid 2026 JH2, a recently discovered Apollo-class near-Earth object measuring between 15 and 35 metres across, made its closest approach to Earth at 21:23 UTC on May 18, passing just 90,000 kilometres (56,000 miles) away — less than a quarter of the distance between Earth and the Moon, making it one of the closest recorded safe flybys of an asteroid this size. The object was discovered only eight days earlier by the Mount Lemmon Survey in Tucson, Arizona on May 10, underscoring how quickly planetary defence observation networks can characterise inbound objects and definitively rule out impact risks. At closest approach, 2026 JH2 brightened to approximately magnitude 11.5, placing it within reach of backyard telescopes under dark skies; the Virtual Telescope Project hosted a live webcast beginning at 3:45 p.m. EDT from remote observatories in Italy to capture the fleeting encounter. NASA confirmed zero probability of impact on this pass, and updated orbital calculations show no future Earth-intersection threat for at least the next century.",
        sourceUrl: "https://www.virtualtelescope.eu/2026/05/12/near-earth-asteroid-2026-jh2-extremely-close-encounter-online-observation-18-may-2026/",
        timestamp: "2026-05-18T21:23:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "Starship Flight 12 Enters Final 24-Hour Countdown for Tomorrow's 6:30 p.m. EDT Launch at Starbase as Booster 19 and Ship 39 Stand on Pad 2, Ready to Debut V3 Architecture With 22 Starlink Simulators as First-Ever Starship Payload",
        body: "With less than 24 hours until Starship Flight 12's opening window at 6:30 p.m. EDT on Tuesday, May 19, Booster 19 and Ship 39 are fully stacked on Orbital Launch Pad 2 at Starbase, Texas, having cleared all pre-flight checkpoints including a wet dress rehearsal and successful static fire of all 33 Raptor 3 engines on the Super Heavy booster. The mission marks the debut of the Version 3 Starship architecture: Booster 19 carries the newly designed Raptor 3 engines while Ship 39 features stretched propellant tanks that push the vehicle's reusable low-Earth-orbit payload capacity past 100 metric tonnes for the first time. Flight 12 will also deploy 22 Starlink simulator satellites, making it the first Starship test flight to carry an actual payload — two of the simulators are fitted with cameras aimed at Ship 39's heat shield tiles during atmospheric reentry to validate remote inspection methods ahead of future operational flights. Both stages are targeting controlled splashdowns — Booster 19 into the Gulf of Mexico and Ship 39 into the Indian Ocean — rather than a tower catch, prioritising clean V3 performance data over repeating the mechazilla milestone achieved on Flight 11.",
        sourceUrl: "https://spaceflightnow.com/2026/05/12/spacex-targets-may-19-for-debut-of-starship-super-heavy-version-3-launch-pad-2/",
        timestamp: "2026-05-18T18:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA-CAS SMILE Solar-Wind Mission Hours From Vega-C Liftoff at 05:52 CEST Tuesday as Final Pre-Launch Checks Clear at Kourou, Marking Vega-C Return-to-Flight and Opening New Era of Magnetosphere Science",
        body: "Final launch preparations are complete at Europe's Spaceport in Kourou, French Guiana, for the ESA–Chinese Academy of Sciences SMILE (Solar wind Magnetosphere Ionosphere Link Explorer) mission, with liftoff locked in for 05:52 CEST (03:52 UTC) on Tuesday, May 19 aboard a Vega-C — the rocket's return to flight following a months-long stand-down to address a production-line defect found in a subsystem component. SMILE carries four science instruments — a soft X-ray imager, an ultraviolet auroral imager, an ion mass spectrometer, and a magnetometer — that will for the first time simultaneously image the magnetosheath boundary and Earth's auroral ovals while measuring in-situ particle and field conditions, delivering a complete end-to-end picture of how the magnetosphere responds to solar wind input that no previous mission has been able to provide. The spacecraft will be placed in a highly elliptical orbit reaching 121,000 km above the North Pole for extended imaging passes lasting up to 45 continuous hours, before swooping to 5,000 km above the South Pole to downlink data at high bandwidth; solar panel deployment 63 minutes after liftoff will serve as the primary launch success confirmation milestone. SMILE's three-year science mission will improve space weather forecasting models and shed light on geomagnetic storm dynamics affecting satellites, power grids, and communications infrastructure worldwide.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-05-18T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China's Shenzhou-23 Stands Ready on Jiuquan Launchpad as Long March-2F Clears Final Checks, While Tianwen-2 Asteroid-Comet Probe Waits on Xichang Launch Tower Ahead of Late-May Double Launch Sprint",
        body: "China's Long March-2F Y23 rocket carrying the Shenzhou-23 crewed spacecraft has completed final function checks and joint tests at the Jiuquan Satellite Launch Center following its rollout to the launch pad on May 16, with the China Manned Space Engineering Office set to announce the three-member crew approximately 24 hours before liftoff in keeping with its standard operational security practice. The mission will relieve the Shenzhou-22 crew currently aboard Tiangong, and will include a landmark one-year continuous spaceflight experiment for a single crew member — more than double China's standard six-month rotation — gathering long-duration physiological data critical for future crewed lunar and Mars mission planning. Simultaneously, the Tianwen-2 planetary science probe has been mated with its Long March-3B Y110 rocket at Xichang following the stack's move from the technical area to the launch tower on May 14, positioning China for an extraordinarily busy close to May; Tianwen-2 will attempt China's first asteroid sample-return from near-Earth object Kamoʻoalewa before continuing to main-belt comet 311P/PANSTARRS. The two launches represent the most ambitious two-week cadence in the history of China's crewed and deep-space exploration programmes.",
        sourceUrl: "https://news.cgtn.com/news/2026-05-16/China-to-launch-Shenzhou-23-crewed-mission-to-space-station-1NbELlzHy7e/p.html",
        timestamp: "2026-05-18T06:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "New Glenn Remains Grounded as FAA Probes Both April Upper-Stage Engine Failure and Separate Launch Facility Anomaly, While Blue Origin Advances Blue Moon MK1 RF Testing in Parallel",
        body: "Blue Origin's New Glenn rocket remains grounded with no firm return-to-flight date following the Federal Aviation Administration's dual investigation into a BE-3U upper-stage engine thrust shortfall during the April 19 third flight — which stranded AST SpaceMobile's BlueBird-7 satellite in a lower-than-planned orbit where it is expected to deorbit and burn up — and a separate facility anomaly at Blue Origin's Cape Canaveral complex that the FAA is examining concurrently. CEO Dave Limp attributed the propulsion shortfall to one of the BE-3U engines producing insufficient thrust during the second upper-stage burn, and the company must demonstrate to the FAA that any system, process, or procedure implicated in the mishap has been corrected before New Glenn is cleared to fly again, a timeline that threatens the company's stated 2026 target of 8 to 12 launches. Blue Origin is using the stand-down period to advance preparations for its Blue Moon Mark 1 uncrewed lunar lander demonstration, which has completed thermal vacuum testing at Johnson Space Center and moved to Kennedy Space Center for radio frequency compatibility testing ahead of a planned 2026 Moon flight. The grounding also adds pressure to Blue Origin's early discussions around seeking outside investment for the first time in the company's 25-year history, as the window for achieving meaningful launch cadence this year narrows with each week the FAA investigation remains open.",
        sourceUrl: "https://hanfordsentinel.com/news/national/blue-origin-preps-for-moonshot-lander-mission-while-new-glenn-remains-grounded/article_c14a2f88-d44e-5113-b9b6-32911f1b709a.html",
        timestamp: "2026-05-18T10:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO's GSLV-F17 Three Days From May 21 Return-to-Flight as EOS-05 Geostationary Imager Passes Final Pre-Launch Reviews at Sriharikota, Opening the Path to Gaganyaan Uncrewed Test",
        body: "India's GSLV-F17 rocket carrying the EOS-05 (GISAT-1A) geostationary Earth observation satellite is three days from its planned May 21 liftoff at the Satish Dhawan Space Centre, Sriharikota, with countdown preparations progressing nominally as the vehicle undergoes final pre-launch function checks and range clearances following a four-month stand-down triggered by the PSLV-C62 third-stage spin failure in January 2026. EOS-05, a 2,100-kilogram geostationary imager designed to cover the entire Indian subcontinent every 30 minutes under routine operations — compressible to five-minute repeat cycles over designated priority zones — will serve disaster management, flood response, cyclone tracking, and agricultural monitoring agencies across India and South Asia once on station. ISRO's indigenously developed CE-20 cryogenic upper stage has undergone additional cold-flow testing and turbopump acceptance inspections since the January anomaly, with Chairman V. Narayanan describing a successful return-to-flight as the key that unlocks a demanding second-half manifest including the Gaganyaan G1 uncrewed orbital test and the first PSLV-N1 assembled by NewSpace India Limited. A launch scrub before May 25 would require a reassessment of the launch window given the geostationary transfer insertion geometry, raising the stakes for a clean countdown on the first attempt.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-to-launch-gslv-f17-with-gisat-1a.html",
        timestamp: "2026-05-18T07:00:00Z"
      }
    ]
  },

  "2026-05-17": {
    date: "May 17, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Mission",
        headline: "Dragon CRS-34 Docks Successfully at ISS Harmony Port at 6:37 a.m. EDT, Delivering 6,500 Pounds of Science Hardware to Expedition 74 in First-Ever Sixth Flight of a Cargo Dragon Capsule",
        body: "SpaceX's Dragon cargo spacecraft CRS-34 autonomously docked to the forward port of the ISS Harmony module at 6:37 a.m. EDT on Sunday, May 17, completing the two-day transit from its May 15 launch at Cape Canaveral and delivering approximately 6,500 pounds of science hardware, crew provisions, and equipment for Expedition 74. The mission marks the sixth flight of capsule C209 — the first cargo Dragon ever to reach that milestone — underscoring how SpaceX's reusable vehicle economics have quietly transformed station resupply operations since CRS-22 in 2021. Key payloads include a wood-derived bone scaffold targeting new osteoporosis therapies, a red blood cell and spleen physiology study, and a simulator fidelity experiment assessing how well ground-based microgravity rigs replicate on-orbit conditions. Dragon is expected to remain berthed at Harmony for approximately one month before an undocking and West Coast splashdown in mid-June.",
        sourceUrl: "https://www.nasa.gov/mission/nasa-spacex-crs-34/",
        timestamp: "2026-05-17T10:37:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "Starship Flight 12 Countdown Enters Final 48 Hours as Booster 19 and Ship 39 Stand Ready on Pad 2 for Tuesday's 6:30 p.m. EDT Window — First V3 Flight to Deploy 22 Starlink Simulators and Attempt In-Space Raptor Relight",
        body: "With two days remaining until Starship Flight 12's opening launch window at 6:30 p.m. EDT on Tuesday, May 19, Booster 19 and Ship 39 remain stacked on Orbital Launch Pad 2 at Starbase, Texas, following a clean wet dress rehearsal and dual static fire campaign that confirmed all 33 Raptor 3 engines are flight-ready. The mission will debut the Version 3 Starship-Super Heavy architecture, featuring stretched upper-stage propellant tanks that push reusable LEO payload capacity past 100 metric tonnes, and will carry the first actual payload ever flown on a Starship test vehicle — 22 Starlink simulator satellites, two of which carry cameras aimed at Ship 39's heat shield during reentry to validate remote inspection methods. An additional first is planned: a single in-space Raptor engine relight in the vacuum of orbit, a prerequisite for the propellant-transfer and point-to-point flight profiles underpinning Starship's full mission architecture. Both stages are targeting ocean splashdowns to prioritize clean V3 performance data ahead of future tower catch attempts.",
        sourceUrl: "https://spaceflightnow.com/2026/05/12/spacex-targets-may-19-for-debut-of-starship-super-heavy-version-3-launch-pad-2/",
        timestamp: "2026-05-17T12:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "FAA Orders Blue Origin to Investigate New Glenn Upper-Stage Anomaly That Left BlueBird-7 in Wrong Orbit, as CEO Dave Limp Signals Company May Seek Outside Investment to Fund 100-Launch-Per-Year Ambition",
        body: "The Federal Aviation Administration has ordered Blue Origin to conduct a formal investigation into a New Glenn upper-stage malfunction during the rocket's third flight last month, in which a propulsion anomaly prevented the AST SpaceMobile BlueBird-7 satellite from reaching its intended orbit despite a successful first-stage booster recovery. The anomaly is the second consecutive New Glenn upper-stage shortfall after a payload deployment problem on its second flight, raising questions about the stage's reliability as the company targets an aggressive 12-plus launches in 2026 and a longer-term goal of 100 per year. Separately, CEO Dave Limp told employees at a company all-hands meeting this month that Blue Origin may need to pursue outside investment for the first time in its 25-year history — funded entirely by Jeff Bezos to the tune of roughly $28 billion — to finance that expanded launch cadence. Blue Origin is simultaneously scouting a 1.3-million-square-foot manufacturing and R&D campus near Hutto, Texas, which would add more than 2,000 jobs if approved.",
        sourceUrl: "https://www.presidentialprayerteam.org/2026/05/02/faa-orders-investigation-after-blue-origins-rocket-mishap/",
        timestamp: "2026-05-17T09:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Targets May 21 for GSLV-F17 Return-to-Flight With EOS-05 Geostationary Imager, Aiming to End Four-Month Stand-Down and Open Path to Gaganyaan Uncrewed Test",
        body: "India's ISRO has set May 21 as its target for the GSLV-F17 return-to-flight mission carrying the EOS-05 (GISAT-1A) geostationary Earth observation satellite, as countdown preparations begin at the Satish Dhawan Space Centre in Sriharikota following a four-month launch stand-down triggered by a PSLV-C62 third-stage spin failure in January. EOS-05, weighing approximately 2,100 kilograms, is designed to image the entire Indian subcontinent every 30 minutes under normal operations and compress repeat cycles to five minutes over priority zones, serving disaster management, cyclone tracking, flood response, and agricultural monitoring agencies. The mission's indigenously developed CE-20 cryogenic upper stage underwent additional cold-flow testing and turbopump inspections after the January anomaly, with ISRO Chairman V. Narayanan calling a successful return-to-flight the key to unlocking a packed 2026 manifest that includes the Gaganyaan G1 uncrewed orbital test and the first privately assembled PSLV-N1 built by NewSpace India Limited. Additional schedule adjustments remain possible depending on range and weather conditions.",
        sourceUrl: "https://www.indiastrategic.in/isro-all-set-to-return-to-rocket-launches-in-may-2026/",
        timestamp: "2026-05-17T07:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA SMILE Solar-Wind Mission Cleared for Tuesday's 05:52 CEST Vega-C Liftoff After Technical Review, Set to Give Humanity Its First Complete View of Earth's Magnetospheric Response to Solar Wind",
        body: "ESA and the Chinese Academy of Sciences confirmed that the joint SMILE (Solar wind Magnetosphere Ionosphere Link Explorer) spacecraft is fully cleared for its Tuesday, May 19 launch at 05:52 CEST from Europe's Spaceport in Kourou, French Guiana, after a precautionary stand-down to investigate a production-line defect in a Vega-C subsystem component was resolved to all partners' satisfaction. SMILE will be the first spacecraft to simultaneously combine soft X-ray imaging of Earth's magnetosheath and bow shock with UV auroral imaging and in-situ particle and magnetic field measurements, providing the first end-to-end picture of how the magnetosphere reacts to solar wind input — science that the Wolf Amendment has barred NASA from pursuing in collaboration with China since 2011. The spacecraft's highly elliptical orbit will carry it 121,000 km above the North Pole for imaging passes lasting up to 45 continuous hours before swinging down to 5,000 km for data downlink, enabling unprecedented long-dwell observations of auroral dynamics. Solar panel deployment 63 minutes after liftoff is the primary launch success milestone, after which SMILE enters a commissioning phase ahead of its three-year science mission.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-05-17T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China's Tianwen-2 Asteroid-Comet Mission on Track for Late-May Xichang Launch as Shenzhou-23 Crew Announcement Expected Within 24 Hours of Liftoff Targeting End of Month",
        body: "China's space program is preparing for its most ambitious two-week launch window in history, with the Tianwen-2 dual-target planetary science mission and the crewed Shenzhou-23 orbital station flight both targeting late-May launches within days of each other. Tianwen-2 — set to launch from Xichang aboard a Long March 3B — will attempt China's first asteroid sample-return, collecting surface material from near-Earth asteroid Kamoʻoalewa before continuing to main-belt comet 311P/PANSTARRS, with the retrieved samples expected back on Earth in the early 2030s. Shenzhou-23, the crewed successor to the extended Shenzhou-22 rotation, will include a groundbreaking one-year continuous spaceflight experiment for a single crew member — more than double China's standard six-month rotation — gathering physiological data in direct support of long-duration lunar and Mars mission planning. The China Manned Space Engineering Office is expected to announce the three-member Shenzhou-23 crew approximately 24 hours before launch, consistent with its standard operational security practice.",
        sourceUrl: "https://english.news.cn/20260418/0105fa9c521d4b99ba70d78336e17fcb/c.html",
        timestamp: "2026-05-17T06:00:00Z"
      }
    ]
  },

  "2026-05-16": {
    date: "May 16, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Mission",
        headline: "Dragon CRS-34 Midway Through 37-Hour Transit to ISS After Friday Launch, Docking at Harmony Forward Port Locked In for 7:05 a.m. EDT Sunday With Expedition 73 Crew Standing By",
        body: "SpaceX's Dragon CRS-34 cargo spacecraft is midway through its two-day free-flight transit to the International Space Station following its successful May 15 launch from Cape Canaveral, with autonomous docking at the forward port of the Harmony module confirmed for approximately 7:05 a.m. EDT on Sunday, May 17. The capsule — on its sixth flight — is carrying roughly 6,500 pounds of science hardware and crew supplies for Expedition 73, including a wood-derived bone scaffold for osteoporosis research and a red blood cell physiology study examining how spaceflight alters human biology in microgravity. NASA flight controllers at Johnson Space Center are monitoring Dragon's approach trajectory and verifying docking corridor clearances in preparation for Sunday's arrival. Following docking, the capsule is expected to remain berthed at the station for approximately one month before returning to Earth with time-sensitive research samples, targeting a splashdown off the coast of California in mid-June.",
        sourceUrl: "https://spaceflightnow.com/2026/05/15/live-coverage-spacex-makes-another-attempt-to-launch-space-station-cargo-mission/",
        timestamp: "2026-05-16T14:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "Starship Flight 12 Three Days From Launch as SpaceX Confirms First-Ever In-Space Raptor Relight Planned for May 19 Mission Alongside 22 Starlink Simulator Payload Deployment",
        body: "With three days remaining before Starship Flight 12's May 19 launch window opens at 6:30 p.m. EDT from Orbital Launch Pad 2 at Starbase, SpaceX has confirmed an additional test objective: a single Raptor engine relight while Ship 39 is in space, making it the first time a Raptor has been restarted in the vacuum of orbit. The relight demonstration, combined with the deployment of 22 Starlink simulator satellites representing the first actual payload ever carried on a Starship test vehicle, makes Flight 12 the most operationally ambitious Starship mission to date. Booster 19 — equipped with 33 Raptor 3 engines — and Ship 39, with its stretched propellant tanks raising reusable LEO payload capacity past 100 metric tonnes, have completed all pre-flight testing including a successful wet dress rehearsal. Both stages are targeting controlled ocean splashdowns rather than a tower catch, prioritizing clean V3 architecture data over repeating the Flight 11 mechazilla milestone.",
        sourceUrl: "https://spaceflightnow.com/2026/05/12/spacex-targets-may-19-for-debut-of-starship-super-heavy-version-3-launch-pad-2/",
        timestamp: "2026-05-16T11:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Mission",
        headline: "Blue Moon MK1 Lander 'Endurance' Relocated From Johnson Space Center to Kennedy for Final Pre-Flight Testing as Full-Scale MK2 Mockup Begins Supporting Artemis III Crew Training at JSC",
        body: "Blue Origin's Blue Moon Mark 1 lunar lander, named Endurance, has completed thermal vacuum testing inside Chamber A at NASA's Johnson Space Center and has been relocated to Kennedy Space Center in Florida for additional pre-flight environmental verification ahead of its planned uncrewed demonstration mission later in 2026. Simultaneously, a full-scale mockup of the Blue Moon Mark 2 crew lander arrived at Johnson Space Center this month to support Artemis III and Artemis IV mission simulations, enabling astronauts to practice cabin ingress, suit donning, and crew operations in a realistic lander environment before the crewed lunar landing missions. NASA's Artemis III mission, which calls for dual commercial lander availability from both Blue Origin and SpaceX, is being refined following an updated mission plan published earlier this month. The MK1 demonstration flight will provide critical flight heritage data for the MK2 crew lander system Blue Origin is developing under NASA's Human Landing System contract.",
        sourceUrl: "https://www.nasa.gov/missions/artemis/blue-origin-moon-lander-completes-testing-at-nasa-vacuum-chamber/",
        timestamp: "2026-05-16T09:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Science",
        headline: "NASA-ISRO NISAR Radar Satellite Delivers High-Resolution Surface Imagery of Indian Subcontinent as Joint Mission Enters Full Science Operations Phase, Producing Soil Moisture and Deformation Maps",
        body: "The NASA-ISRO Synthetic Aperture Radar (NISAR) satellite has delivered its first high-resolution radar images of India, according to ISRO, marking the commencement of full science operations for the joint mission following its declaration of operational status in January 2026. India's National Remote Sensing Centre has processed initial NISAR L-band data to generate 100-meter resolution soil moisture maps covering central India and the Indo-Gangetic plains, with the data set expected to serve agricultural planning, disaster response, and groundwater management applications across the subcontinent. NISAR's dual-frequency SAR system — the only such instrument ever flown in space — allows it to map surface deformation, ecosystem disturbance, ice dynamics, and hazard zones on a 12-day repeat cycle, providing continuous monitoring of India's diverse terrain types from the Himalayas to coastal deltas. The mission is a landmark collaboration between NASA's Jet Propulsion Laboratory and ISRO, with each agency contributing one of the satellite's two radar frequency bands.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-isro-satellite-sends-first-radar-images-of-earths-surface/",
        timestamp: "2026-05-16T07:00:00Z"
      },
      {
        agency: "ESA",
        category: "Science",
        headline: "ESA Opens Media Registration for May 20 Final Cleanroom Viewing of PLATO Exoplanet Spacecraft at ESTEC Ahead of Transport to Kourou, With 26-Camera Observatory on Track for Early 2027 Ariane 6 Launch",
        body: "ESA has issued a media invitation for a final cleanroom viewing of its PLATO (PLAnetary Transits and Oscillations of stars) spacecraft at the European Space Research and Technology Centre in Noordwijk, Netherlands, on May 20 — the last opportunity to see the satellite before it is prepared for shipment to Europe's Spaceport in Kourou, French Guiana, ahead of an early 2027 Ariane 6 launch. PLATO recently emerged from ESA's Large Space Simulator chamber, where it successfully completed a demanding series of thermal-vacuum tests verifying the spacecraft and its 26 wide-field cameras can withstand the temperature extremes of space while maintaining the ultraprecise photometric stability needed to detect the tiny brightness dips caused by Earth-sized planets transiting Sun-like stars. The mission aims to discover and characterize rocky planets in the habitable zones of nearby bright stars, measuring planetary sizes to better than 3% accuracy and stellar ages to better than 10% by combining transit photometry with asteroseismology. PLATO will operate from the Sun-Earth L2 Lagrange point for a nominal four-year mission following its Ariane 6 insertion, with an extended science phase possible through 2034.",
        sourceUrl: "https://www.esa.int/Newsroom/Press_Releases/Media_invitation_Final_chance_to_see_Europe_s_planet-hunting_satellite_Plato_in_cleanroom",
        timestamp: "2026-05-16T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Confirms Tianwen-2 Asteroid Sample-Return Mission on Track for Late-May Launch as Shenzhou-23 Crew Assignment Announcement Expected Within Days",
        body: "China's National Space Administration confirmed that the Tianwen-2 mission, targeting a close flyby and surface sample collection from near-Earth asteroid Kamoʻoalewa before continuing to the main-belt comet 311P/PANSTARRS, remains on schedule for a launch window opening at the end of May from the Xichang Satellite Launch Center aboard a Long March 3B rocket. Tianwen-2 would mark China's first asteroid sample-return attempt and the first mission to visit both an asteroid and a comet, with the retrieved Kamoʻoalewa samples expected to return to Earth in the early 2030s while the spacecraft continues its extended journey to 311P/PANSTARRS. Separately, China's manned space engineering office is expected to announce the three-member Shenzhou-23 crew within days of the planned late-May crewed launch to Tiangong, which will relieve the extended Shenzhou-22 crew and begin a groundbreaking one-year continuous spaceflight experiment for one crew member. The missions together represent the most ambitious two-week launch cadence in China's space program history.",
        sourceUrl: "https://english.news.cn/20260418/0105fa9c521d4b99ba70d78336e17fcb/c.html",
        timestamp: "2026-05-16T06:00:00Z"
      }
    ]
  },

  "2026-05-15": {
    date: "May 15, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "SpaceX Dragon CRS-34 Lifts Off on Third Attempt at 6:05 p.m. EDT After Two Weather Scrubs, Carrying 6,500 Pounds to ISS With Docking Targeted for Sunday Morning",
        body: "NASA and SpaceX successfully launched the Dragon CRS-34 cargo spacecraft aboard a Falcon 9 from Space Launch Complex 40 at Cape Canaveral Space Force Station at 6:05 p.m. EDT on May 15, ending a nearly week-long weather ordeal that saw a cumulus cloud violation cancel the first attempt on May 11 and an anvil cloud rule abort the second attempt with under a minute left in the countdown on May 13. Booster B1096 flew its sixth mission, returning to Landing Zone 1 approximately eight minutes after liftoff, while the Dragon capsule — on its own sixth flight — separated cleanly and began its 38-hour free-flight transit to the station. The capsule carries approximately 6,500 pounds of science hardware and crew provisions for ISS Expedition 73, headlined by a wood-derived bone scaffold for osteoporosis research and a red blood cell physiology study examining how spaceflight alters human biology. Autonomous docking at Harmony's forward port is targeted for approximately 7:00 a.m. EDT on Sunday, May 17.",
        sourceUrl: "https://www.nasa.gov/blogs/spacestation/2026/05/13/nasa-spacex-target-may-15-for-resupply-mission-launch/",
        timestamp: "2026-05-15T22:05:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA's Psyche Spacecraft Completes Mars Gravity-Assist Flyby, Passing 2,800 Miles From the Red Planet With All Science Instruments Active to Calibrate Imager and Hunt for Faint Martian Dust Ring",
        body: "NASA's Psyche spacecraft successfully executed its Mars gravity-assist flyby on May 15, passing within approximately 2,800 miles of the planet's surface at roughly 12,333 mph, using Martian gravity to bend its trajectory toward the metal-rich asteroid 16 Psyche and save significant onboard propellant. All of Psyche's science instruments were powered on during the encounter — the first opportunity in flight to calibrate the multispectral imager against an object larger than a few pixels — with thousands of observations of Mars captured to refine imaging techniques critical for the 2029 asteroid orbit phase. Scientists also monitored for evidence of a faint Martian dust ring generated by micrometeorite impacts on Phobos and Deimos, data that could help characterize the Martian system's debris environment. The flyby is the mission's sole planned gravity assist; a clean execution places Psyche on a direct trajectory for asteroid 16 Psyche, currently scheduled for orbit insertion in July 2029 with prime science operations beginning in August.",
        sourceUrl: "https://science.nasa.gov/blogs/psyche/2026/05/08/nasas-psyche-mission-to-fly-by-mars-for-gravity-assist/",
        timestamp: "2026-05-15T14:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "With Starship Flight 12 Four Days Out, SpaceX Confirms 22 Starlink Simulator Satellites as First-Ever Starship Payload — Two Equipped With Cameras to Image Heat Shield During Reentry",
        body: "As the May 19 launch target for Starship Flight 12 approaches, SpaceX confirmed the mission's full payload manifest: 22 Starlink simulator satellites that represent the first actual payload ever flown on a Starship test vehicle, with two of those simulators carrying imaging cameras pointed at Ship 39's heat shield tiles during atmospheric reentry to validate remote inspection methods for future missions. The simulators faithfully replicate the mass and interface properties of production Starlink V3 spacecraft, giving engineers real deployment sequencing data without risking flight-ready hardware on the debut of the new V3 architecture. Booster 19 — carrying 33 Raptor 3 engines — and Ship 39, with its stretched propellant tanks raising the stack's reusable LEO payload capacity past 100 metric tonnes, have completed all ground testing including a successful static fire and wet dress rehearsal at Orbital Launch Pad 2 at Starbase. The mission profile calls for ocean splashdowns of both stages to prioritize clean-sheet V3 performance data rather than repeating the tower-catch milestone achieved on Flight 11.",
        sourceUrl: "https://www.advanced-television.com/2026/05/14/spacexs-starship-launch-will-carry-surprises/",
        timestamp: "2026-05-15T10:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA's SMILE Solar Wind Mission Enters Final Launch Countdown for Monday's 05:52 CEST Vega-C Liftoff, Marking Rocket's Return-to-Flight and First Complete View of Earth's Magnetospheric Response",
        body: "With four days to liftoff, ESA and the Chinese Academy of Sciences confirmed the SMILE (Solar wind Magnetosphere Ionosphere Link Explorer) mission remains firmly on track for its May 19 launch at 05:52 CEST from Europe's Spaceport in Kourou, French Guiana, aboard a Vega-C rocket — the vehicle's return-to-flight after a precautionary stand-down to address a production-line defect in a subsystem component. SMILE will be the first spacecraft to simultaneously combine soft X-ray imaging of Earth's magnetosheath and bow shock with ultraviolet auroral imaging and in-situ particle and magnetic field measurements, providing the first complete end-to-end picture of how the magnetosphere responds to solar wind input. The spacecraft's highly elliptical orbit will carry it 121,000 km above the North Pole for extended imaging passes, then swing down to 5,000 km above the South Pole for high-bandwidth data downlink — enabling uninterrupted auroral imaging for up to 45 hours at a stretch. Solar panel deployment 63 minutes after liftoff will serve as the primary launch success confirmation, after which SMILE enters a commissioning phase ahead of its planned three-year science mission.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-05-15T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China's Shenzhou-23 Launch Window Opens Within Days as Tianzhou-10 Completes Docking and Hands Over 6.3 Tonnes of Cargo Including First-Ever Year-Long Mission Supplies",
        body: "With Tianzhou-10 successfully docked at the Tianhe aft port of the Tiangong space station, the China Manned Space Engineering Office confirmed Shenzhou-23 launch preparations at Jiuquan are in their final stage, targeting a late-May liftoff to relieve the Shenzhou-22 crew who have served an extended rotation since late 2025. The Tianzhou-10 cargo ship delivered over 6.3 tonnes of supplies across more than 220 items, including a new-generation EVA spacesuit, a space treadmill, and science experiment packages for the arriving crew's research program — along with the additional provisions and propellant needed to sustain a groundbreaking one-year continuous human spaceflight experiment planned for one Shenzhou-23 crew member. That year-long stay, more than double China's standard six-month rotation, is intended to gather long-duration physiological data supporting future crewed lunar and Mars mission planning, and would overlap with the Shenzhou-24 visit from Pakistan's first astronaut crew candidates Khurram Daud and Muhammad Zeeshan Ali. China's manned space office is expected to announce the Shenzhou-23 crew assignments approximately 24 hours before launch, in keeping with its standard operational security practice.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/05/china-cargo-crew-reusability/",
        timestamp: "2026-05-15T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Begins GSLV F17 Countdown at Sriharikota With EOS-05 Geostationary Imaging Satellite Targeting May 21 Return-to-Flight After Four-Month Stand-Down",
        body: "The Indian Space Research Organisation commenced countdown operations for GSLV F17 at the Second Launch Pad of the Satish Dhawan Space Centre, advancing toward a May 21 liftoff window opening at 08:45 IST — the agency's first launch since a PSLV-C62 third-stage spin failure grounded all Indian rockets in January 2026. The payload, EOS-05 (also designated GISAT-1A), is a 2.2-tonne geostationary Earth observation satellite designed to image the entire Indian subcontinent every 30 minutes under normal operations — compressible to five-minute repeat cycles over priority zones — serving disaster management, cyclone tracking, flood response, and agricultural agencies. ISRO's critical Cryogenic Upper Stage, powered by the indigenously developed CE-20 engine, has undergone additional cold-flow testing and turbopump acceptance inspections since the January anomaly, with ISRO Chairman V. Narayanan calling a successful return-to-flight the gateway to a packed follow-on manifest including the Gaganyaan G1 uncrewed orbital test flight. A successful GSLV F17 mission would also clear the path for the first privately assembled PSLV-N1, built by NewSpace India Limited.",
        sourceUrl: "https://www.indiastrategic.in/isro-all-set-to-return-to-rocket-launches-in-may-2026/",
        timestamp: "2026-05-15T04:00:00Z"
      }
    ]
  },

  "2026-05-14": {
    date: "May 14, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "SpaceX Dragon CRS-34 Scrubbed a Second Time on May 13 After Cumulus Cloud Violation in Final Minute of Countdown, With Third Launch Attempt Now Targeting May 15 at 6:05 p.m. EDT",
        body: "NASA and SpaceX stood down from a second attempt to launch the Dragon CRS-34 cargo mission on May 13, after the countdown progressed to the final minute before a cumulus cloud rule violation over Space Launch Complex 40 at Cape Canaveral forced the abort — a sharper call than the first scrub on May 11, which was called well in advance of fueling. The Falcon 9 rocket carrying approximately 6,500 pounds of science, crew provisions, and hardware for ISS Expedition 73 is now targeting a third launch attempt on Friday, May 15 at 6:05 p.m. EDT (2205 UTC), with a 24-hour backup on Saturday. Among the time-sensitive payloads engineers are monitoring closely is a microgravity bone-scaffold investigation targeting osteoporosis therapies, which carries defined maximum on-ground storage limits. Weather forecasters are projecting improved but still uncertain conditions over the Cape for Friday's window.",
        sourceUrl: "https://spaceflightnow.com/2026/05/12/live-coverage-nasa-spacex-to-launch-34th-cargo-dragon-mission-to-the-space-station/",
        timestamp: "2026-05-14T00:30:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA's Psyche Spacecraft on Final Approach for Tomorrow's Mars Gravity-Assist Flyby, Passing Within 2,800 Miles at 12,333 MPH While Imaging the Red Planet and Searching for a Faint Martian Dust Ring",
        body: "NASA's Psyche spacecraft is locked in for a gravity-assist flyby of Mars on May 15, when it will pass approximately 2,800 miles from the planet's surface at roughly 12,333 mph — using Martian gravity to reshape its trajectory and conserve propellant on its path to metal-rich asteroid 16 Psyche, believed to be the exposed iron-nickel core of a differentiated planetesimal, with orbit insertion targeted for July 2029. During the encounter, the mission team will use Psyche's multispectral imager to capture thousands of observations of Mars, calibrating imaging techniques that will be essential when the spacecraft begins orbiting its asteroid target. Scientists will also watch for evidence of a faint Martian dust ring that micrometeorites striking Phobos and Deimos may generate, which could become visible depending on the sunlight geometry at flyby. NASA's fleet at Mars — including Odyssey, Mars Reconnaissance Orbiter, Curiosity, and Perseverance — alongside ESA's Mars Express and ExoMars Trace Gas Orbiter, will provide navigation support and coordinated observations throughout the encounter.",
        sourceUrl: "https://science.nasa.gov/blogs/psyche/2026/05/08/nasas-psyche-mission-to-fly-by-mars-for-gravity-assist/",
        timestamp: "2026-05-14T12:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "SpaceX Confirms Starship Flight 12 Will Carry 22 Starlink Simulators as First-Ever Payload on a Starship Test Flight, With Two Satellites Equipped to Image the Heat Shield During Reentry",
        body: "SpaceX confirmed on May 14 that Starship Flight 12, targeting no earlier than May 19 from Orbital Launch Pad 2 at Starbase, will carry 22 Starlink simulator satellites — marking the first time a Starship test flight has flown with an actual payload. Two of the 22 simulators are outfitted with imaging payloads to photograph Ship 39's heat shield tiles during atmospheric reentry, transmitting data to ground operators to validate methods for remotely assessing heat shield readiness ahead of future return-to-launch-site attempts. The simulators represent realistic mass and interface emulations of production Starlink V3 spacecraft, providing engineers with real-world data on deployment sequencing without risking full production hardware on a test vehicle. Flight 12 also debuts the Version 3 Starship architecture, with Booster 19 carrying 33 Raptor 3 engines and Ship 39 featuring stretched propellant tanks; the Super Heavy booster will perform a soft splashdown in the Gulf of Mexico rather than a tower catch on this flight.",
        sourceUrl: "https://www.advanced-television.com/2026/05/14/spacexs-starship-launch-will-carry-surprises/",
        timestamp: "2026-05-14T10:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "Blue Origin CEO Dave Limp Confirms Company Is Exploring Outside Investment for First Time in 25-Year History to Fund 100-Launches-Per-Year Ambition and Deploy 5,408-Satellite TeraWave Constellation",
        body: "Blue Origin CEO Dave Limp told employees at an all-hands meeting that the company is for the first time considering external investment, acknowledging that Jeff Bezos's sole-backer model cannot alone fund the capital needed to reach the stated ambition of 100 New Glenn launches per year — primarily to deploy the 5,408-spacecraft TeraWave broadband constellation announced in January 2026 to sell terabit-class connectivity to data-center operators and enterprises. Limp did not rule out a future IPO, and the company has updated its employee stock plan to include external funding rounds and tender offers as liquidity events, a structural change that signals seriousness about external capital. The move comes as SpaceX prepares for what is expected to be the largest IPO in history at a roughly $1.75 trillion valuation, and follows Blue Origin's challenging spring — including the April New Glenn upper-stage failure and an ongoing FAA return-to-flight review. Limp separately confirmed a 2026 cadence target of eight to twelve New Glenn missions, down from an internal goal of fourteen, contingent on FAA clearance.",
        sourceUrl: "https://thenextweb.com/news/blue-origin-external-funding-spacex-ipo-bezos",
        timestamp: "2026-05-14T08:00:00Z"
      },
      {
        agency: "ESA",
        category: "Policy",
        headline: "Third Annual ESA Earth Observation Commercialisation Forum Concludes Three-Day Seville Summit, Wrapping Up Roadmap Sessions Spanning EO Value Chain From Constellations to AI-Driven Downstream Applications",
        body: "ESA's third annual Earth Observation Commercialisation Forum (ESA CommEO) concluded today in Seville, Spain, closing a three-day programme that brought together the global EO ecosystem — manufacturers, launch providers, data analytics platforms, investors, and downstream application developers — to set the strategic direction for Europe's commercial Earth observation sector over the next decade. The forum's opening session featured ESA Director General Josef Aschbacher, European Commission representatives, and senior European Investment Bank figures discussing how public funding frameworks and regulatory environments can best catalyse private investment in EO infrastructure and services. Key discussions covered the full value chain: constellation financing, AI-driven analytics, commercialisation of Copernicus data, and how ESA's BIC incubators, BOOST accelerator, and co-investment schemes support European start-ups in building global EO data products. This year's expanded attendance reflects the rapid growth of Europe's commercial EO sector, driven by new constellations from Airbus and Telespazio alongside a growing cohort of specialised imaging and analytics start-ups.",
        sourceUrl: "https://www.esa.int/About_Us/Corporate_news/ESA_hosts_China_s_space_leaders",
        timestamp: "2026-05-14T17:00:00Z"
      }
    ]
  },

  "2026-05-13": {
    date: "May 13, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "SpaceX Dragon CRS-34 Launches From Cape Canaveral on May 13 Backup Window After May 12 Weather Scrub, Carrying 6,500 Pounds to ISS With Docking Set for May 14 Morning",
        body: "SpaceX's Falcon 9 rocket carrying the Dragon CRS-34 cargo spacecraft lifted off from Space Launch Complex 40 at Cape Canaveral Space Force Station at 6:50 p.m. EDT on May 13, following a 24-hour weather delay after cumulus cloud conditions forced a scrub of the original May 12 attempt. Booster B1096, flying its sixth mission, executed a return-to-launch-site landing at Landing Zone 40 approximately eight minutes after liftoff. The Dragon capsule — itself on a record-setting sixth flight — carries approximately 6,500 pounds of science experiments, crew provisions, and hardware for the ISS Expedition 73 crew, including a wood-derived bone scaffold targeting osteoporosis therapies in microgravity and a red blood cell physiology study examining how spaceflight alters human blood biology. Autonomous docking at the forward port of the station's Harmony module is expected at approximately 7:35 a.m. EDT on May 14.",
        sourceUrl: "https://www.space.com/space-exploration/launches-spacecraft/spacex-dragon-cargo-launch-iss-crs-34",
        timestamp: "2026-05-13T22:50:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Officially Targets May 19 for Starship Flight 12 From New Orbital Launch Pad 2, Debuting V3 Architecture With Raptor 3 Engines and Over 100 Metric Tonnes of Reusable LEO Payload Capacity",
        body: "SpaceX confirmed May 19 as the no-earlier-than launch date for Starship Flight 12 from Orbital Launch Pad 2 at Starbase in Boca Chica, Texas — simultaneously the debut of the Version 3 Starship architecture and the first launch from the newly upgraded pad. The vehicle pairs Super Heavy Booster 19, carrying 33 Raptor 3 engines, with Ship 39, a stretched upper stage whose larger propellant tanks extend the stack to approximately 408 feet and raise reusable LEO payload capacity to over 100 metric tonnes — nearly three times the V2 capability. Pre-flight testing is complete: a full-duration 33-engine static fire was conducted last week, and the fully stacked vehicle has completed a wet dress rehearsal loading over 5,000 tonnes of propellant without anomalies. The mission profile calls for a suborbital arc with ocean splashdowns for both stages, deliberately deferring booster tower-catch to focus on clean V3 architecture validation.",
        sourceUrl: "https://spaceflightnow.com/2026/05/12/spacex-targets-may-19-for-debut-of-starship-super-heavy-version-3-launch-pad-2/",
        timestamp: "2026-05-13T15:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA Psyche Spacecraft Locked In for Friday Mars Gravity-Assist Flyby, Passing 2,800 Miles From the Red Planet at 12,333 MPH to Slingshot Toward Metal-Rich Asteroid on 2029 Arrival Track",
        body: "NASA's Psyche spacecraft is on final approach for a gravity-assist flyby of Mars on May 15, when it will pass within approximately 2,800 miles of the Red Planet's surface at roughly 12,333 mph, using Martian gravity to bend its trajectory and boost velocity toward the metal-rich asteroid 16 Psyche. The flyby serves primarily as an orbital mechanics maneuver — saving significant onboard propellant by letting Mars's gravity do the work — but the mission team will simultaneously use the multispectral imager to capture thousands of observations of Mars, calibrating imaging techniques critical for when the spacecraft begins orbiting its target asteroid in late 2029. It is the only gravity assist planned for the mission; a clean execution places Psyche on direct trajectory for asteroid orbit insertion, currently targeted for July 2029 with prime science operations starting in August. Asteroid 16 Psyche is believed to be the exposed iron-nickel core of a differentiated planetesimal, and the mission aims to answer fundamental questions about planetary formation.",
        sourceUrl: "https://science.nasa.gov/blogs/psyche/2026/05/08/nasas-psyche-mission-to-fly-by-mars-for-gravity-assist/",
        timestamp: "2026-05-13T12:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA Confirms May 19 Vega-C Launch for SMILE Solar Wind Observatory After April Technical Delay, Marking Rocket's Return-to-Flight and Debut of Joint ESA-China Solar-Terrestrial Science Mission",
        body: "ESA confirmed the Solar wind Magnetosphere Ionosphere Link Explorer (SMILE) will launch on May 19 at 05:52 CEST aboard a Vega-C rocket from Europe's Spaceport in Kourou, French Guiana — six weeks later than the original April 9 target after a precautionary delay to address a production-line defect in a Vega-C subsystem component. SMILE is a joint mission between ESA and the Chinese Academy of Sciences, and will be the first satellite to carry both soft X-ray and ultraviolet imaging instruments alongside in-situ particle and magnetic field detectors to simultaneously observe the full magnetospheric response to solar wind input. The spacecraft's highly elliptical orbit will allow it to image Earth's entire magnetosphere in a single frame — an unprecedented capability for understanding geomagnetic storms and space weather that affects satellites, power grids, and communications infrastructure. Solar panel deployment 63 minutes after liftoff will confirm launch success before Smile enters a commissioning phase ahead of its planned three-year science mission.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-05-13T10:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Policy",
        headline: "ISRO-Roscosmos Draft Contract for Semi-Cryogenic Engine Procurement Enters Approval Process, Targeting LVM3 Payload Upgrade From 4 to 5 Tonnes GTO to Support Commercial and Gaganyaan Ambitions",
        body: "India's Space Research Organisation disclosed in its Annual Report for 2025–26 that a draft procurement contract for semi-cryogenic rocket engines with Russia's Roscosmos is currently in the approval process, advancing ISRO's plan to upgrade the Launch Vehicle Mark 3 with propulsion hardware that would lift its geostationary transfer orbit payload capacity from 4 to 5 metric tonnes. The semi-cryogenic engines combine rocket-grade kerosene — stored at ambient temperature, simplifying launch-pad operations — with super-cooled liquid oxygen, replacing the solid-propellant strap-on boosters currently used on LVM3 and providing a significant performance improvement. India is simultaneously pursuing indigenous development, having conducted a successful hot test of the domestic Engine Power Head Test Article at the ISRO Propulsion Complex in Mahendragiri in 2025, ensuring a parallel path to operational capability should the foreign procurement face delays. The enhanced payload margin would directly benefit commercial satellite customers and provide critical margins for future crewed lunar mission precursors under the Gaganyaan programme.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-roscosmos-semi-cryogenic-engine.html",
        timestamp: "2026-05-13T08:00:00Z"
      }
    ]
  },

  "2026-05-12": {
    date: "May 12, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "SpaceX Dragon CRS-34 Lifts Off From Cape Canaveral at 7:16 p.m. EDT With 6,500 Pounds of ISS Cargo, Docking Targeted for May 14 Despite 35% Favorable Weather Odds at Launch",
        body: "A SpaceX Falcon 9 rocket carrying the Dragon CRS-34 cargo spacecraft — capsule C209 on its sixth flight — launched from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida, at 7:16 p.m. EDT on May 12, despite a forecast that gave the mission only a 35% chance of acceptable weather at liftoff due to cumulus cloud and anvil cloud rules violations. The Dragon capsule carries approximately 6,500 pounds of science experiments, crew provisions, and hardware for the International Space Station's Expedition 73 crew, including a wooden bone scaffold engineered to investigate osteoporosis therapies in microgravity and a red blood cell physiology study examining how spaceflight alters human blood biology. Autonomous docking is expected at the forward port of Harmony at approximately 9:50 a.m. EDT on May 14, with NASA flight controllers at Johnson Space Center verifying docking corridors and approach profiles in preparation for Dragon's 38-hour free-flight transit. The backup launch opportunity, had weather scrubbed Tuesday's attempt, was set for Wednesday, May 13 at 6:50 p.m. EDT from the same pad.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-sets-coverage-for-spacex-34th-station-resupply-launch-arrival/",
        timestamp: "2026-05-12T23:16:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Opens Starship Flight 12 Launch Window at 22:30 UTC Tonight From OLP-2 — First-Ever Flight of Version 3 Vehicle and First Liftoff From New Starbase Orbital Pad",
        body: "SpaceX opened a Starship Flight 12 launch window at 22:30 UTC (5:30 p.m. CDT) on May 12 from Orbital Launch Pad 2 at Starbase in Boca Chica, Texas, moving the attempt forward from the previously announced NET May 15 date after the Wet Dress Rehearsal completed without anomalies and all pre-launch checkouts of Booster 19 and Ship 39 cleared final review boards. Flight 12 is the debut of the Version 3 Starship architecture: Booster 19 carries 33 Raptor 3 engines producing higher thrust than any prior superheavy booster, while Ship 39 features stretched propellant tanks that raise the vehicle's standing height to approximately 408 feet — about four feet taller than the V2 stack — and its reusable LEO payload capacity to over 100 metric tons. The mission profile calls for a suborbital trajectory with controlled ocean splashdowns for both the booster and ship, deliberately setting aside the mechazilla tower-catch milestones achieved on Flight 11 in order to prioritize clean-sheet V3 performance data and validation of OLP-2's upgraded water deluge and ground support infrastructure. A successful launch would simultaneously certify three firsts for SpaceX: the V3 architecture, Orbital Launch Pad 2, and Raptor 3 engines operating in flight conditions on both stages.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/05/spacex-mid-may-starship-flight-12-revised-trajectory/",
        timestamp: "2026-05-12T22:30:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Mission",
        headline: "Blue Origin Submits Corrective Action Plan to FAA Following CEO Dave Limp's Explanation of New Glenn BE-3U Thrust Anomaly That Stranded AST SpaceMobile's BlueBird 7 Satellite",
        body: "Blue Origin CEO Dave Limp publicly confirmed on May 12 that the company has submitted its corrective action plan to the Federal Aviation Administration as part of the ongoing mishap investigation into the April 19 New Glenn upper-stage failure that placed AST SpaceMobile's BlueBird 7 satellite in an unusably low orbit, leading to the payload's loss and an indefinite FAA grounding of the rocket. Limp attributed the anomaly to a thrust shortfall in one of the BE-3U engines during the second upper-stage burn — the engine ignited but failed to produce sufficient thrust to complete the planned trajectory, leaving BlueBird 7 in an orbit too low for the satellite's onboard propulsion system to raise, forcing AST SpaceMobile to plan a controlled atmospheric de-orbit of the spacecraft. The corrective action plan addresses the root cause identified during Blue Origin's internal investigation and outlines manufacturing and acceptance testing changes to the BE-3U propellant feed system; the FAA must now review the plan, approve the root cause finding, and authorize a return-to-flight before New Glenn can attempt its next mission. Blue Origin's cadence ambitions — the company publicly targeted double-digit launches in 2026 to support New Glenn's commercial manifest and position New Glenn as the primary ride for future TeraWave constellation satellites — now hinge on how quickly the regulator can clear the rocket for resumption of operations.",
        sourceUrl: "https://gizmodo.com/blue-origin-offers-an-explanation-for-its-embarrassing-satellite-mishap-2000750010",
        timestamp: "2026-05-12T14:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Begins Final Shenzhou-23 Launch Preparations at Jiuquan Following Tianzhou-10 Docking, Targeting Late-May Crewed Launch to Begin First-Ever One-Year Human Spaceflight Experiment",
        body: "With Tianzhou-10 securely docked at Tiangong's Tianhe aft port and cargo offloading underway, the China Manned Space Engineering Office confirmed on May 12 that final integration and testing of the Shenzhou-23 crewed spacecraft and its Long March-2F carrier rocket are proceeding at the Jiuquan Satellite Launch Center, with a targeted launch in late May 2026 that will relieve the current Shenzhou-22 crew. The Shenzhou-23 mission is notable for including China's first-ever designated one-year continuous human spaceflight experiment: one crew member will remain aboard Tiangong for a full twelve months — more than double the standard six-month rotation — to gather long-duration physiological data in support of future crewed lunar and Mars mission planning. The arriving crew will take custody of the new-generation EVA spacesuit, space treadmill, and 41 science experiment packages delivered by Tianzhou-10, enabling a comprehensive research program spanning microgravity fluid physics, space medicine, and advanced materials science scheduled to run through the spring of 2027. A successful Shenzhou-23 crew handover would also clear the manifest for Shenzhou-24, a planned follow-on crewed flight later in 2026, as China presses toward its stated goal of maintaining permanent crewed presence aboard Tiangong.",
        sourceUrl: "https://news.cgtn.com/news/2026-05-11/China-says-it-successfully-launches-Tianzhou-10-cargo-spacecraft-1N3cLeSCySQ/p.html",
        timestamp: "2026-05-12T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Policy",
        headline: "Third ESA Earth Observation Commercialisation Forum Opens in Seville With European Commission and Financial Leaders Setting Strategic Roadmap for the Continent's EO Sector",
        body: "The European Space Agency's third Earth Observation Commercialisation Forum (ESA CommEO) opened in Seville, Spain, on May 12 for a three-day programme running through May 14, bringing together global Earth observation industry leaders, investors, policymakers, and downstream application developers to define the strategic roadmap for Europe's commercial EO sector over the next decade. Day one featured a high-level opening session with ESA Director General Josef Aschbacher, European Commission representatives, and senior figures from the European Investment Bank, addressing how public funding frameworks and regulatory environments can best catalyse private investment in EO infrastructure and services. The forum's agenda spans the entire EO value chain, from satellite manufacturing and launch, to data analytics platforms, AI-driven downstream applications, and the financing mechanisms — including ESA's BIC incubators, BOOST accelerator, and co-investment schemes — that support European start-ups in commercialising space-derived data. ESA CommEO is held annually and has grown significantly in its third edition, reflecting the rapid expansion of Europe's commercial EO sector driven by new constellations from Airbus, Telespazio, Satellogic, and a growing cohort of start-ups building specialised imaging and analytics services on the backbone of Copernicus data.",
        sourceUrl: "https://www.esa.int/",
        timestamp: "2026-05-12T09:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Begins GSLV F17 Countdown Operations at Sriharikota as EOS-05 Geostationary Imaging Satellite Readied for May 21 Return-to-Flight Launch After Four-Month Stand-Down",
        body: "The Indian Space Research Organisation commenced countdown operations for GSLV F17 at the Second Launch Pad of the Satish Dhawan Space Centre in Sriharikota on May 12, advancing toward a May 21 liftoff carrying the EOS-05 (GISAT-1A) geostationary Earth observation satellite in the agency's first launch attempt since the PSLV-C62 third-stage spin failure grounded all Indian launch vehicles in January 2026. EOS-05, operating from geostationary orbit at approximately 36,000 kilometers altitude, is designed to deliver near-real-time multispectral imagery of the entire Indian subcontinent at 30-minute intervals under normal operations — compressible to five minutes over priority zones — serving disaster management, cyclone monitoring, flood response, and agricultural assessment agencies across the country. ISRO Chairman V. Narayanan has stated that a clean GSLV F17 return-to-flight will clear the launch manifest for a sequence of high-priority follow-on missions including the PSLV-C63 technology demonstrator, the first privately assembled PSLV-N1 rocket built by NewSpace India Limited, and the Gaganyaan G1 uncrewed orbital test flight carrying the Vyommitra semi-humanoid robot. The GSLV's Cryogenic Upper Stage, powered by the indigenously developed CE-20 engine, remains the mission's highest-scrutiny system after a series of previous stage anomalies; teams have completed an additional round of cold-flow testing and acceptance inspections specifically targeting the CUS turbopump assembly ahead of the May 21 window.",
        sourceUrl: "https://www.indiastrategic.in/isro-all-set-to-return-to-rocket-launches-in-may-2026/",
        timestamp: "2026-05-12T08:00:00Z"
      }
    ]
  }

};

// Make available globally
window.AGENCIES = AGENCIES;
window.DIGESTS = DIGESTS;
