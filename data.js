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
