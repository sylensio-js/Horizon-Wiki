/* ==========================
   Forbidden West Wiki - JS
   (external file)
   ========================== */

/* Elements */
const articleContainer = document.getElementById('article-container');
const homeSection = document.getElementById('home-section');
const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('search-results');
const ctaExplore = document.getElementById('cta-explore');

/* Simple article store (HTML strings) - expand this object with more entries */
const articles = {
"slitherfang": `
<article id="slitherfang" class="theme-machine">
  <h1 class="title">Slitherfang</h1>
  

  <section class="infobox">   
    <div><strong>Type:</strong>Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Cobra/Rattlesnake</div>
    
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Slitherfang is a massive, highly mobile combat machine capable of striking from range. When it coils, its body sections lock into position and it can unleash its full set of weapons.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>During combat it may switch the contents of its sac between Acid and Purgewater, changing the element of some attacks.</p>
          <ul>
            <li><strong>Electro Slam</strong>: charges nodes on its tail then slams the ground to release a burst of electricity. Destroying the tail nodes disables this attack.</li>
            <li><strong>Venom Spray</strong>: fires a high-pressure jet of Acid or Purgewater. Destroying the elemental sac beneath its mouth stops this attack.</li>
            <li><strong>Slithering Stride</strong>: burrows and surges, dealing damage and knockback. Removing the Earthgrinders on its upper neck disables this behavior.</li>
            <li><strong>Thunderbolt</strong>: fires a powerful electric beam from its tail nodes that explodes on impact. Destroying the tail nodes disables this attack.</li>
            <li><strong>Sonic Stun</strong>: emits high-frequency waves that temporarily incapacitate targets. Destroy the sonic hoods on its head to stop it.</li>
            <li><strong>Electro Sweep</strong>: sweeps with its charged tail to hit everything in front of it. Destroying the tail nodes disables this attack.</li>
            <li><strong>Bite</strong>: lunges forward to bite. This attack cannot be disabled.</li>
            <li><strong>Tearing Bite</strong>: charges forward biting and knocking down anything in its path. This attack cannot be disabled.</li>
            <li><strong>Head Clear</strong>: uses its massive head to sweep enemies aside. This attack cannot be disabled.</li>
            <li><strong>Shocking Ensnare</strong>: coils around a target and detonates an electric charge from its tail. Destroying the tail nodes prevents this move.</li>
            <li><strong>Subterranean Shockwave</strong>: burrows underground then charges at its enemy, dealing damage and knockback in the way. Destroying the Earthgrinders on its neck disable this attack</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>From long range, detonate the Glowblast canisters that cover its body with a Plasma sharpshot bow, then close in and use a non-elemental bow to trigger the plasma explosion. After that, destroy one of the electric rattles on its tail and use it as a heavy weapon to stagger the Slitherfang and land critical hits.</p>
          <p>Another approach is to prime the Slitherfang with Frost from a distance, then close and use the Blast Forge with Sustained Burst to shred it quickly. Activating the hunter tree's Valor Surge immediately before using Blast Forge speeds up the takedown.</p>
          <p>These methods are efficient for both kills and farming runs.</p>        
        </div>
      </div>
    </div>

  <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
        <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
        <div class="drop common"><strong>Metalbite</strong> — 100%</div>
        <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
        <div class="drop uncommon"><strong>Slitherfang Circulator</strong> — 70%</div>
        <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
        <div class="drop rare"><strong>Slitherfang Primary Nerve</strong> — 63%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> — 49%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> — 45%</div>
        <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
        <div class="drop rare"><strong>Metal Bones</strong> — 27%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
      </div>

      <p><strong>Note:</strong> One resource — the <strong>Earthgrinders</strong> on its upper neck — is destroyed when the Slitherfang dies, so remove them before finishing the machine.</p>
    </div>
  </div>
</div>

<div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Slitherfang can be overridden, and its module can be acquired by overriding Cauldron KAPPA's core. As for performance, its impeccable, but most of its sites are far from other machine sites, so you won't be able to get the full benefits most of the time.</p>
  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Slitherfang is a hunter-killer variant with black-and-gold plating and purple muscle strands, significantly tougher and more dangerous than the standard form.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>During combat it may switch the contents of its sac between Acid and Purgewater, changing the element of some attacks.</p>
          <ul>
            <li><strong>Electro Slam</strong>: charges nodes on its tail then slams the ground to release a burst of electricity. Destroying the tail nodes disables this attack.</li>
            <li><strong>Venom Spray</strong>: fires a high-pressure jet of Acid or Purgewater. Destroying the elemental sac beneath its mouth stops this attack.</li>
            <li><strong>Slithering Stride</strong>: burrows and surges, dealing damage and knockback. Removing the Earthgrinders on its upper neck disables this behavior.</li>
            <li><strong>Thunderbolt</strong>: fires a powerful electric beam from its tail nodes that explodes on impact. Destroying the tail nodes disables this attack.</li>
            <li><strong>Sonic Stun</strong>: emits high-frequency waves that temporarily incapacitate targets. Destroy the sonic hoods on its head to stop it.</li>
            <li><strong>Electro Sweep</strong>: sweeps with its charged tail to hit everything in front of it. Destroying the tail nodes disables this attack.</li>
            <li><strong>Bite</strong>: lunges forward to bite. This attack cannot be disabled.</li>
            <li><strong>Tearing Bite</strong>: charges forward biting and knocking down anything in its path. This attack cannot be disabled.</li>
            <li><strong>Head Clear</strong>: uses its massive head to sweep enemies aside. This attack cannot be disabled.</li>
            <li><strong>Shocking Ensnare</strong>: coils around a target and detonates an electric charge from its tail. Destroying the tail nodes prevents this move.</li>
            <li><strong>Subterranean Shockwave</strong>: burrows underground then charges at its enemy, dealing damage and knockback in the way. Destroying the Earthgrinders on its neck disable this attack</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Because the Apex form is stronger, bring powerful coil-equipped weapons. Use the same fundamentals: destroy Glowblast canisters with Plasma, then finish with non-elemental shots; disable tail rattles to stagger and open critical windows.</p>
          <p>Priming with Frost and using Blast Forge plus Sustained Burst remains an effective high-damage tactic.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
        <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
        <div class="drop common"><strong>Metalbite</strong> — 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
        <div class="drop epic"><strong>Apex Slitherfang Heart</strong> - 100%</div>
        <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
        <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
        <div class="drop uncommon"><strong>Slitherfang Circulator</strong> — 69%</div> 
        <div class="drop rare"><strong>Slitherfang Primary Nerve</strong> — 63%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> — 50%</div>
        <div class="drop rare"><strong>Piercing Spike</strong> — 50%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
      </div>
      <p><strong>Note:</strong> One resource — the <strong>Earthgrinders</strong> on its upper neck — is destroyed when the Slitherfang dies, so remove them before finishing the machine.</p>
    </div>
  </div>
</div>
  </section>

  <div class="tags">
    <span class="tag">machine</span>
    <span class="tag">slitherfang</span>
  </div>
</article>
`,

"stalker": `
<article id="stalker" class="theme-machine">
  <h1 class="title">Stalker</h1>
  

  <section class="infobox"> 
    <div><strong>Type:</strong>Combat - Lightweight</div>
    <div><strong>Real-World Inspiration:</strong>Cheetah/Black Jaguar</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Stalker is a swift combat machine that can cloak itself, becoming nearly invisible. It favors ambush tactics using mines and alarm flares before following up with precise ranged and melee attacks.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>At Stalker sites you may spot red devices with white fins on the ground — proximity mines that, when triggered, alert nearby Stalkers. You can use these to your advantage by triggering them remotely to lure machines into traps.</p>
          <ul>
            <li><strong>Tail Sweep</strong>: swings its razor tail in a wide arc. This attack cannot be disabled.</li>
            <li><strong>Hack and Slash</strong>: charges and slashes with claws and jaws. This attack cannot be disabled.</li>      
            <li><strong>Dart Snipe</strong>: fires a precise energy dart from a shoulder cannon. Destroying the dart cannon disables this attack.</li>
            <li><strong>Dart Burst</strong>: charges the dart cannon then fires three rapid darts. Destroying the dart cannon disables this attack.</li>
          </ul>
          <p>It may also cloak and lay explosive mines.Destroy the stealth generator to stop invisibility, and destroy the mine launchers above the hind legs to stop mine deployment.</p>
        </div>
      </div>
    </div>
    
     <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>The Stalker has relatively low durability. Lure it by detonating its proximity mines, then trap or immobilize it with Shock traps or Shock arrows and finish with a precise critical strike.</p>          
        </div>
      </div>
    </div>

    <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
       <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
       <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
       <div class="drop common"><strong>Braided Wire</strong> - 73%</div>
       <div class="drop common"><strong>Sturdy Hardplate</strong> - 41%</div>
       <div class="drop uncommon"><strong>Stalker Circulator</strong> - 33%</div>
       <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
       <div class="drop rare"><strong>Stalker Primary Nerve</strong> - 23%</div>
       <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
       <div class="drop rare"><strong>Machine Bone</strong> - 10%</div>
      </div>
    </div>
  </div>
</div>

<div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Stalker can be overridden, and its module can be acquired by overriding Cauldron CHI's core. As for performance, it's decent, but its somewhat difficult to override before the fight, as it tends to stay invisible and cling to trees.</p>
  </div>
 </div>
</div>
</section>

<!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Stalker is a hunter-killer variant, tougher and more aggressive, with distinctive black-and-gold armor and purple musculature.</p>

     <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>At Stalker sites you may spot red devices with white fins on the ground — proximity mines that, when triggered, alert nearby Stalkers. You can use these to your advantage by triggering them remotely to lure machines into traps.</p>
          <ul>
            <li><strong>Tail Sweep</strong>: swings its razor tail in a wide arc. This attack cannot be disabled.</li>
            <li><strong>Hack and Slash</strong>: charges and slashes with claws and jaws. This attack cannot be disabled.</li>      
            <li><strong>Dart Snipe</strong>: fires a precise energy dart from a shoulder cannon. Destroying the dart cannon disables this attack.</li>
            <li><strong>Dart Burst</strong>: charges the dart cannon then fires three rapid darts. Destroying the dart cannon disables this attack.</li>
          </ul>
          <p>It may also cloak and lay explosive mines. Destroy the stealth generator to stop invisibility, and destroy the mine launchers above the hind legs to stop mine deployment.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>Because the Apex form is more dangerous, maintain distance, use traps and Shock damage to immobilize, then close for critical strikes when opportunities open.</p>          
        </div>
      </div>
    </div>

    <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
       <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
       <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
       <div class="drop common"><strong>Braided Wire</strong> - 73%</div>
       <div class="drop common"><strong>Sturdy Hardplate</strong> - 42%</div>
       <div class="drop uncommon"><strong>Stalker Circulator</strong> - 33%</div>
       <div class="drop uncommon"><strong>Machine Muscle</strong> - 30%</div>
       <div class="drop rare"><strong>Stalker Primary Nerve</strong> - 22%</div>
       <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
       <div class="drop rare"><strong>Machine Bone</strong> - 10%</div>
      </div>
    </div>
  </div>
</div>
</section>
</article>
</div>
`,

"slaughterspine": `

<article id="slaughterspine" class="theme-machine">
  <h1 class="title">Slaughterspine</h1>
  

  <section class="infobox"> 
    <div><strong>Type:</strong>Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Spinosaurus</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Slaughterspine is a powerful combat machine inspired by the Spinosaurus. When it charges its Plasma Energizers, many attacks gain Plasma properties and become much more dangerous.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Early in combat it may charge its Plasma Energizers; if they fully charge, multiple attacks gain plasma damage. Prevent this by shooting the energizers on its legs. An additional energizer can appear under its belly when it is low on health.</p>
          <ul>
            <li><strong>Dashing Maw</strong>: drops its jaw and charges forward. This attack cannot be disabled.</li>
            <li><strong>Laser Swipe</strong>: fires a Plasma beam from its mouth. Applying full Drenched status can disable it.</li>
            <li><strong>Plasma Snipe</strong>: fires an accurate Plasma projectile. Applying Drenched can disable it.</li>
            <li><strong>Tail Slam</strong>: slams its tail into the ground for heavy damage. This attack cannot be disabled.</li>
            <li><strong>Orbital Lances</strong>: shoots out orbital laser beacons that converge on its target, effectively trapping it. Destroying its spinetail launchers disables this attack</li>
            <li><strong>Explosive Maw</strong>: in Charged Form, bites the ground multiple times, releasing Plasma explosions into the surrounding area. This attack cannot be disabled</li>
            <li><strong>Lancer Beam</strong>: in Charged Form, it props up its tail, shooting out five Plasma lasers perpendicular to itself. Destroying tail emitters or applying Drenched can disable it.</li>
            <li><strong>Spinetail Missiles</strong>: in Charged Form, it launches seeking Plasma missiles; destroy missile launchers and apply Drenched to disable.</li>
            <li><strong>Plasma Eruption</strong>: in Charged Form, plants its tail into the ground, shooting Plasma geysers under its enemies. Destroying its tail emmiters disables this attack.</li>
            <li><strong>Pendulum Sweep</strong>: while in Charged Form, shoots Plasma beams from its mouth and tail simultaneously, swinging both in double pendulum motion</li>
          </ul>
          <p><strong>Note:</strong>While it's in charged form, every Plasma attack will secrete Plasma "fountains" that will stay on the battlefield and spew out Plasma buildup</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>The Slaughterspine is one of the hardest machines to take down in the entire game at any stage of progression, but anything will go down with the right method. Start by immediately shooting its Plasma energizers to prevent its Charged Form. If you were too late and it entered Charged Form, then barrage it with Purgewater to disable most of its attacks and focus on taking down its tail lancers once its Drenched. But if did disable its Charged form, then rip out of the Plasma launchers on its spine to use against it. Then just rinse and repeat untill the machine is dead.</p>
        </div>
      </div>
    </div>

   <div class="accordion">
     <div class="accordion-item">
       <div class="accordion-header" aria-expanded="false">
         Item Drops <span class="chev">▾</span>
       </div>
       <div class="accordion-content">
         <div class="drops-grid">
           <div class="drop rare"><strong>Piercing Spike</strong> — 100%</div>
           <div class="drop common"><strong>Metalbite</strong> — 100%</div>
           <div class="drop epic"><strong>Apex Slaughterspine Heart</strong> — 100%</div>
           <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
           <div class="drop epic"><strong>Luminous Brainstem</strong> — 100%</div>
           <div class="drop common"><strong>Sturdy Hardplate</strong> — 71%</div>
           <div class="drop uncommon"><strong>Slaughterspine Circulator</strong> — 69%</div>
           <div class="drop rare"><strong>Large Machine Core</strong> — 69%</div>
           <div class="drop rare"><strong>Slaughterspine Primary Nerve</strong> — 63%</div>
           <div class="drop epic"><strong>Volatile Sludge</strong> — 50%</div>
           <div class="drop uncommon"><strong>Machine Muscle</strong> — 44%</div>
           <div class="drop common"><strong>Braided Wire</strong> — 30%</div>
           <div class="drop rare"><strong>Metal Bones</strong> — 27%</div>
         </div>
       </div>
     </div>
   </div>

   <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Slaughterspine can be overridden, and its module can be acquired by overriding Cauldron KAPPA's core. And i have to say, its one of, if not, the best override in the game. Because the only thing that managed to beat it was an Apex Stormbird.</p>
  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Slaughterspine is a hunter-killer variant with improved resistances and more potent Plasma attacks.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Early in combat it may charge its Plasma Energizers; if they fully charge, multiple attacks gain plasma damage. Prevent this by shooting the energizers on its legs. An additional energizer can appear under its belly when it is low on health.</p>
          <ul>
            <li><strong>Dashing Maw</strong>: drops its jaw and charges forward. This attack cannot be disabled.</li>
            <li><strong>Laser Swipe</strong>: fires a Plasma beam from its mouth. Applying full Drenched status can disable it.</li>
            <li><strong>Plasma Snipe</strong>: fires an accurate Plasma projectile. Applying Drenched can disable it.</li>
            <li><strong>Tail Slam</strong>: slams its tail into the ground for heavy damage. This attack cannot be disabled.</li>
            <li><strong>Orbital Lances</strong>: shoots out orbital laser beacons that converge on its target, effectively trapping it. Destroying its spinetail launchers disables this attack</li>
            <li><strong>Explosive Maw</strong>: in Charged Form, bites the ground multiple times, releasing Plasma explosions into the surrounding area. This attack cannot be disabled</li>
            <li><strong>Lancer Beam</strong>: in Charged Form, it props up its tail, shooting out five Plasma lasers perpendicular to itself. Destroying tail emitters or applying Drenched can disable it.</li>
            <li><strong>Spinetail Missiles</strong>: in Charged Form, it launches seeking Plasma missiles; destroy missile launchers and apply Drenched to disable.</li>
            <li><strong>Plasma Eruption</strong>: in Charged Form, plants its tail into the ground, shooting Plasma geysers under its enemies. Destroying its tail emmiters disables this attack.</li>
            <li><strong>Pendulum Sweep</strong>: while in Charged Form, shoots Plasma beams from its mouth and tail simultaneously, swinging both in a double pendulum motion</li>
          </ul>
          <p><strong>Note:</strong>While it's in charged form, every Plasma attack will secrete Plasma "fountains" that will stay on the battlefield and spew out Plasma buildup</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Prioritize applying Drenched and destroying energizers, then disable tail laser emitters and missile launchers before committing to heavy sustained damage.</p>
        </div>
      </div>
    </div>
    
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop rare"><strong>Piercing Spike</strong> — 100%</div>
            <div class="drop common"><strong>Metalbite</strong> — 100%</div>
            <div class="drop epic"><strong>Apex Slaughterspine Heart</strong> — 100%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> — 100%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> — 71%</div>
            <div class="drop uncommon"><strong>Slaughterspine Circulator</strong> — 69%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> — 69%</div>
            <div class="drop rare"><strong>Slaughterspine Primary Nerve</strong> — 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> — 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> — 44%</div>
            <div class="drop common"><strong>Braided Wire</strong> — 30%</div>
            <div class="drop rare"><strong>Metal Bones</strong> — 27%</div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <div class="tags">
    <span class="tag">machine</span>
    <span class="tag">slaughterspine</span>
  </div>
</article>
</div>
`,

"stormbird": `

<article id="stormbird" class="theme-machine">
  <h1 class="title">Stormbird</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Combat - Aerial</div>
    <div><strong>Real-World Inspiration:</strong>Falcon/Eagle</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Stormbird is a large aerial combat machine capable of generating severe electrical storms. It attacks from above with speed and powerful ranged abilities. HEPHAESTUS created the Stormbird to help purify the skies during Zero Dawn</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <ul>
            <li><strong>Carpet Shock</strong>: flies over its target, shooting down Shock bombs on everything under it. Disable by destroying the storm cannon on its chest.</li>
            <li><strong>Thunderbolt Dive</strong>: ascends high into the sky, then starts diving down covered in Electricity, which explodes on impact. This attack cannot be disabled.</li>
            <li><strong>Lightning Strike</strong>: charges its storm cannon to shoot out a focused, homing Shock bomb that explodes on impact and leaves electric residue. This attack can be disabled by removing its storm cannon.</li>
            <li><strong>Thunder Barrage</strong>: uses its storm cannon to fire a burst of Shock bombs that explode on impact. Destroy its storm cannon to disable it.</li>
            <li><strong>Electric Cage</strong>: creates an electric field around itself, then starts to march towards it enemy, electrifying everything in its way. Remove its storm cannon to disable this attack.</li>
            <li><strong>Wing Torrent</strong>: uses its thrusters to create a powerful gust of wind that deals heavy knockback. Destroy all of its wing thrusters to disable this attack.</li>
            <li><strong>Thunder Whip</strong>: infuses its whip-like tail with Shock damage, then sweeps it in a wide arc. This attack cannot be disabled.</li>
            <li><strong>Storm Beak</strong>: electrifies its beak, then start to stab its enemy multiple times. This attack cannot be disabled.</li>
            <li><strong>Shock Talons</strong>: charges its razor talons with electricity. This attack cannot be disabled.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>The Stormbird is vulnerable to Frost and Purgewater. Focus fire on the storm cannon in its chest to disable many ranged attacks, and target wing thrusters to limit its mobility.</p>
        </div>
      </div>
    </div>

   <div class="accordion">
     <div class="accordion-item">
       <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
       <div class="accordion-content">
         <div class="drops-grid">
           <div class="drop common"><strong>Sparker</strong> — 100%</div>
           <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
           <div class="drop rare"><strong>Large Machine Core</strong> — 70%</div>
           <div class="drop uncommon"><strong>Stormbird Circulator</strong> — 69%</div>
           <div class="drop rare"><strong>Stormbird Primary Nerve</strong> — 63%</div>
           <div class="drop epic"><strong>Volatile Sludge</strong> — 51%</div>
           <div class="drop uncommon"><strong>Machine Muscle</strong> — 45%</div>
           <div class="drop common"><strong>Braided Wire</strong> — 32%</div>
           <div class="drop epic"><strong>Luminous Brainstem</strong> — 28%</div>
           <div class="drop rare"><strong>Metal Bones</strong> — 28%</div>
           <div class="drop common"><strong>Sturdy Hardplate</strong> — 15%</div>
         </div>
       </div>
     </div>
   </div>

   <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Stormbird can be overridden, and the its module can be acquired by overriding Cauldron KAPPA's core. As for performance, its very good, but it will take some time to override it, as it likes to stay in the air and use that annoying kamikaze attack. And there aren't that many uses for it in combat, as most of the time it's overridden it will hover in the air</p>
  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Stormbird is a hunter-killer variant with increased damage and resilience.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <ul>
            <li><strong>Carpet Shock</strong>: flies over its target, shooting down Shock bombs on everything under it. Disable by destroying the storm cannon on its chest.</li>
            <li><strong>Thunderbolt Dive</strong>: ascends high into the sky, then starts diving down covered in Electricity, which explodes on impact. This attack cannot be disabled.</li>
            <li><strong>Lightning Strike</strong>: charges its storm cannon to shoot out a focused, homing Shock bomb that explodes on impact and leaves electric residue. This attack can be disabled by removing its storm cannon.</li>
            <li><strong>Thunder Barrage</strong>: uses its storm cannon to fire a burst of Shock bombs that explode on impact. Destroy its storm cannon to disable it.</li>
            <li><strong>Electric Cage</strong>: creates an electric field around itself, then starts to march towards it enemy, electrifying everything in its way. Remove its storm cannon to disable this attack.</li>
            <li><strong>Wing Torrent</strong>: uses its thrusters to create a powerful gust of wind that deals heavy knockback. Destroy all of its wing thrusters to disable this attack.</li>
            <li><strong>Thunder Whip</strong>: infuses its whip-like tail with Shock damage, then sweeps it in a wide arc. This attack cannot be disabled.</li>
            <li><strong>Storm Beak</strong>: electrifies its beak, then start to stab its enemy multiple times. This attack cannot be disabled.</li>
            <li><strong>Shock Talons</strong>: charges its razor talons with electricity. This attack cannot be disabled.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Stormbird may also be vulnerable to Acid and Plasma in some circumstances. Apply appropriate elemental effects, then disable the storm cannon and thrusters to limit its offense and mobility.</p>
        </div>
      </div>
    </div>
    
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
            <div class="drop common"><strong>Sparker</strong> — 100%</div>
            <div class="drop epic"><strong>Apex Stormbird Heart</strong> — 100%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> — 100%</div>
            <div class="drop uncommon"><strong>Stormbird Circulator</strong> — 69%</div>
            <div class="drop uncommon"><strong>Large Machine Core</strong> — 69%</div>
            <div class="drop rare"><strong>Stormbird Primary Nerve</strong> — 63%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> — 50%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> — 49%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> — 46%</div>
            <div class="drop common"><strong>Braided Wire</strong> — 30%</div>
            <div class="drop rare"><strong>Metal Bones</strong> — 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> — 16%</div>
          </div>
        </div>
      </div>
    </div>

  </section>

  <div class="tags">
    <span class="tag">machine</span>
    <span class="tag">stormbird</span>
  </div>
</article>
</div>
`,

"scorcher": `

<article id="scorcher" class="theme-machine">
  <h1 class="title">Scorcher</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Combat - Midweight</div>
    <div><strong>Real-World Inspiration:</strong>Dog/Wolf</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Scorcher is a heavily armored combat machine built for front-line roles. It carries powerful flamethrowers able to incinerate targets and was designed to help clear dense vegetation during terraforming.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <ul>
            <li><strong>Flaming Maw</strong>: shoots flames from its mouth, the swings its head torching everything nearby. This attack cannot be disabled.</li>
            <li><strong>Incendiary Wave</strong>: rears and sweeps flamethrowers in an arc, creating a damaging wall of fire. This cannot be disabled.</li>
            <li><strong>Minelayer</strong>: deploys 3 waves of incendiary mines that explode on contact. Destroy the mine launcher on its back to disable.</li>
            <li><strong>Ignition Boost</strong>: fires flames behind itself to propel forward towards its enemy, leaving a burning trail. This cannot be disabled.</li>
            <li><strong>Blazing Claws</strong>: slashes with fiery claws causing heavy damage and igniting targets. This cannot be disabled.</li>
            <li><strong>Firestorm</strong>: ignites the surrounding area producing a damaging storm of flame. This cannot be disabled.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>The Scorcher is vulnerable to Frost and Electricity. Disable it by destroying the power cell on its lower back to stun it, then destroy the mine launcher to stop minelaying. Use Frost weapons to slow it, and burst Purgewater canisters on its back to neutralize its fire attacks.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">
          Item Drops <span class="chev">▾</span>
        </div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Blaze</strong> — 100%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> — 100%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
            <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
            <div class="drop common"><strong>Sparker</strong> — 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> — 77%</div>
            <div class="drop uncommon"><strong>Scorcher Circulator</strong> — 50%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> — 46%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> — 41%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> — 30%</div>
            <div class="drop rare"><strong>Scorcher Primary Nerve</strong> — 27%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> — 15%</div>
            <div class="drop rare"><strong>Metal Bones</strong> — 11%</div>
          </div>
          <p><strong>Note:</strong> The <strong>Scanning Ears</strong> on both sides of the Scorcher's head are destroyed on defeat — remove them before finishing the machine if you want the resource intact.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Scorcher can be overridden, and its module can be acquired by overriding Cauldron CHI's core. As for performance, its amazing, its attacks make it very mobile, and some sites are very close to very powerful machines like the Dreadwing and the Rollerback. So overall, a very good ally.</p>
 </div>
</div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Scorcher is a hunter-killer variant with black-and-gold armor and purple muscles, engineered to be tougher and deadlier than the regular Scorcher.</p>
     
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <ul>
            <li><strong>Flaming Maw</strong>: shoots flames from its mouth, the swings its head torching everything nearby. This attack cannot be disabled.</li>
            <li><strong>Incendiary Wave</strong>: rears and sweeps flamethrowers in an arc, creating a damaging wall of fire. This cannot be disabled.</li>
            <li><strong>Minelayer</strong>: deploys 3 waves of incendiary mines that explode on contact. Destroy the mine launcher on its back to disable.</li>
            <li><strong>Ignition Boost</strong>: fires flames behind itself to propel forward towards its enemy, leaving a burning trail. This cannot be disabled.</li>
            <li><strong>Blazing Claws</strong>: slashes with fiery claws causing heavy damage and igniting targets. This cannot be disabled.</li>
            <li><strong>Firestorm</strong>: ignites the surrounding area producing a damaging storm of flame. This cannot be disabled.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">
          Strategy <span class="chev">▾</span>
        </div>
        <div class="accordion-content">
          <p>The Apex Scorcher is especially weak to Electricity. Destroy the power cell on its lower back to stun it, remove the mine launcher to stop mines, and burst Purgewater canisters to neutralize its fire abilities.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">
          Item Drops <span class="chev">▾</span>
        </div>
        <div class="accordion-content">
          <div class="drops-grid">
           <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
           <div class="drop common"><strong>Sparker</strong> — 100%</div>
           <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
           <div class="drop common"><strong>Blaze</strong> — 100%</div>
           <div class="drop rare"><strong>Piercing Spike</strong> — 100%</div>
           <div class="drop common"><strong>Braided Wire</strong> — 77%</div>
           <div class="drop epic"><strong>Volatile Sludge</strong> — 50%</div>
           <div class="drop uncommon"><strong>Scorcher Circulator</strong> — 50%</div>
           <div class="drop rare"><strong>Medium Machine Core</strong> — 46%</div>
           <div class="drop common"><strong>Sturdy Hardplate</strong> — 44%</div>
           <div class="drop uncommon"><strong>Machine Muscle</strong> — 31%</div>
           <div class="drop rare"><strong>Scorcher Primary Nerve</strong> — 17%</div>
           <div class="drop epic"><strong>Luminous Brainstem</strong> — 16%</div>
           <div class="drop rare"><strong>Metal Bones</strong> — 10%</div>
          </div>
          <p><strong>Note:</strong> The <strong>Scanning Ears</strong> on both sides of the Scorcher's head are destroyed on defeat — remove them before finishing the machine if you want the resource intact.</p>
        </div>
      </div>
    </div>
  </section>
</article>
</div>
`,

"shellsnapper": `

<article id="shellsnapper" class="theme-machine">
  <h1 class="title">Shellsnapper</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Snapping Turtle</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
  <p class="intro">The Shellsnapper is a large combat machine with a protective shell that absorbs incoming damage and stores that energy for devastating counterattacks.</p>
  
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
        <p>Shellsnappers are often found partially buried at their sites — be aware of ambushes when approaching.</p>
        <ul>
          <li><strong>Cleaving Ice</strong>: slashes with Frost-infused claws. This attack cannot be disabled.</li>
          <li><strong>Frost Jaw</strong>: extends its neck to bite with a Frost-infused jaw. This attack cannot be disabled.</li>
          <li><strong>Shell Slam</strong>: leaps and slams down, producing a shockwave. This attack cannot be disabled.</li>
          <li><strong>Ice Whip</strong>: lashes a Frost-infused tail for heavy damage and knockback. This attack cannot be disabled.</li>
          <li><strong>Kinetic Slam</strong>: while boosted, slams its shell into the ground, releasing kinetic energy in the form of a shockwave. This attack cannot be disabled.</li>
          <li><strong>Kinetic Beam</strong>: while boosted, fires a powerful beam; destroy the kinetic dynamo to disable.</li>
          <li><strong>Shivering Barrage</strong>: fires three Frost projectiles that explode and leave Frost pools. This attack cannot be disabled.</li>
          <li><strong>Glacial Salvo</strong>: while boosted, the shell fires Frost projectiles independently; destroy the shell to stop this.</li>
        </ul>
        <p>When low on health, the Shellsnapper will activate its kinetic dynamo and its shell will turn from light blue to a deep orange.</p>      
        </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Shellsnapper is weak to Fire and Acid. Apply Acid to erode the shell, then switch to Fire to deal consistent damage once the shell is breached.</p>
      </div>
    </div>
  </div>

 <div class="accordion">
   <div class="accordion-item">
     <div class="accordion-header" aria-expanded="false">
         Item Drops <span class="chev">▾</span>
       </div>
       <div class="accordion-content">
         <div class="drops-grid">
          <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
          <div class="drop common"><strong>Chillwater</strong> — 100%</div>
          <div class="drop common"><strong>Sturdy Hardplate</strong> — 71%</div>
          <div class="drop rare"><strong>Large Machine Core</strong> - 70%</div>
          <div class="drop uncommon"><strong>Shellsnapper Circulator</strong> — 70%</div>
          <div class="drop rare"><strong>Shellsnapper Primary Nerve</strong> — 62%</div>
          <div class="drop uncommon"><strong>Machine Muscle</strong> — 45%</div>
          <div class="drop common"><strong>Braided Wire</strong> — 30%</div>
          <div class="drop epic"><strong>Luminous Brainstem</strong> — 28%</div>
          <div class="drop rare"><strong>Metal Bone</strong> — 28%</div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Shellsnapper can be overridden, and the its module can be acquired by overriding Cauldron CHI's core. As for performance, its good, but most of its sites are far from other machine sites, and it tends to go underground and pop out as a surprise attack, but most machines can dodge that easily.</p>
  </div>
 </div>
</div>
</section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Shellsnapper is a hunter-killer variant with enhanced defenses and deadlier Frost weaponry.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>Shellsnappers are often found partially buried at their sites — be aware of ambushes when approaching.</p>
      <ul>
        <li><strong>Cleaving Ice</strong>: slashes with Frost-infused claws; This attack can be disabled by bursting the Chillwater sac located on its belly.</li>
        <li><strong>Frost Jaw</strong>: extends its neck to bite with a Frost-infused jaw; This attack can be disabled by bursting the Chillwater sac located on its belly.</li>
        <li><strong>Shell Slam</strong>: leaps from far away and slams down on its enemy leaving Frost residue in its wake; This attack can be disabled by bursting the Chillwater sac located on its belly.</li>
        <li><strong>Ice Whip</strong>: expands its tail to make an Frost-infused whip, lashing enemies and dealing knockback; This attack can be disabled by bursting the Chillwater sac located on its belly.</li>
        <li><strong>Kinetic Slam</strong>: while boosted, slams its shell into the ground, releasing kinetic energy in the form of a shockwave. This attack cannot be disabled.</li>
        <li><strong>Kinetic Beam</strong>: while boosted, fires a powerful beam; destroy the kinetic dynamo to disable.</li>
        <li><strong>Shivering Barrage</strong>: fires three Frost projectiles that explode and leave Frost pools; This attack can be disabled by bursting the Chillwater sac located on its belly.</li>
        <li><strong>Glacial Salvo</strong>: while boosted, the shell fires Frost projectiles independently; This attack can be disabled by bursting the Chillwater sac located on its belly.</li>
        </ul>
        <p>When low on health, the Shellsnapper will activate its kinetic dynamo and its shell will turn from light blue to a deep orange.</p>      
        </div>
    </div>
  </div>


    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Use Acid to degrade the shell, then switch to Fire once the shell is breached. Maintain awareness of its burying behavior and powerful area attacks.</p>
        </div>
      </div>
    </div>
    
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Chillwater</strong> — 100%</div>
            <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> — 71%</div>
            <div class="drop uncommon"><strong>Shellsnapper Circulator</strong> — 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Shellsnapper Primary Nerve</strong> — 62%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> — 45%</div>
            <div class="drop common"><strong>Braided Wire</strong> — 31%</div>
            <div class="drop rare"><strong>Machine Bone</strong> — 28%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> — 28%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> — 28%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>
</div>
`,

"snapmaw": `

<article id="snapmaw" class="theme-machine">
  <h1 class="title">Snapmaw</h1>
  

  <section class="infobox"> 
    <div><strong>Type:</strong>Aquisition - Midweight</div>
    <div><strong>Real-World Inspiration:</strong>Alligator/Crocodile</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Snapmaw is an amphibious machine that gathers resources from water and deposits them on land. It attacks with powerful jaws, its tail, and elemental projectiles.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <ul>
          <li><strong>Ice Burst</strong>: fires a spray of Frost projectiles from its mouth; This attack can be disabled by bursting its Chillwater gullet.</li>
          <li><strong>Swing Bite</strong>: lunges forward with its jaws. This attack cannot be disabled.</li>
          <li><strong>Tail Swipe</strong>: swings its tail in a wide arc. This attack cannot be disabled.</li>
          <li><strong>Lunging Jaw</strong>: launches itself to bite a target. This attack cannot be disabled.</li>
          <li><strong>Bite</strong>: bites targets at short range. This attack cannot be disabled.</li>
          <li><strong>Twinfold Strike</strong>: jumps towards it enemy, swinging its tail twice in the air before slamming into the ground. This attack cannot be disabled</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>The Snapmaw is weak to Fire and Electricity. Stun it with Electricity, then use Fire weapons to apply steady damage while avoiding its quick strikes.</p>
        </div>
      </div>
    </div>
         
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="drops-grid">
          <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
          <div class="drop common"><strong>Chillwater</strong> — 100%</div>
          <div class="drop rare"><strong>Piercing Spike</strong> — 100%</div>
          <div class="drop uncommon"><strong>Machine Muscle</strong> — 32%</div>
          <div class="drop uncommon"><strong>Snapmaw Circulator</strong> — 29%</div>
          <div class="drop rare"><strong>Medium Machine Core</strong> — 26%</div>
          <div class="drop common"><strong>Braided Wire</strong> — 20%</div>
          <div class="drop rare"><strong>Snapmaw Primary Nerve</strong> — 19%</div>
          <div class="drop common"><strong>Sturdy Hardplate</strong> — 11%</div>
          <div class="drop rare"><strong>Metal Bone</strong> — 10%</div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Snapmaw can be overridden, and the its module can be acquired by overriding Cauldron IOTA's core. As for performance, its very good, like a 7/10, its sites are very close to a lot of machine sites, and it deals good damage, but my only issue is its close-range attacks are slow, so by the time the snapmaw actually attacks, the other machine will be able to stagger it.</p>
  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Snapmaw is a hunter-killer variant with reinforced armor and heightened aggression.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <ul>
          <li><strong>Ice Burst</strong>: fires a spray of Frost projectiles from its mouth; This attack can be disabled by bursting its Chillwater gullet.</li>
          <li><strong>Swing Bite</strong>: lunges forward with its jaws. This attack cannot be disabled.</li>
          <li><strong>Tail Swipe</strong>: swings its tail in a wide arc. This attack cannot be disabled.</li>
          <li><strong>Lunging Jaw</strong>: launches itself to bite a target. This attack cannot be disabled.</li>
          <li><strong>Bite</strong>: bites targets at short range. This attack cannot be disabled.</li>
          <li><strong>Twinfold Strike</strong>: jumps towards it enemy, swinging its tail twice in the air before slamming into the ground. This attack cannot be disabled</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>Use Electricity to stun and then apply Fire to deal steady damage. Maintain distance to avoid sudden lunges and tail swipes.</p>
        </div>
      </div>
    </div>
         
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="drops-grid">
          <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
          <div class="drop common"><strong>Chillwater</strong> — 100%</div>
          <div class="drop rare"><strong>Piercing Spike</strong> — 100%</div>
          <div class="drop epic"><strong>Volatile Sludge</strong> —  49%</div>
          <div class="drop uncommon"><strong>Machine Muscle</strong> — 31%</div>
          <div class="drop uncommon"><strong>Snapmaw Circulator</strong> — 28%</div>
          <div class="drop rare"><strong>Medium Machine Core</strong> — 27%</div>
          <div class="drop common"><strong>Braided Wire</strong> — 20%</div>
          <div class="drop rare"><strong>Snapmaw Primary Nerve</strong> — 20%</div>
          <div class="drop common"><strong>Sturdy Hardplate</strong> — 11%</div>
          <div class="drop rare"><strong>Metal Bone</strong> — 9%</div>
        </div>
      </div>
    </div>
  </div>
  </section>
</article>
</div>
`,

"shell-walker": `

<article id="shell-walker" class="theme-machine">
  <h1 class="title">Shell-Walker</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Transport - Midweight</div>
    <div><strong>Real-World Inspiration:</strong>Hermit Crab</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>
  
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Shell-Walker is a sturdy transport machine that defends cargo using an energy shield and offensive Shock attacks. HEPHAESTUS designed it to move resources that help produce other machines.</p>
    
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>Shell-Walkers often travel in convoys and are typically accompanied by other machines.</p>
        <ul>
        <li><strong>Claw Combo</strong>: deals consecutive strikes with its shield and lightning claws. This attack can be disabled by removing both of its claws</li>
          <li><strong>Left Hook</strong>: throws a punch with its deactivated shield claw; remove the shield claw to disable this attack.</li>
          <li><strong>Ground Slam</strong>: slams its body into the ground, dealing heavy knockback. This attack cannot be disabled.</li>
          <li><strong>Electric Nova</strong>: discharges an electric burst that stuns and damages; This attack can be disabled by destroying the power generator located on its back.</li>
          <li><strong>Energy Gate</strong>: raises an energy shield with its left claw; remove the shield claw to disable.</li>
          <li><strong>Rapid Claw</strong>: quickly strikes with its lightning claw, releasing electric explosions; destroying the lightning claw disables this attack.</li>
          <li><strong>Thunder Barrage</strong> at long range, it uses its lightning claw to shoot 3 Shock bombs that explode on impact. This attack can be disabled by removing its lightning claw
        </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Shell-Walker is weak to Fire and Acid. Remove cargo holders to disable the lightning claw, then use Acid to erode armor before finishing it off.</p>
          </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
          <div class="drop common"><strong>Sparker</strong> — 100%</div>
          <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
          <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
          <div class="drop common"><strong>Sturdy Hardplate</strong> — 69%</div>
          <div class="drop uncommon"><strong>Machine Muscle</strong> — 30%</div>
          <div class="drop rare"><strong>Medium Machine Core</strong> — 27%</div>
          <div class="drop uncommon"><strong>Shell-Walker Circulator</strong> — 27%</div>
          <div class="drop common"><strong>Braided Wire</strong> — 20%</div>
          <div class="drop uncommon"><strong>Shell-Walker Primary Nerve</strong> — 18%</div>
          <div class="drop rare"><strong>Metal Bone</strong> — 10%</div>
        </div>
        </div>
      </div>
    </div>

    <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Shell-Walker can be overridden, and the its module can be acquired by overriding Cauldron CHI's core. As for performance, its amazing, like a 8/10, its Shock attacks and shield are very good as a tank, and the convoys can be close to some pretty strong machines, but most of the time it will get killed by other machines that are part of the convoy.</p>
  </div>
 </div>
</div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Shell-Walker is a hunter-killer variant with reinforced armor and more aggressive behavior.</p>
    
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>As with the normal form, Apex Shell-Walkers are encountered in convoys and rely on their shield and claws to defend cargo.</p>
        <ul>
          <li><strong>Left Hook</strong>: powerful claw swing; disable by removing the shield claw.</li>
          <li><strong>Ground Slam</strong>: shockwave slam. This attack cannot be disabled.</li>
          <li><strong>Electric Nova</strong>: area electric discharge. This attack cannot be disabled.</li>
          <li><strong>Energy Gate</strong>: energy shield deployment; disable by removing the shield claw.</li>
          <li><strong>Claw Combo</strong>: rapid lightning-claw strikes; destroy the lightning claw to stop it.</li>
        </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Apex Shell-Walkers are more resilient; remove cargo holders early, apply Acid to weaken armor, then finish with sustained damage.</p>
          </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
          <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
          <div class="drop common"><strong>Sparker</strong> — 100%</div>
          <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
          <div class="drop common"><strong>Sturdy Hardplate</strong> — 69%</div>
          <div class="drop epic"><strong>Volatile Sludge</strong> — 50%</div>
          <div class="drop uncommon"><strong>Machine Muscle</strong> — 31%</div>
          <div class="drop rare"><strong>Medium Machine Core</strong> — 27%</div>
          <div class="drop uncommon"><strong>Shell-Walker Circulator</strong> — 27%</div>
          <div class="drop common"><strong>Braided Wire</strong> — 20%</div>
          <div class="drop uncommon"><strong>Shell-Walker Primary Nerve</strong> — 18%</div>
          <div class="drop rare"><strong>Metal Bone</strong> — 10%</div>
        </div>
        </div>
      </div>
    </div>
  </section>
</article>
</div>
`,

"scrapper": `

<article id="scrapper" class="theme-machine">
  <h1 class="title">Scrapper</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Aquisition - Lightweight</div>
    <div><strong>Real-World Inspiration:</strong>Jackal</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Scrapper is an agile scavenger that breaks down machine carcasses for parts. It frequently operates in packs and defends salvage aggressively.</p>
    
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>Scrappers continuously scan their surroundings and react quickly to threats, so expect rapid movements and sudden attacks.</p>
        <ul>
          <li><strong>Slash</strong>: swipes with claws. This attack cannot be disabled.</li>
          <li><strong>Bite</strong>: lunges to bite. This attack cannot be disabled.</li>
          <li><strong>Tail Whip</strong>: swings its tail. This attack cannot be disabled.</li>
          <li><strong>Claw Swipe</strong>: fast dual-claw slashes. This attack cannot be disabled.</li>
          <li><strong>Plasma Blast</strong>: fires a concentrated Plasma shot. This attack can be disabled by destroying the Plasma cell located on its hind legs.</li>
          <li><strong>Plasma Beam</strong>: charges and fires a continuous Plasma beam. This attack can be disabled by destroying the Plasma cell located on its hind legs.</li>
        </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Scrappers are weak to Freeze and Shock. Exploding their power cell will stun them; then apply Freeze to slow them and finish the fight safely.</p>
        </div>
      </div>
    </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Metalbite</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 30%</div>
        <div class="drop uncommon"><strong>Scrapper Circulator</strong> - 23%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 20%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
        <div class="drop uncommon"><strong>Scrapper Primary Nerve</strong> - 17%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 11%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 11%</div>
      </div>
    </div>
  </div>

  <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Scrapper can be overridden, and the its module can be acquired by overriding Cauldron MU's core. As for performance, its somewhat bad, like a 4/10, the only positives of overriding this machine its the stun attack, and its abundance.</p>
  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Scrapper is a hunter-killer variant with stronger armor and enhanced offensive systems.</p>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Apex Scrapper keeps the same rapid scanning behavior but deals more damage and can sustain more hits.</p>
      <ul>
        <li><strong>Slash</strong>: claw swipe. This attack cannot be disabled.</li>
        <li><strong>Bite</strong>: lunging jaw attack. This attack cannot be disabled.</li>
        <li><strong>Tail Whip</strong>: wide tail swing. This attack cannot be disabled.</li>
        <li><strong>Claw Swipe</strong>: fast dual-claw attack. This attack cannot be disabled.</li>
        <li><strong>Plasma Blast</strong>: concentrated Plasma shot. This attack cannot be disabled.</li>
        <li><strong>Plasma Beam</strong>: charged continuous beam. This attack cannot be disabled.</li>
      </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Scrapper is vulnerable to Shock. Explode the power cell, apply Freeze to slow it, and finish the fight while avoiding quick strikes.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop common"><strong>Metalbite</strong> - 100%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
        <div class="drop common"><strong>Metalbite</strong> - 100%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop uncommon"><strong>Scrapper Circulator</strong> - 22%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
        <div class="drop uncommon"><strong>Scrapper Primary Nerve</strong> - 15%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 10%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 10%</div>
  </section>
  </article>
</div>
`,

"skydrifter": `

   <article id="skydrifter" class="theme-machine">
  <h1 class="title">Skydrifter</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Recon - Lightweight</div>
    <div><strong>Real-World Inspiration:</strong>Archaeopteryx</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Skydrifter is a gliding machine that easily spots and tracks potential threats. Whether in the air or on the ground, it's fast and agile, and can lash out with its razor-sharp tail and wingtips</p>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Skydrifter will often be found airborne scanning for targets, so it's very unlikely you're gonna be able to sneak up to it</p>
      <ul>
        <li><strong>Feather Spray</strong>: shoots a burst of razor sharp feathers from its tail, This attack can be disabled by shooting down its tail</li>
        <li><strong>Watcher</strong>: sprays its enemies tracker fluid so that the Skydrifter will always know their location. This attack cannot be disabled</li>
        <li><strong>Razor Torrent</strong>: hovers in the air, then sweeps forward delivering 2 slashes from its razor wings. This attack cannot be disabled</li>
        <li><strong>Tail Arc</strong>: swings its tail in an area around itself. This attack cannot be disabled</li>
        <li><strong>Flaming Pounce</strong>: launches itself onto its enemy with its fiery thrusters, leaving a scorched area. This attack cannot be disabled</li>
        <li><strong>Dive Bomb</strong>: while it's flying in th air, starts diving towards its enemy, then shoots a wing blast that stun the enemy. This attack cannot be disabled</li>
        <li><strong>Blazestorm</strong>: creates a flaming tornado around itself. This attack cannot be disabled</li>
      </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Skydrifter are only strong in the air, and a single Shock buildup will often stagger them out of the air. Then start aiming for the glow on the chest, after that remove the tail to stop its projectile attacks.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Echo Shell</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop uncommon"><strong>Skydrifter Circulator</strong> - 66%</div>
        <div class="drop rare"><strong>Piercing Spike</strong> - 50%</div>
        <div class="drop uncommon"><strong>Skydrifter Primary Nerve</strong> - 33%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 10%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 10%</div>
      </div>
    </div>
  </div>

  <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Skydrifter can be overridden, and the its module can be acquired by overriding Cauldron IOTA's core. As for performance, its decent, like 6/10, only because of its fire attacks dealing good damage, and the fact that its an aerial machine.</p>
  </div>
 </div>
</div>
</section>

 <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Skydrifter is a hunter-killer variant with stronger armor and enhanced offensive systems.</p>


  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Skydrifter will often be found airborne scanning for targets, so it's very unlikely you're gonna be able to sneak up to it</p>
      <ul>
        <li><strong>Feather Spray</strong>: shoots a burst of razor sharp feathers from its tail, This attack can be disabled by shooting down its tail</li>
        <li><strong>Watcher</strong>: sprays its enemies tracker fluid so that the Skydrifter will always know their location. This attack cannot be disabled</li>
        <li><strong>Razor Torrent</strong>: hovers in the air, then sweeps forward delivering 2 slashes from its razor wings. This attack cannot be disabled</li>
        <li><strong>Tail Arc</strong>: swings its tail in an area around itself. This attack cannot be disabled</li>
        <li><strong>Flaming Pounce</strong>: launches itself onto its enemy with its fiery thrusters, leaving a scorched area. This attack cannot be disabled</li>
        <li><strong>Dive Bomb</strong>: while it's flying in th air, starts diving towards its enemy, then shoots a wing blast that stun the enemy. This attack cannot be disabled</li>
        <li><strong>Blaze Cyclone</strong>: creates a flaming tornado around itself. This attack cannot be disabled</li>
      </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Apex Skydrifter resists Shock more, but they can still be grounded with enough applications. And when you knock it out of the air, shoot the chest weak point</p>
    </div>
   </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop common"><strong>Metalbite</strong> - 100%</div>
        <div class="drop uncommon"><strong>Skydrifter Circulator</strong> - 67%</div>
        <div class="drop uncommon"><strong>Skydrifter Primary Nerve</strong> - 54%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
        <div class="drop rare"><strong>Piercing Spike</strong> - 50%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 20%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 16%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 11%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 11%</div>
      </div>
    </div>
  </div>
</section>
</article>
</div>
`,

"scrounger": `

    <article id="scrounger" class="theme-machine">
  <h1 class="title">Scrounger</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Recon - Lightweight</div>
    <div><strong>Real-World Inspiration:</strong>Hyena</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Scrounger an agile scavenger, often found in packs. It can swiftly consume torn off machine parts, close in to bite enemies, or hurl Shock attacks from afar</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <ul>
        <li><strong>Lunging Crunch</strong>: leaps into the air, biting its enemies. This attack cannot be disabled.</li>
        <li><strong>Bite</strong>: it just bites the enemy. This attack cannot be disabled.</li>
        <li><strong>Swirling Shockwave</strong>: jumps into the air while shooting two stunning shockwaves. This attack cannot be disabled/</li>
        <li><strong>Shock Burst</strong>: shoots a burst of 3 Shock projectiles from its mouth. This attack can be disabled by destroying its power cell located on its back.</li>
        <li><strong>Shock Blast</strong>: shoots a powerful, homing Shock projectile that explodes on impact. This attack can be disabled by removing the power cell located on its back.</li>      
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Scrounger is very easy to take out, even in the early game. Start by applying Frost to make it more vulnerable to damage. After the frost wears off, detonate the power cell on its back to stun it and to disable its Shock attacks, then just go in for the critical hits.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
    <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Sparker</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop uncommon"><strong>Scrounger Circulator</strong> - 23%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
        <div class="drop uncommon"><strong>Scrounger Primary Nerve</strong> - 15%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 10%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 10%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 6%</div>
        </div>
    </div>
   </div>
  </div>

  <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Scrounger can be overridden, and the its module can be acquired by overriding Cauldron MU's core. As for performance, it's the exact same as the Scrapper.</p>
  </div>
 </div>
</div>
</section>

<section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Scrounger is a hunter-killer variant with reinforced armor and heightened aggression.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <ul>
        <li><strong>Lunging Crunch</strong>: leaps into the air, biting its enemies. This attack cannot be disabled.</li>
        <li><strong>Bite</strong>: it just bites the enemy. This attack cannot be disabled.</li>
        <li><strong>Swirling Shockwave</strong>: jumps into the air while shooting two stunning shockwaves. This attack cannot be disabled/</li>
        <li><strong>Shock Burst</strong>: shoots a burst of 3 Shock projectiles from its mouth. This attack can be disabled by destroying its power cell located on its back.</li>
        <li><strong>Shock Blast</strong>: shoots a powerful, homing Shock projectile that explodes on impact. This attack can be disabled by removing the power cell located on its back.</li>      
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Apex Scrounger is also very easy to take out, even in the early game. Start by applying Frost to make it more vulnerable to damage. After the frost wears off, detonate the power cell on its back to stun it and to disable its Shock attacks, then just go in for the critical hits.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
    <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop common"><strong>Sparker</strong> - 100%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop uncommon"><strong>Scrounger Circulator</strong> - 23%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
        <div class="drop uncommon"><strong>Scrounger Primary Nerve</strong> - 15%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 10%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 10%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 6%</div>
        </div>
    </div>
   </div>
  </div>
</section>
</article>
</div>
`,

"spikesnout": `

<article id="spikesnout" class="theme-machine">
 <h1 class="title">Spikesnout</h1>
 

<section class="infobox">
  <div><strong>Type:</strong>Acquisition - Lightweight</div>
  <div><strong>Real-World Inspiration:</strong>Anteater</div>
</section>

<div class="machine-tabs" role="tablist">
  <button data-variant="normal" class="active">Normal</button>
  <button data-variant="apex">Apex</button>
</div>

<section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Spikesnout is an acquisition machine that liquefies resources of the soil to extract them. It retreats if provoked, leaving clouds of vapor that strengthen allies or weakens enemies.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>It will often be found along other machines, and not in its own independent site.</p>
      <ul>
        <li><strong>Corroding Spread</strong>: shoots metal shards coated in Acid. This attack can be disabled by shooting off its Metalbite canisters.</li>
        <li><strong>Lunging Slash</strong>: jumps towards it enemy, slashing it 2 times. This attack cannot be disabled.</li>
        <li><strong>Mist Spray</strong>: shoots its enemy with a random debuffing mist towards its enemy, or a buffing mist towards its allies. This attack can be disabled by exploding the mist sac located on it tail.</li>
        <li><strong>Mist Perimiter</strong>: sprays its immediate area with a mist to buff its allies. This attack can be disabled by destroying the mist sac located on its tail.</li>
        <li><strong>Mist Sweep</strong>: swings its tail overhead, spreading a buffing of debuffing mist into the surrounding area. This attack can be disabled by removing the mist sac located on its tail.</li>
        <li><strong>Mist Dart</strong>: shoots an accurate dart of highly concentrated mist to its enemy. this attack can be disabled by shooting down the tail sac located on its tail.</li>
        </ul>
        <p>And these mists include: a yellow stamina-draining liquid stored in its tail, a blue damage-dampening liquid stored on its underbelly, and a red amplifying liquid stored on its back.</p>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Spikesnout is decently difficult to take down if it's accompanied by other machines, but with the right technique, anything will go down. Start by destroying the mist resevoirs on its back, underbelly and tail if you don't mind losing Sac Webbing, which is a key upgrade resourse, then apply Frost to slow it down, after that you anything you like, as at that point the Spikesnout will be almost dead.</p>
    </div>
   </div>
  </div>

<div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
    <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Metalbite</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 30%</div>
        <div class="drop uncommon"><strong>Spikesnout Circulator</strong> - 22%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
        <div class="drop uncommon"><strong>Spikesnout Primary Nerve</strong> - 15%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 11%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 10%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 6%</div>
        </div>
    </div>
   </div>
  </div>

  <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Spikesnout can be overridden, and the its module can be acquired by overriding Cauldron CHI's core. As for performance, it's actually the best support in the game, well-deserved 10/10, an overridden Spikesnout with the Tenakth Tactician armor, and you can solo anything, even an Apex Thunderjaw.</p>
  </div>
 </div>
</div>
</section>

<section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Spikesnout is a hunter-killer variant with reinforced armor and heightened aggression.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>It will often be found along other machines, and not in its own independent site.</p>
      <ul>
        <li><strong>Corroding Spread</strong>: shoots metal shards coated in Acid. This attack can be disabled by shooting off its Metalbite canisters.</li>
        <li><strong>Lunging Slash</strong>: jumps towards it enemy, slashing it 2 times. This attack cannot be disabled.</li>
        <li><strong>Mist Spray</strong>: shoots its enemy with a random debuffing mist towards its enemy, or a buffing mist towards its allies. This attack can be disabled by exploding the mist sac located on it tail.</li>
        <li><strong>Mist Perimiter</strong>: sprays its immediate area with a mist to buff its allies. This attack can be disabled by destroying the mist sac located on its tail.</li>
        <li><strong>Mist Sweep</strong>: swings its tail overhead, spreading a buffing of debuffing mist into the surrounding area. This attack can be disabled by removing the mist sac located on its tail.</li>
        <li><strong>Mist Dart</strong>: shoots an accurate dart of highly concentrated mist to its enemy. this attack can be disabled by shooting down the tail sac located on its tail.</li>
        </ul>
        <p>And these mists include: a yellow stamina-draining liquid stored in its tail, a blue damage-dampening liquid stored on its underbelly, and a red amplifying liquid stored on its back.</p>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Apex Spikesnout is actually difficult to take down if it's accompanied by other machines, but with the right technique, anything will go down. Start by destroying the mist resevoirs on its back, underbelly and tail if you don't mind losing Sac Webbing, which is a key upgrade resourse, then apply Frost to slow it down, after that you anything you like, as at that point the Spikesnout will be almost dead.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
    <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop common"><strong>Blaze</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop uncommon"><strong>Spikesnout Circulator</strong> - 23%</div>
        <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
        <div class="drop uncommon"><strong>Spikesnout Primary Nerve</strong> - 16%</div>
        <div class="drop rare"><strong>Machine Bone</strong> - 11%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 11%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 5%</div>
        </div>
    </div>
   </div>
  </div>
  </section>
</article>
</div>
`,

"tremortusk": `

     <article id="tremortusk" class="theme-machine">
  <h1 class="title">Tremortusk</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Mammoth</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Tremortusk is An enormous combat machine whose slow speed is offset by thick armor plates and multiple ranged weapon systems.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Salvo cannons on its sides will fire independently of the Tremortusk's actions every 13 seconds, and the shots can knock you down instantly and have a large radius.</p>
      <ul>
        <li><strong>Superheated Sling</strong>: picks up a boulder from the ground, heating it with its trunk, then throws it at the enemy leaving a scorched area in its wake. Thsi attack can be disabled by exploding the blaze sac on it belly.</li>
        <li><strong>Flame Sweep</strong>: uses its trunk to shoot flames near the ground, sending forth waves of fire that deal heavy damage. This attack can be disabled by exploding the blaze sac under its belly.</li>
        <li><strong>Tusk Grab</strong>: grabs its enemy using its tusks. This attack can be disabled by removing all of its tusks.</li>
        <li><strong>Electro Stomp</strong>: charges its legs with electricity, then stomps the ground sending out an electric shockwave. This attack can be disabled by destroying all of its sparkers.</li>
        <li><strong>Shock Stampede</strong>: charges its feet with electricity, then creates 3 smaller consecutive electric shockwaves. This attack can be disabled by removing all of its sparkers</li>
        <li><strong>Tusk Sweep</strong>: slowly starts to move towards it enemies, while swinging its tusks left and right. this attack can be disabled by shooting down all of its tusks.</li>
        <li><strong>Tusk Slam</strong>: slmas its tusks into the ground, dealing a smal AOE. This attack cn disabled by destroying all of its tusks</li>
        <li><strong>Plasma Repeater</strong>: shoots a burst of Plasma projectiles. This attack can be disabled by shooting down its Plasma cannons located near the base of its trunk, which are usable heavy weapons</li>
        <li><strong>Berserker Boost</strong>: injects itself and the surrounding area with amplifying liquid, boosting its damage and attack speed. This attack can be disabled by bursting the amplifying sac on its chest, but its will trigger the amplified effect on nearby machines.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Tremortusk is very difficult to take down, even on its own, but with the right technique, anything will go down. Start by bursting the amplifying sac on its chest, it will get amplified now but it won't be able to later on in the fight. Then shoot down the Plasma cannons on its face to use them against it, which can be very effective when followed up with impact weapons to charge the explosion. Then start targeting its Salvo cannons, which can be very annoying to dodge later on when you're low on health. After that, start shooting it with Frost, then bombard it with anything untill the Frost wears off. Then just rinse and repeat the last part untill it's dead.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
    <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop rare"><strong>Piercing Spike</strong> - 100%</div>
        <div class="drop common"><strong>Sparker</strong> - 100%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 71%</div>
        <div class="drop uncommon"><strong>Tremortusk Circulator</strong> - 70%</div>
        <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
        <div class="drop rare"><strong>Tremortusk Priamry Nerve</strong> - 63%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 30%</div>
        <div class="drop epic"><strong>Luminous Brainstem</strong> - 23%</div>
        <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
        </div>
    </div>
   </div>
  </div>

  <div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Tremortusk can be overridden, and the its module can be acquired by overriding Cauldron KAPPA's core. As for performance, its very good, like an 8/10, the only problem with having a Tremortusk on your side is that it's excruciatingly slow, but other than that, its very strong. It can even take out its Apex counterpart, let alone any machine</p>
  </div>
 </div>
</div>
</section>

<!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Tremortusk is a hunter-killer variant of the normal Tremotusk, tougher and more aggressive, with distinctive black-and-gold armor and purple musculature.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Salvo cannons on its sides will fire independently of the Tremortusk's actions every 13 seconds, and the shots can knock you down instantly and have a large radius.</p>
      <ul>
        <li><strong>Superheated Sling</strong>: picks up a boulder from the ground, heating it with its trunk, then throws it at the enemy leaving a scorched area in its wake. Thsi attack can be disabled by exploding the blaze sac on it belly.</li>
        <li><strong>Flame Sweep</strong>: uses its trunk to shoot flames near the ground, sending forth waves of fire that deal heavy damage. This attack can be disabled by exploding the blaze sac under its belly.</li>
        <li><strong>Tusk Grab</strong>: grabs its enemy using its tusks. This attack can be disabled by removing all of its tusks.</li>
        <li><strong>Electro Stomp</strong>: charges its legs with electricity, then stomps the ground sending out an electric shockwave. This attack can be disabled by destroying all of its sparkers.</li>
        <li><strong>Shock Stampede</strong>: charges its feet with electricity, then creates 3 smaller consecutive electric shockwaves. This attack can be disabled by removing all of its sparkers</li>
        <li><strong>Tusk Sweep</strong>: slowly starts to move towards it enemies, while swinging its tusks left and right. this attack can be disabled by shooting down all of its tusks.</li>
        <li><strong>Tusk Slam</strong>: slmas its tusks into the ground, dealing a smal AOE. This attack cn disabled by destroying all of its tusks</li>
        <li><strong>Plasma Repeater</strong>: shoots a burst of Plasma projectiles. This attack can be disabled by shooting down its Plasma cannons located near the base of its trunk, which are usable heavy weapons</li>
        <li><strong>Berserker Boost</strong>: injects itself and the surrounding area with amplifying liquid, boosting its damage and attack speed. This attack can be disabled by bursting the amplifying sac on its chest, but its will trigger the amplified effect on nearby machines.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Apex Tremortusk is even more resilient to damage than its normal variant, but with the right technique, anything will go down. Start by bursting the amplifying sac on its chest, it will get amplified now but it won't be able to later on in the fight. Then shoot down the Plasma cannons on its face to use them against it, which can be very effective when followed up with impact weapons to charge the explosion. Then start targeting its Salvo cannons, which can be very annoying to dodge later on when you're low on health. After that, start shooting it with Frost, then bombard it with anything untill the Frost wears off. Then just rinse and repeat the last part untill it's dead.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
    <div class="accordion-content">
        <div class="drops-grid">
        <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
        <div class="drop common"><strong>Sparker</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop rare"><strong>Piercing Spike</strong> - 100%</div>
        <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 70%</div>
        <div class="drop uncommon"><strong>Tremortusk Circulator</strong> - 69%</div>
        <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
        <div class="drop rare"><strong>Tremortusk Priamry Nerve</strong> - 63%</div>
        <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 30%</div>
        <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
        </div>
    </div>
   </div>
  </div>
  </section>
</article>
</div>
`,

"tideripper": `

<article id="tideripper" class="theme-machine aquatic">
  <h1 class="title">Tideripper</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Pleseosaurus</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Tideripper is a massive aquatic machine that uses its large Tidal disc and Purgewater jets to take down anything that might be a threat. HEPHAESTUS created the Tideripper to regulate ocean tides and help purify the oceans during Zero Dawn.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>Typical for large machines, the Tideripper is predominantly solitary. They are generally found in lakes or the ocean, where they filter sediment for resources. They only come onto dry land if they detect a threat (such as a hunter), although they will occasionally waddle onto shore.</p>
          <ul>
          <li><strong>Neck Toss</strong>: sweeps its long neck, knocking everything out of the way. This attac cannot be disabled.</li>
          <li><strong>Slipstream Tackle</strong>: creates a sort of Slip-n-Slide under it to charge at its enemy. This attack can be disabled by destroying its Purgewater belly.</li>
          <li><strong>Drenching Slam</strong>: slams its body onto the ground, creating a Purgewater shockwave. This attack can be disabled the Purgewater sac on its underbelly.</li>\
          <li><strong>Twin Strike</strong>: sweeps the area with both its tail and neck in one fluid motion. This attack cannot be disabled.</li>
          <li><strong>Flipper Leap</strong>: charges at its enemy, smashing its giant flippers along the way. This attack cannot be disabled.</li>
          <li><strong>Lunging Jaw<</strong>: rapidly launches itself at its enemy, embedding it in the ground to inject its enemies with Purgewater. This attack can be partially disabled by destroying the Purgewater sac on its belly.</li>
          <li><strong>Tidal Rush</strong>: activates its Tidal disc, shooting out high-pressure Purgewater streams over a large area which work indepenedently of the Tideripper's actions. This attack can be disabled by either removing the Tidal disc or destroying the Purgewater sac on its belly.</li>
          <li><strong>Jetstream</strong>: creates a large Purgewater jet that sweeps over a wide arc or in a straight line. This attack can be disabled by either decommissioning the Purgewater cannons or destroying the Purgewater sac on its belly.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Tiderippers are tricky because they're fast, aquatic, and heavily armored, but they have very exploitable weak points. Start by taking out its Tidal disc, as it can get very infuriating to keep getting knocked down. Then prime it with Frost to increase its damage vulnerability, after that just barrage it with anything untill the Frost wears off. When it wears off, go ahead and bombard it with Shock to open up for critical hits. Then just rinse and repeat the last two steps untill it's dead.</p>
        </div>
      </div>
    </div>

  <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
        <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
        <div class="drop common"><strong>Purgewater</strong> — 100%</div>
        <div class="drop epic"><strong>Large Machine Core</strong> — 70%</div>
        <div class="drop epic"><strong>Tideripper Circulator</strong> — 69%</div>
        <div class="drop epic"><strong>Tideripper Primary Nerve</strong> — 62%</div>
        <div class="drop rare"><strong>Volatile Sludge</strong> — 50%</div>
        <div class="drop rare"><strong>Machine Muscle</strong> — 46%</div>
        <div class="drop common"><strong>Braided Wire</strong> — 30%</div>
        <div class="drop rare"><strong>Crystal Braiding</strong> — 28%</div>
        <div class="drop rare"><strong>Luminous Brainstem</strong> — 28%</div>
        <div class="drop rare"><strong>Metal Bone</strong> — 28%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> — 16%</div>
      </div>
    </div>
  </div>
</div>

<div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Tideripper can be overridden by accessing its override module through Cauldron KAPPA's core. AS for performance, its mediocre at best, like a 5/10, because it's very slow, and very far from other machines.</p>  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Tideripper is a hunter-killer variant of the normal Tideripper, tougher and more aggressive, with distinctive black-and-gold armor and purple musculature.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>Typical for large machines, the Tideripper is predominantly solitary. They are generally found in lakes or the ocean, where they filter sediment for resources. They only come onto dry land if they detect a threat (such as a hunter), although they will occasionally waddle onto shore.</p>
          <ul>
          <li><strong>Neck Toss</strong>: sweeps its long neck, knocking everything out of the way. This attac cannot be disabled.</li>
          <li><strong>Slipstream Tackle</strong>: creates a sort of Slip-n-Slide under it to charge at its enemy. This attack can be disabled by destroying its Purgewater belly.</li>
          <li><strong>Drenching Slam</strong>: slams its body onto the ground, creating a Purgewater shockwave. This attack can be disabled the Purgewater sac on its underbelly.</li>\
          <li><strong>Twin Strike</strong>: sweeps the area with both its tail and neck in one fluid motion. This attack cannot be disabled.</li>
          <li><strong>Flipper Leap</strong>: charges at its enemy, smashing its giant flippers along the way. This attack cannot be disabled.</li>
          <li><strong>Lunging Jaw<</strong>: rapidly launches itself at its enemy, embedding it in the ground to inject its enemies with Purgewater. This attack can be partially disabled by destroying the Purgewater sac on its belly.</li>
          <li><strong>Tidal Rush</strong>: activates its Tidal disc, shooting out high-pressure Purgewater streams over a large area which work indepenedently of the Tideripper's actions. This attack can be disabled by either removing the Tidal disc or destroying the Purgewater sac on its belly.</li>
          <li><strong>Jetstream</strong>: creates a large Purgewater jet that sweeps over a wide arc or in a straight line. This attack can be disabled by either decommissioning the Purgewater cannons or destroying the Purgewater sac on its belly.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>Tiderippers are tricky because they're fast, aquatic, and heavily armored, but they have very exploitable weak points. Start by taking out its Tidal disc, as it can get very infuriating to keep getting knocked down. Then prime it with Frost to increase its damage vulnerability, after that just barrage it with anything untill the Frost wears off. When it wears off, go ahead and bombard it with Shock to open up for critical hits. Then just rinse and repeat the last two steps untill it's dead.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
        <div class="drop rare"><strong>Purgewater</strong> — 100%</div>
        <div class="drop rare"><strong>Luminous Brainstem</strong> — 100%</div>
        <div class="drop epic"><strong>Apex Tideripper Heart</strong> — 100%</div>
        <div class="drop rare"><strong>Metal Shards</strong> — 100%</div>
        <div class="drop epic"><strong>Tideripper Circulator</strong> — 70%</div>
        <div class="drop epic"><strong>Large Machine Core</strong> — 69%</div>
        <div class="drop epic"><strong>Tideripper Primary Nerve</strong> — 63%</div>
        <div class="drop rare"><strong>Volatile Sludge</strong> — 51%</div>
        <div class="drop rare"><strong>Machine Muscle</strong> — 45%</div>
        <div class="drop rare"><strong>Braided Wire</strong> — 30%</div>
        <div class="drop rare"><strong>Metal Bone</strong> — 28%</div>
        <div class="drop rare"><strong>Crystal Braiding</strong> — 28%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> — 15%</div>
      </div>
    </div>
  </div>
</div>
</section>

  <div class="tags">
    <span class="tag">machine</span>
    <span class="tag">tideripper</span>
  </div>
</article>
</div>
`,

"widemaw": `

<article id="widemaw" class="theme-machine aquatic">
  <h1 class="title">Widemaw</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Acquisition - Midweight</div>
    <div><strong>Real-World Inspiration:</strong>Hippoptamus</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Widemaw medium-sized aquisition machine often found in groups known as bloats. When threatened, it uses its massive tusks and vacuum motor to defend itself. HEPHAESTUS created the Widemaw to extract useful minerals and metals from the soil for use in the Cauldron Network.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>The Widemaw will mostly be grazing on the ground, shooting out fertilizer pods which can be collected.</p>
          <ul>
          <li><strong>Sweeping Crunch</strong>: opens its jaws wide, sucking in everything for a powerful bite. This attack cannot be disabled.</li>
          <li><strong>Rock Toss</strong>: sucks in nearby soil and sediment to create a large rock in its mouth, then infuses the rock with Purgewater to throw at its enemy. This attack can be partially disabled by destroying its Purgewater canisters.</li>
          <li><strong>Vortex Swipe</strong>: activates the vacuum generator on its throat to suck in its enemies for Drenched bite. This attack can be partially disabled by destroying its Purgewater canisters.</li>
          <li><strong>Aquatic Exhaust</strong>: shoots out Purgewater from its pod dispensers. This attack can be disabled by destroying its Purgewater canisters.</li>
          <li><strong>Striding Maw</strong>: submerges itself halfway into the ground, propelling itself towards its enemy with its mouth open ready to bite. This attack cannot be disabled.</li>
          <li><strong>Drenching Barrage</strong>: fires multiple Purgewater-infused rocks in quick succession. This attack can be partially disabled by destroying its Purgewater canisters.</li>
          <li><strong>Soaking Shockwave</strong>: spins around itself, sucking in nearby rocks and soil to form a large boulder, then it crushes that boulder to release Purgewater into the air. This attack can be disabled by destroying its Purgewater canisters.</li>
          <li><strong>Booty Blast</strong>: shoots buckshot-like projectiles from its butt, dealing both Fire and Purgewater damage. This attack can be disabled by destroying both its Purgewater canisters and its pod dispensers.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Widemaw early on is very deadly, but it has a lot of expliotable vulnerabilities. Start by knocking off or bursting its Purgewater canisters, as most of its attacks become trivial without Purgewater. Then prime it with Fire for consistent DoT, after the Fire wears off, just barrage it with Frost and Impact to take it down.</p>
        </div>
      </div>
    </div>

  <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
        <div class="drop common"><strong>Purgewater</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop rare"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop rare"><strong>Widemaw Circulator</strong> - 29%</div>
        <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
        <div class="drop rare"><strong>Widemaw Primary Nerve</strong> - 19%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 11%</div>
        <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
      </div>
    </div>
  </div>
</div>

<div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Widemaw can be overridden, and its module can be acquired by overriding Cauldron MU's core. As for performance, its decent compared to other options, maybe a 5/10. but it's capable enough to take down 2 of its apex variants.</p>
  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Widemaw is a hunter-killer variant with stronger armor and enhanced offensive systems</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>The Apex Widemaw will also mostly be grazing on the ground, shooting out fertilizer pods which can be collected.</p>
          <ul>
          <li><strong>Sweeping Crunch</strong>: opens its jaws wide, sucking in everything for a powerful bite. This attack cannot be disabled.</li>
          <li><strong>Rock Toss</strong>: sucks in nearby soil and sediment to create a large rock in its mouth, then infuses the rock with Purgewater to throw at its enemy. This attack can be partially disabled by destroying its Purgewater canisters.</li>
          <li><strong>Vortex Swipe</strong>: activates the vacuum generator on its throat to suck in its enemies for Drenched bite. This attack can be partially disabled by destroying its Purgewater canisters.</li>
          <li><strong>Aquatic Exhaust</strong>: shoots out Purgewater from its pod dispensers. This attack can be disabled by destroying its Purgewater canisters.</li>
          <li><strong>Striding Maw</strong>: submerges itself halfway into the ground, propelling itself towards its enemy with its mouth open ready to bite. This attack cannot be disabled.</li>
          <li><strong>Drenching Barrage</strong>: fires multiple Purgewater-infused rocks in quick succession. This attack can be partially disabled by destroying its Purgewater canisters.</li>
          <li><strong>Soaking Shockwave</strong>: spins around itself, sucking in nearby rocks and soil to form a large boulder, then it crushes that boulder to release Purgewater into the air. This attack can be disabled by destroying its Purgewater canisters.</li>
          <li><strong>Booty Blast</strong>: shoots buckshot-like projectiles from its butt, dealing both Fire and Purgewater damage. This attack can be disabled by destroying both its Purgewater canisters and its pod dispensers.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Widemaw is all around very deadly, but it has pretty much the same weaknesses as its normal variant. Start by knocking off or bursting its Purgewater canisters, as most of its attacks become trivial without Purgewater. Then prime it with Fire for consistent DoT, after the Fire wears off, just barrage it with Frost and Impact to take it down.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
        <div class="drop common">Metal Shards - 100%</div>
        <div class="drop common">Purgewater - 100%</div>
        <div class="drop rare">Apex Widemaw Heart - 56%</div>
        <div class="drop common">Piercing Spike - 50%</div>
        <div class="drop common">Volatile Sludge - 50%</div>
        <div class="drop rare">Machine Muscle - 30%</div>
        <div class="drop rare">Widemaw Circulator - 28%</div>
        <div class="drop rare">Medium Machine Core - 27%</div>
        <div class="drop common">Braided Wire - 20%</div>
        <div class="drop rare">Widemaw Primary Nerve - 18%</div>
        <div class="drop common">Metal Bone - 11%</div>
        <div class="drop common">Sturdy Hardplate - 11%</div>
      </div>
    </div>
  </div>
</div>
  </section>

  <div class="tags">
    <span class="tag">machine</span>
    <span class="tag">widemaw</span>
  </div>
</article>
</div>
`,

"clamberjaw": `

<article id="clamberjaw" class="theme-machine">
  <h1 class="title">Clamberjaw</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Acquisition - Lightweight</div>
    <div><strong>Real-World Inspiration:</strong>Baboon</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Clamberjaw is a small, very agile acquisition machine that tends to live high up in th trees of the Lowland Clan's jungle. It uses its scanning visor and metal-shredding claws to break down machine carcasses. HEPHAESTUS made the Clamberjaw to recycle dead machine parts to reuse them in the Cauldron network.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Clamberjaw will be found either hanging on trees or scrapping a dead machine. its also very aware of its surroundings</p>
          <ul>
          <li><strong>Flaming Volley</strong>: throws a barrage of fiery scraps at its target. This attack can be disabled by destroying its Blaze sac.</li>
          <li><strong>Toxic Tailswipe</strong>: sweeps its tail, knocking back its enemies and releasing noxious fumes into the area. This attack can be disabled by destroying its tail.</li>
          <li><strong>Ground Pound</strong>: leaps into the air, then slams into the ground, creating a small shockwave. This attack cannot be disabled.</li>
          <li><strong>Lock Lunge</strong>: jumps towards its enemy, locking it in an animation in which it grabs the enemy's legs and throws them into the air. This attack cannot be disabled.</li>
          <li><strong>Claw Slash</strong>: slashes its enemy with razor-sharp claws. This attack cannot be disabled.</li>
          <li><strong>Scrap Stash</strong>: scans the area for buried scrap, then it attaches it to its tail to empower its attack with Acid. This attack can be disabled by removing its tail.</li>
          <li><strong>Scrap Sling</strong>: throws the piece of scrap its attached to its tail, dealing damage over time in an area. This attack can be disabedby destroying its tail.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Clamberjaw is very very agile, so if you're tryingto take it down quick, then stun it with Shock or knock it down with Impact to the legs, after that just spam critical strikes untill it's dead.</p>
        </div>
      </div>
    </div>

  <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
      </div>
    </div>
  </div>
</div>

<div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p></p>
  </div>
 </div>
</div>
  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro"></p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p></p>
          <ul>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p></p>
        </div>
      </div>
    </div>

    <div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">
      Item Drops <span class="chev">▾</span>
    </div>
    <div class="accordion-content">
      <div class="drops-grid">
      </div>
    </div>
  </div>
</div>
  </section>

  <div class="tags">
    <span class="tag">machine</span>
    <span class="tag">clamberjaw</span>
  </div>
</article>
</div>
`,


"acid": `

<article id="acid">
  <h1 class="title">Acid (Corrosion)</h1>
   <section class="infobox">
   <p>Acid (also known as corrosion) is one of the new elements introduced in <em>Horizon: Forbidden West</em>. Applying Acid to an enemy's status limit produces the Corroded state, which deals damage over time to its health and armor plating. If applied long enough, armor will start to break off. While the Corroding status is active, armor will be significantly weakened and can break off with just one arrow</p>
   </section>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
     <p>Acid could be best utilized against Apex and heavyweight machines, as they tend to have a lot armor plates which need to be melted, but it could also be used effectively against medium to lightweight machines, like a Ravager for example</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Machines that're Weak to acid <span class="chev">▾</span></div>
    <div class="accordion-content">
     <ul>
      <li><strong>Normal Scrounger</strong></li>
      <li><strong>Plowhorn</strong></li>
      <li><strong>Normal/Apex Shell-Walker</strong></li>
      <li><strong>Normal/Apex Grimhorn</strong></li>
      <li><strong>Normal Ravager</strong></li>
      <li><strong>Normal Rollerback</strong></li>
      <li><strong>Normal/Apex Behemoth</strong></li>
      <li><strong>Normal/Apex Shellsnapper</strong></li>
      <li><strong>Normal/Apex Stormbird</strong></li>
      <li><strong>Normal/Apex Thunderjaw</strong></li>
      <li><strong>Apex Slaughterspine</strong></li>
      <li><strong>Specter</strong></li>
      <li><strong>Specter Prime</strong></li>
    </div>
   </div>
  </div>
   </article>
   </div>
`,

"frost": `

<article id="frost">
  <h1 class="title">Frost</h1>
   <section class="infobox">
    <p>Frost is one of the elements transferred from <em>Horizon: Zero Dawn</em>. Applying Frost to an enemy's status limit produces the Brittle state, which slows the enemy's movement and increases its susceptibility to direct damage by up to 300%, and it negates additional defense provided by armor.</p>
   </section>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
     <p>Acid could be best utilized against Apex and heavyweight machines, as they tend to have a lot armor plates which need to be melted, but it could also be used effectively against medium to lightweight machines, like a Ravager for example</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Machines that're Weak to frost <span class="chev">▾</span></div>
    <div class="accordion-content">
     <ul>
     <li><strong>Normal Scrounger</strong></li>
      <li><strong>Plowhorn</strong></li>
      <li><strong>Normal/Apex Shell-Walker</strong></li>
      <li><strong>Normal/Apex Grimhorn</strong></li>
      <li><strong>Normal Ravager</strong></li>
      <li><strong>Normal Rollerback</strong></li>
      <li><strong>Normal/Apex Behemoth</strong></li>
      <li><strong>Normal/Apex Shellsnapper</strong></li>
      <li><strong>Normal/Apex Stormbird</strong></li>
      <li><strong>Normal/Apex Thunderjaw</strong></li>
      <li><strong>Apex Slaughterspine</strong></li>
      <li><strong>Specter</strong></li>
      <li><strong>Specter Prime</strong></li>
     </ul>
    </div>
   </div>
  </div>
   </article>
`,

"rost": `
<article id="rost" class="theme-lore">
  <h1 class="title">Rost</h1>
  

  <section class="infobox">
    <div>Nora Outcast</div>
  </section>

  <section class="biography">
    <h2>Biography</h2>
    <p>A stern and cold figure, but the only one Aloy has in the wilderness of Mother's Embrace. Rost is the adoptive caretaker of Aloy, teaching her how to hunt and survive in the wilds as an outcast alongside him.</p>
    <div class="meta">Fair warning: a lot of the information listed here has been extracted from Horizon: Zero Dawn, so major spoilers to its story up ahead.</div>
    <p>Rost was once a part of the Nora tribe, among the ranks of the other hunters. But when the Red Raids started, Rost and the other hunters hurried to defend the Embrace, but the Carja managed to charge through Mother's Embrace, massacring thousands of innocent people and imprisoning thousands more to be sent back to Meridian. Among those that the Carja killed was Rost's beloved wife.</p>
    <p>When they finally managed to push back the Carja from Mother's Embrace, Rost vowed to take revenge for his wife. So when the dust settled, he requested from the High Matriarchs to become a Death-Seeker (who, similar to a Seeker, is allowed to exit Mother's Embrace, but in a quest of vengeance, and they're no longer welcome back to Mother's Embrace). After careful consideration, the High Matriarchs made him a Death-Seeker, then he set out to Meridian to take revenge for his wife.</p>
    <p>But after arriving there, he discovered that Jiran, also known as the Mad Sun-King, is dead, so his quest of vengeance was useless. Returning to the Embrace, ashamed of himself, he begged the High Matriarchs to let him back into the tribe. After some time, they let him in under two conditions: 1. that he may live as an outcast separate from the tribe, in the wilderness, 2. that he may raise a child they found at the doorstep of All-Mother's Mountain, and that child is our protagonist, Aloy.</p>
  </section>
</article>
`,

"GAIA": `
<article id="GAIA" class="theme-lore">
  <h1 class="title">GAIA</h1>
  

  <section class="infobox">
    <div>Artificial Intelligence</div>
  </section>

  <section class="biography">
    <h2>Biography</h2>
    <p>GAIA was the central intelligence of the Zero Dawn terraforming project — a sentient system created to restore life to Earth after the Faro Plague catastrophe.</p>
  </section>

  <section class="origins">
    <h2>Origins</h2>   
    <p>In 2064, when it became clear that a self-replicating Faro Plague threatened to annihilate life on Earth, Dr. Elisabet Sobeck proposed an ambitious solution: plant a seed in the planet that could rebuild the biosphere in the distant future — Zero Dawn.</p>
  </section>

  <section class="development">
    <h2>Development</h2>
    <p>Backed by significant resources from Faro Automated Solutions and government support, Sobeck and her team completed the project in months. GAIA served as the system's core, designed with empathic safeguards and coordinating nine subordinate functions responsible for disabling war machines, purifying the environment, restoring flora and fauna, and reseeding humanity.</p>
  </section>

  <section class="outcome">
       <h2>Outcome</h2>
    <p>The system largely succeeded over many centuries: hostile machines were neutralized, ecosystems recovered, and new human populations were reestablished. Much of the restoration was carried out by automated, animal-like terraforming machines modeled on prehistoric fauna.</p>
  </section>

  <section class="complications">
       <h2>Complications</h2> 
    <p>Two major failures undermined the plan. Ted Faro ordered APOLLO — the function holding human cultural records — purged, so new humans had no access to their past and quickly fragmented into tribal societies.</p>

    <p>Later, a mysterious signal infected HADES, the subordinate function designed to reboot the system if the biosphere failed. HADES became hostile and attempted to trigger a new extinction event. To stop it, GAIA sacrificed herself. Before her destruction, HADES and other subordinate functions scattered and hid within ancient systems across the land.</p>
  </section>

  <section class="aftermath">
       <h2>Aftermath</h2>
    <p>GAIA's loss destabilized the world: many terraforming machines became hostile in an event tribes call the "Derangement." HEPHAESTUS began producing combat machines that attacked hunters, and HADES sought human followers to reactivate ancient Faro war machines.</p>
  </section>

  <section class="hope">
      <h2>Hope</h2>
    <p>GAIA arranged for a genetic clone of her creator, Dr. Elisabet Sobeck, to be born right before her destruction. Raised as an outcast among the Nora, that clone — Aloy — grew into a hero who eventually confronted HADES and its allies at Meridian.</p>
  </section>

  <section class="continuation">
       <h2>Continuation</h2>
    <p>Aloy's work is ongoing: without a central intelligence, the terraforming system remains fractured. To fully restore the world, Aloy must locate backups of GAIA and reconcile the remaining subordinate functions among the ruins of the ancient world.</p>
  </section>
</article>
`,
"sun-king avad": `
<article id="sun-king-avad" class="theme-lore">
  <h1 class="title">Sun-King Avad</h1>
  

  <section class="infobox">
    <div>Carja Sun-King</div>
  </section>

  <section class="overview">
    <h2>Overview</h2>
    <p>Sun-King Avad is the 14th monarch of the Carja Tribe. Paradoxically for a man noted for his gentleness, he ascended the throne following the assassination of his father.</p>
  </section>

  <section class="origins">
    <h2>Origin & Rise</h2>
    <p>His father, Jiran—known as the Mad Sun-King—ruled shortly before the Derangement, a sudden change in machine behavior that made formerly docile machines aggressive toward humans. The Derangement followed GAIA's self-sacrifice to stop HADES, but tribes lacked that context and interpreted the events as supernatural.</p>
    <p>Influenced by opportunistic priests, Jiran concluded the Derangement could be ended by appeasing the Sun-God with human sacrifices. He launched the Red Raids—wars against neighboring peoples intended to capture slaves and offerings for Meridian.</p>
  </section>

  <section class="resistance">
    <h2>Resistance & Regicide</h2>
    <p>Unable to tolerate the atrocities, Avad first sought to change his father's policy from within. When persuasion failed, he allied with Oseram freebooters and Carja dissidents. Together they organized an uprising that ended Jiran's reign by force.</p>
  </section>

  <section class="conflicts">
    <h2>Aftermath & Threats</h2>
    <p>Jiran's death did not end Carja turmoil. Loyalists retreated to Sunfall and formed the Shadow Carja insurgency. Fanatical elements within that group joined the Eclipse—followers of HADES—who aimed to seize Meridian using ancient war machines. With Aloy's aid, Avad and his allies defeated these threats at the Battle of the Alight.</p>
  </section>

  <section class="legacy">
    <h2>Reign & Reconciliation</h2>
    <p>Avad inherited a kingdom scarred by tyranny, insurgency, and distrust among neighboring tribes. Together with figures like Aloy, Erend, Vanasha, and Blameless Marad, he has worked to protect his people and heal divisions. Since the Battle of the Alight, Avad has pursued reconciliation and the restoration of positive relations across the region.</p>
  </section>
</article>
`,

};

/* Utility: close search results */
function closeSearchResults() {
  searchResults.innerHTML = '';
  searchResults.style.display = 'none';
}

/* Render results list (does not auto-load) */
function showSearchMatches(query) {
  closeSearchResults();
  if (!query) return;
  const q = query.toLowerCase();
  const matches = [];

  // helpers
  function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function highlightMatch(text, qRaw) {
    if (!qRaw) return text;
    const re = new RegExp(escapeRegExp(qRaw), 'ig');
    return text.replace(re, (m) => `<strong class="search-hit">${m}</strong>`);
  }

  for (const id in articles) {
    // get title from the HTML string if present
    const titleMatch = articles[id].match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].trim() : id;
    if (id.includes(q) || title.toLowerCase().includes(q)) matches.push({ id, title });
  }

  if (!matches.length) {
    searchResults.style.display = 'none';
    return;
  }

  matches.sort((a, b) => a.title.localeCompare(b.title));


  // create result nodes
  matches.forEach(m => {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.setAttribute('role','option');

    const highlightedTitle = highlightMatch(m.title, query);
    const highlightedId = highlightMatch(m.id, query);

    item.innerHTML = `<div>
                        <div class="result-title">${highlightedTitle}</div>
                        <div class="result-meta">/${highlightedId}</div>
                      </div>`;
    item.addEventListener('click', () => {
      loadArticle(m.id);
      closeSearchResults();
      searchBar.value = '';
    });
    searchResults.appendChild(item);
  });

  searchResults.style.display = 'block';
}

/* Load article by id (inject into articleContainer) */
function loadArticle(id) {
  if (!articles[id]) return;
  // hide home
  homeSection.style.display = 'none';
  // inject article HTML
  articleContainer.innerHTML = articles[id];
  autoLinkCapitalizedWords(articleContainer, id);
  // init UI bits inside article
  setupAccordionAndTabs();
  // scroll to top of article container
  articleContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Setup accordion and tabs inside the injected article */
function setupAccordionAndTabs() {
  const article = document.getElementById('article-container');

  // --- 1. Setup accordions ---
  const accordionItems = article.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const chev = header.querySelector('.chev');

    // reset state
    header.setAttribute('aria-expanded', 'false');
    content.classList.remove('open');
    content.style.maxHeight = null;
    if (chev) chev.style.transform = '';

    // click behavior
    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // close all siblings in the same accordion
      const parentAccordion = header.closest('.accordion');
      parentAccordion.querySelectorAll('.accordion-content').forEach(c => {
        c.classList.remove('open');
        c.style.maxHeight = null;
        const h = c.previousElementSibling;
        if (h) h.setAttribute('aria-expanded', 'false');
        const cv = h.querySelector('.chev');
        if (cv) cv.style.transform = '';
      });

      // toggle current
      if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
        if (chev) chev.style.transform = 'rotate(180deg)';
      }
    });
  });

  // --- 2. Setup machine variant tabs ---
  const variants = article.querySelectorAll('.machine-variant');
  const buttons = article.querySelectorAll('.machine-tabs button');

  // show only the "normal" variant by default
  variants.forEach(sec => {
    sec.style.display = sec.dataset.variantSection === 'normal' ? 'block' : 'none';
  });
  buttons.forEach(btn => btn.classList.remove('active'));
  const normalBtn = article.querySelector('.machine-tabs button[data-variant="normal"]');
  if (normalBtn) normalBtn.classList.add('active');

  // tab click events
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const variant = btn.dataset.variant;
      variants.forEach(sec => {
        sec.style.display = sec.dataset.variantSection === variant ? 'block' : 'none';
      });
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* SEARCH behavior (suggestions only) */
searchBar.addEventListener('input', (e) => {
  const q = e.target.value.trim();
  if (!q) {
    // clear articles and show home if no query
    articleContainer.innerHTML = '';
    homeSection.style.display = 'flex';
    closeSearchResults();
    return;
  }
  // show matches dropdown (no instant load) — pass raw query for highlighting
  showSearchMatches(q);
});

/* Close results when clicking outside */
document.addEventListener('click', (ev) => {
  if (!ev.target.closest('.search-wrap') && !ev.target.closest('#search-results') && ev.target !== searchBar) {
    closeSearchResults();
  }
});

/* CTA button: open "explore first match" by showing results focused */
ctaExplore?.addEventListener('click', () => {
  searchBar.focus();
  searchBar.value = '';
  // optionally open results with popular items — here we just focus
});


/* Start state: show home */
homeSection.style.display = 'flex';
closeSearchResults();

/* ============================
   Dynamic scroll-based lighting
   ============================ */
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }

  // Parallax effect
  document.body.style.backgroundPositionY = -(window.scrollY * 0.15) + "px";
});


/* --- Auto-link capitalized words to article IDs (robust version) --- */


/* --- Auto-link capitalized words to article IDs (robust version, with "no self-link" rule) --- */
function slugifyForArticle(word) {
  const splitCamel = word.replace(/([a-z])([A-Z])/g, '$1-$2');
  return splitCamel
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9\-]+/g, '')
    .replace(/\-+/g, '-')
    .replace(/^\-+|\-+$/g, '');
}

function autoLinkCapitalizedWords(container, currentID) {
  if (!container) return;

  // All available article IDs
  const articleIDs = new Set(Object.keys(articles || {}));

  // Walk text nodes safely
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

        const forbidden = ['A','SCRIPT','STYLE','TEXTAREA','CODE','PRE'];
        let parent = node.parentNode;
        while (parent && parent.nodeType === 1) {
          if (forbidden.includes(parent.nodeName)) return NodeFilter.FILTER_REJECT;
          parent = parent.parentNode;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes = [];
  let node;
  while (node = walker.nextNode()) nodes.push(node);

  const capitalizedPattern = /([A-Z][A-Za-z0-9]*(?:[ \-][A-Z][A-Za-z0-9]*)*)([.,;:!?)\]\"]?)/g;

  nodes.forEach(textNode => {
    const text = textNode.nodeValue;
    let match;
    let lastIndex = 0;
    const frag = document.createDocumentFragment();
    let replacedAnything = false;

    while ((match = capitalizedPattern.exec(text)) !== null) {
      const fullMatch = match[0];
      const wordGroup = match[1];
      const punct = match[2] || '';

      if (match.index > lastIndex) {
        frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }

      // Generate ID candidates
      const candidates = [];
      candidates.push(slugifyForArticle(wordGroup));             // full phrase
      const firstWord = wordGroup.split(/\s|-/)[0];              // first segment
      if (firstWord && firstWord !== wordGroup)
        candidates.push(slugifyForArticle(firstWord));

      let foundID = null;
      for (const c of candidates) {
        if (articleIDs.has(c)) {
          foundID = c;
          break;
        }
      }

      // 🛑 Rule: do NOT link the article to itself
      if (foundID && foundID === currentID) {
        frag.appendChild(document.createTextNode(fullMatch));
      } else if (foundID) {
        replacedAnything = true;

        const a = document.createElement('a');
        a.href = `#${foundID}`;
        a.className = 'auto-link';
        a.textContent = wordGroup;

        a.addEventListener('click', e => {
          e.preventDefault();
          if (typeof loadArticle === 'function') loadArticle(foundID);
          else location.hash = foundID;
        });

        frag.appendChild(a);
        if (punct) frag.appendChild(document.createTextNode(punct));
      } else {
        frag.appendChild(document.createTextNode(fullMatch));
      }

      lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    if (replacedAnything) {
      textNode.parentNode.replaceChild(frag, textNode);
    }
  });
}

