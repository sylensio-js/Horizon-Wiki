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
const compareToggle = document.getElementById('compare-toggle');
const comparisonSection = document.getElementById('comparison-section');
const closeComparison = document.getElementById('close-comparison');
const machine1Input = document.getElementById('machine1-input');
const machine2Input = document.getElementById('machine2-input');
const machine1Results = document.getElementById('machine1-results');
const machine2Results = document.getElementById('machine2-results');
const machine1Tabs = document.getElementById('machine1-tabs');
const machine2Tabs = document.getElementById('machine2-tabs');
let machine1Variant = 'normal';
let machine2Variant = 'normal';
const comparisonResults = document.getElementById('comparison-results');

/* HTML escaping function to prevent XSS */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Electro Slam</h3>
    <p>charges nodes on its tail then slams the ground to release a burst of electricity. Destroying the tail nodes disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Venom Spray</h3>
    <p>fires a high-pressure jet of Acid or Purgewater. Destroying the elemental sac beneath its mouth stops this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Slithering Stride</h3>
    <p>burrows and surges, dealing damage and knockback. Removing the Earthgrinders on its upper neck disables this behavior.</p>
  </div>
  <div class="attack-card">
    <h3>Thunderbolt</h3>
    <p>fires a powerful electric beam from its tail nodes that explodes on impact. Destroying the tail nodes disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Sonic Stun</h3>
    <p>emits high-frequency waves that temporarily incapacitate targets. Destroy the sonic hoods on its head to stop it.</p>
  </div>
  <div class="attack-card">
    <h3>Electro Sweep</h3>
    <p>sweeps with its charged tail to hit everything in front of it. Destroying the tail nodes disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>lunges forward to bite. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Tearing Bite</h3>
    <p>charges forward biting and knocking down anything in its path. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Head Clear</h3>
    <p>uses its massive head to sweep enemies aside. This attack cannot be disabled.</p>
  </div>
 <div class="attack-card">
    <h3>Shocking Ensnare</h3>
    <p>coils around a target and detonates an electric charge from its tail. Destroying the tail nodes prevents this move.</p>
  </div>
  <div class="attack-card">
    <h3>Subterranean Shockwave</h3>
    <p>burrows underground then charges at its enemy, dealing damage and knockback in the way. Destroying the Earthgrinders on its neck disable this attack</p>
  </div>
</div>
        </div>
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
        <div class="drop rare"><strong>Metal Bone</strong> — 27%</div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Electro Slam</h3>
    <p>charges nodes on its tail then slams the ground to release a burst of electricity. Destroying the tail nodes disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Venom Spray</h3>
    <p>fires a high-pressure jet of Acid or Purgewater. Destroying the elemental sac beneath its mouth stops this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Slithering Stride</h3>
    <p>burrows and surges, dealing damage and knockback. Removing the Earthgrinders on its upper neck disables this behavior.</p>
  </div>
  <div class="attack-card">
    <h3>Thunderbolt</h3>
    <p>fires a powerful electric beam from its tail nodes that explodes on impact. Destroying the tail nodes disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Sonic Stun</h3>
    <p>emits high-frequency waves that temporarily incapacitate targets. Destroy the sonic hoods on its head to stop it.</p>
  </div>
  <div class="attack-card">
    <h3>Electro Sweep</h3>
    <p>sweeps with its charged tail to hit everything in front of it. Destroying the tail nodes disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>lunges forward to bite. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Tearing Bite</h3>
    <p>charges forward biting and knocking down anything in its path. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Head Clear</h3>
    <p>uses its massive head to sweep enemies aside. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Shocking Ensnare</h3>
    <p>coils around a target and detonates an electric charge from its tail. Destroying the tail nodes prevents this move.</p>
  </div>
  <div class="attack-card">
    <h3>Subterranean Shockwave</h3>
    <p>burrows underground then charges at its enemy, dealing damage and knockback in the way. Destroying the Earthgrinders on its neck disable this attack</p>
  </div>
</div>
       </div>
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
        <div class="drop uncommon"><strong>Slitherfang Circulator</strong> — 69%</div>
        <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Tail Sweep</h3>
    <p>swings its razor tail in a wide arc. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Hack and Slash</h3>
    <p>charges and slashes with claws and jaws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Dart Snipe</h3>
    <p>fires a precise energy dart from a shoulder cannon. Destroying the dart cannon disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Dart Burst</h3>
    <p>charges the dart cannon then fires three rapid darts. Destroying the dart cannon disables this attack.</p>
  </div>
</div>
          <p>It may also cloak and lay explosive mines.Destroy the stealth generator to stop invisibility, and destroy the mine launchers above the hind legs to stop mine deployment.</p>
        </div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Tail Sweep</h3>
    <p>swings its razor tail in a wide arc. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Hack and Slash</h3>
    <p>charges and slashes with claws and jaws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Dart Snipe</h3>
    <p>fires a precise energy dart from a shoulder cannon. Destroying the dart cannon disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Dart Burst</h3>
    <p>charges the dart cannon then fires three rapid darts. Destroying the dart cannon disables this attack.</p>
  </div>
</div>
          <p>It may also cloak and lay explosive mines. Destroy the stealth generator to stop invisibility, and destroy the mine launchers above the hind legs to stop mine deployment.</p>
        </div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Dashing Maw</h3>
    <p>drops its jaw and charges forward. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Laser Swipe</h3>
    <p>fires a Plasma beam from its mouth. Applying full Drenched status can disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Snipe</h3>
    <p>fires an accurate Plasma projectile. Applying Drenched can disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Slam</h3>
    <p>slams its tail into the ground for heavy damage. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Orbital Lances</h3>
    <p>shoots out orbital laser beacons that converge on its target, effectively trapping it. Destroying its spinetail launchers disables this attack</p>
  </div>
  <div class="attack-card">
    <h3>Explosive Maw</h3>
    <p>in Charged Form, bites the ground multiple times, releasing Plasma explosions into the surrounding area. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Lancer Beam</h3>
    <p>in Charged Form, it props up its tail, shooting out five Plasma lasers perpendicular to itself. Destroying tail emitters or applying Drenched can disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Spinetail Missiles</h3>
    <p>in Charged Form, it launches seeking Plasma missiles; destroy missile launchers and apply Drenched to disable.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Eruption</h3>
    <p>in Charged Form, plants its tail into the ground, shooting Plasma geysers under its enemies. Destroying its tail emmiters disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Pendulum Sweep</h3>
    <p>while in Charged Form, shoots Plasma beams from its mouth and tail simultaneously, swinging both in double pendulum motion</p>
  </div>
</div>
          <p><strong>Note:</strong>While it's in charged form, every Plasma attack will secrete Plasma "fountains" that will stay on the battlefield and spew out Plasma buildup</p>
         </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>The Slaughterspine is one of the hardest machines to take down in the entire game at any stage of progression, but anything will go down with the right method. Start by immediately shooting its Plasma energizers to prevent its Charged Form. If you were too late and it entered Charged Form, then barrage it with Purgewater to disable most of its attacks and focus on taking down its tail lancers once its Drenched. But if did disable its Charged form, then rip out of the Plasma launchers on its spine to use against it. Then just rinse and repeat until the machine is dead.</p>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Dashing Maw</h3>
    <p>drops its jaw and charges forward. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Laser Swipe</h3>
    <p>fires a Plasma beam from its mouth. Applying full Drenched status can disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Snipe</h3>
    <p>fires an accurate Plasma projectile. Applying Drenched can disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Slam</h3>
    <p>slams its tail into the ground for heavy damage. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Orbital Lances</h3>
    <p>shoots out orbital laser beacons that converge on its target, effectively trapping it. Destroying its spinetail launchers disables this attack</p>
  </div>
  <div class="attack-card">
    <h3>Explosive Maw</h3>
    <p>in Charged Form, bites the ground multiple times, releasing Plasma explosions into the surrounding area. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Lancer Beam</h3>
    <p>in Charged Form, it props up its tail, shooting out five Plasma lasers perpendicular to itself. Destroying tail emitters or applying Drenched can disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Spinetail Missiles</h3>
    <p>in Charged Form, it launches seeking Plasma missiles; destroy missile launchers and apply Drenched to disable.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Eruption</h3>
    <p>in Charged Form, plants its tail into the ground, shooting Plasma geysers under its enemies. Destroying its tail emmiters disables this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Pendulum Sweep</h3>
    <p>while in Charged Form, shoots Plasma beams from its mouth and tail simultaneously, swinging both in a double pendulum motion</p>
  </div>
</div>
          <p><strong>Note:</strong>While it's in charged form, every Plasma attack will secrete Plasma "fountains" that will stay on the battlefield and spew out Plasma buildup</p>
         </div>
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
    <div><strong>Type:</strong>Combat - Heavyweight</div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Carpet Shock</h3>
    <p>flies over its target, shooting down Shock bombs on everything under it. Disable by destroying the storm cannon on its chest.</p>
  </div>
  <div class="attack-card">
    <h3>Thunderbolt Dive</h3>
    <p>ascends high into the sky, then starts diving down covered in Electricity, which explodes on impact. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lightning Strike</h3>
    <p>charges its storm cannon to shoot out a focused, homing Shock bomb that explodes on impact and leaves electric residue. This attack can be disabled by removing its storm cannon.</p>
  </div>
  <div class="attack-card">
    <h3>Thunder Barrage</h3>
    <p>uses its storm cannon to fire a burst of Shock bombs that explode on impact. Destroy its storm cannon to disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Electric Cage</h3>
    <p>creates an electric field around itself, then starts to march towards it enemy, electrifying everything in its way. Remove its storm cannon to disable this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Wing Torrent</h3>
    <p>uses its thrusters to create a powerful gust of wind that deals heavy knockback. Destroy all of its wing thrusters to disable this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Thunder Whip</h3>
    <p>infuses its whip-like tail with Shock damage, then sweeps it in a wide arc. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Storm Beak</h3>
    <p>electrifies its beak, then start to stab its enemy multiple times. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Shock Talons</h3>
    <p>charges its razor talons with electricity. This attack cannot be disabled.</p>
  </div>
</div>


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
           <div class="drop common"><strong>Metal Shards</strong> — 100%</div>
           <div class="drop common"><strong>Sparker</strong> — 100%</div>
           <div class="drop epic"><strong>Crystal Braiding</strong> — 100%</div>
           <div class="drop rare"><strong>Large Machine Core</strong> — 70%</div>
           <div class="drop uncommon"><strong>Stormbird Circulator</strong> — 69%</div>
           <div class="drop rare"><strong>Stormbird Primary Nerve</strong> — 62%</div>
           <div class="drop epic"><strong>Volatile Sludge</strong> — 51%</div>
           <div class="drop uncommon"><strong>Machine Muscle</strong> — 45%</div>
           <div class="drop common"><strong>Braided Wire</strong> — 32%</div>
           <div class="drop epic"><strong>Luminous Brainstem</strong> — 29%</div>
           <div class="drop rare"><strong>Metal Bone</strong> — 28%</div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Carpet Shock</h3>
    <p>flies over its target, shooting down Shock bombs on everything under it. Disable by destroying the storm cannon on its chest.</p>
  </div>
  <div class="attack-card">
    <h3>Thunderbolt Dive</h3>
    <p>ascends high into the sky, then starts diving down covered in Electricity, which explodes on impact. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lightning Strike</h3>
    <p>charges its storm cannon to shoot out a focused, homing Shock bomb that explodes on impact and leaves electric residue. This attack can be disabled by removing its storm cannon.</p>
  </div>
  <div class="attack-card">
    <h3>Thunder Barrage</h3>
    <p>uses its storm cannon to fire a burst of Shock bombs that explode on impact. Destroy its storm cannon to disable it.</p>
  </div>
  <div class="attack-card">
    <h3>Electric Cage</h3>
    <p>creates an electric field around itself, then starts to march towards it enemy, electrifying everything in its way. Remove its storm cannon to disable this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Wing Torrent</h3>
    <p>uses its thrusters to create a powerful gust of wind that deals heavy knockback. Destroy all of its wing thrusters to disable this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Thunder Whip</h3>
    <p>infuses its whip-like tail with Shock damage, then sweeps it in a wide arc. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Storm Beak</h3>
    <p>electrifies its beak, then start to stab its enemy multiple times. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Shock Talons</h3>
    <p>charges its razor talons with electricity. This attack cannot be disabled.</p>
  </div>
</div>
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
            <div class="drop rare"><strong>Large Machine Core</strong> — 69%</div>
            <div class="drop rare"><strong>Stormbird Primary Nerve</strong> — 63%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> — 50%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> — 49%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> — 46%</div>
            <div class="drop common"><strong>Braided Wire</strong> — 30%</div>
            <div class="drop rare"><strong>Metal Bone</strong> — 28%</div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Flaming Maw</h3>
    <p>shoots flames from its mouth, the swings its head torching everything nearby. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Incendiary Wave</h3>
    <p>rears and sweeps flamethrowers in an arc, creating a damaging wall of fire. This cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Minelayer</h3>
    <p>deploys 3 waves of incendiary mines that explode on contact. Destroy the mine launcher on its back to disable.</p>
  </div>
  <div class="attack-card">
    <h3>Ignition Boost</h3>
    <p>ignites Fire behind itself to propel forward towards its enemy, leaving a burning trail. This cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Blazing Claws</h3>
    <p>slashes with fiery claws causing heavy damage and igniting targets. This cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Firestorm</h3>
    <p>ignites the surrounding area producing a damaging storm of flame. This cannot be disabled.</p>
  </div>
</div>
        .
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Flaming Maw</h3>
    <p>shoots Fire from its mouth, the swings its head torching everything nearby. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Incendiary Wave</h3>
    <p>rears and sweeps flamethrowers in an arc, creating a damaging wall of fire. This cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Minelayer</h3>
    <p>deploys 3 waves of incendiary mines that explode on contact. Destroy the mine launcher on its back to disable.</p>
  </div>
  <div class="attack-card">
    <h3>Ignition Boost</h3>
    <p>fires Fire behind itself to propel forward towards its enemy, leaving a burning trail. This cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Blazing Claws</h3>
    <p>slashes with fiery claws causing heavy damage and igniting targets. This cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Firestorm</h3>
    <p>ignites the surrounding area producing a damaging storm of flame. This cannot be disabled.</p>
  </div>
</div>
        .
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
        <div class="attack-list">
  <div class="attack-card">
    <h3>Cleaving Ice</h3>
    <p>slashes with Frost-infused claws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Frost Jaw</h3>
    <p>extends its neck to bite with a Frost-infused jaw. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Shell Slam</h3>
    <p>leaps and slams down, producing a shockwave. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Ice Whip</h3>
    <p>lashes a Frost-infused tail for heavy damage and knockback. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Kinetic Slam</h3>
    <p>while boosted, slams its shell into the ground, releasing kinetic energy in the form of a shockwave. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Kinetic Beam</h3>
    <p>while boosted, fires a powerful beam; destroy the kinetic dynamo to disable.</p>
  </div>
  <div class="attack-card">
    <h3>Shivering Barrage</h3>
    <p>fires three Frost projectiles that explode and leave Frost pools. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Glacial Salvo</h3>
    <p>while boosted, the shell fires Frost projectiles independently; destroy the shell to stop this.</p>
  </div>
</div>
        <p>When low on health, the Shellsnapper will activate its kinetic dynamo and its shell will turn from light blue to a deep orange.</p>           
        </div>
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
      <div class="attack-list">
  <div class="attack-card">
    <h3>Cleaving Ice</h3>
    <p>slashes with Frost-infused claws; This attack can be disabled by bursting the Chillwater sac located on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Frost Jaw</h3>
    <p>extends its neck to bite with a Frost-infused jaw; This attack can be disabled by bursting the Chillwater sac located on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Shell Slam</h3>
    <p>leaps from far away and slams down on its enemy leaving Frost residue in its wake; This attack can be disabled by bursting the Chillwater sac located on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Ice Whip</h3>
    <p>expands its tail to make an Frost-infused whip, lashing enemies and dealing knockback; This attack can be disabled by bursting the Chillwater sac located on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Kinetic Slam</h3>
    <p>while boosted, slams its shell into the ground, releasing kinetic energy in the form of a shockwave. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Kinetic Beam</h3>
    <p>while boosted, fires a powerful beam; destroy the kinetic dynamo to disable.</p>
  </div>
  <div class="attack-card">
    <h3>Shivering Barrage</h3>
    <p>fires three Frost projectiles that explode and leave Frost pools; This attack can be disabled by bursting the Chillwater sac located on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Glacial Salvo</h3>
    <p>while boosted, the shell fires Frost projectiles independently; This attack can be disabled by bursting the Chillwater sac located on its belly.</p>
  </div>
</div>
        <p>When low on health, the Shellsnapper will activate its kinetic dynamo and its shell will turn from light blue to a deep orange.</p>      
        deep orange.</p>      
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Ice Burst</h3>
    <p>fires a spray of Frost projectiles from its mouth; This attack can be disabled by bursting its Chillwater gullet.</p>
  </div>
  <div class="attack-card">
    <h3>Swing Bite</h3>
    <p>lunges forward with its jaws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Swipe</h3>
    <p>swings its tail in a wide arc. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lunging Jaw</h3>
    <p>launches itself to bite a target. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>bites targets at short range. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Twinfold Strike</h3>
    <p>jumps towards it enemy, swinging its tail twice in the air before slamming into the ground. This attack cannot be disabled</p>
  </div>
</div>
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


  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Snapmaw is a hunter-killer variant with reinforced armor and heightened aggression.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
<div class="accordion-content">
          <div class="attack-list">
  <div class="attack-card">
    <h3>Ice Burst</h3>
    <p>fires a spray of Frost projectiles from its mouth; This attack can be disabled by bursting its Chillwater gullet.</p>
  </div>
  <div class="attack-card">
    <h3>Swing Bite</h3>
    <p>lunges forward with its jaws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Swipe</h3>
    <p>swings its tail in a wide arc. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lunging Jaw</h3>
    <p>launches itself to bite a target. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>bites targets at short range. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Twinfold Strike</h3>
    <p>jumps towards it enemy, swinging its tail twice in the air before slamming into the ground. This attack cannot be disabled</p>
  </div>
</div>
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
        <div class="attack-list">
  <div class="attack-card">
    <h3>Claw Combo</h3>
    <p>deals consecutive strikes with its shield and lightning claws. This attack can be disabled by removing both of its claws</p>
  </div>
  <div class="attack-card">
    <h3>Left Hook</h3>
    <p>throws a punch with its deactivated shield claw; remove the shield claw to disable this attack.</p>
  </div>
  <div class="attack-card">
    <h3>Ground Slam</h3>
    <p>slams its body into the ground, dealing heavy knockback. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Electric Nova</h3>
    <p>discharges an electric burst that stuns and damages; This attack can be disabled by destroying the power generator located on its back.</p>
  </div>
  <div class="attack-card">
    <h3>Energy Gate</h3>
    <p>raises an energy shield with its left claw; remove the shield claw to disable.</p>
  </div>
  <div class="attack-card">
    <h3>Rapid Claw</h3>
    <p>quickly strikes with its lightning claw, releasing electric explosions; destroying the lightning claw disables this attack.</p>
  </div>
</div>
        </div>
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


  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Shell-Walker is a hunter-killer variant with reinforced armor and more aggressive behavior.</p>
    
    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>As with the normal form, Apex Shell-Walkers are encountered in convoys and rely on their shield and claws to defend cargo.</p>
        <div class="attack-list">
  <div class="attack-card">
    <h3>Left Hook</h3>
    <p>powerful claw swing; disable by removing the shield claw.</p>
  </div>
  <div class="attack-card">
    <h3>Ground Slam</h3>
    <p>shockwave slam. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Electric Nova</h3>
    <p>area electric discharge. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Energy Gate</h3>
    <p>energy shield deployment; disable by removing the shield claw.</p>
  </div>
  <div class="attack-card">
    <h3>Claw Combo</h3>
    <p>rapid lightning-claw strikes; destroy the lightning claw to stop it.</p>
  </div>
</div>
        </div>
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
        <div class="attack-list">
  <div class="attack-card">
    <h3>Slash</h3>
    <p>swipes with claws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>lunges to bite. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Whip</h3>
    <p>swings its tail. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Claw Swipe</h3>
    <p>fast dual-claw slashes. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Blast</h3>
    <p>fires a concentrated Plasma shot. This attack can be disabled by destroying the Plasma cell located on its hind legs.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Beam</h3>
    <p>charges and fires a continuous Plasma beam. This attack can be disabled by destroying the Plasma cell located on its hind legs.</p>
  </div>
</div>
        </div>
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
      <div class="attack-list">
  <div class="attack-card">
    <h3>Slash</h3>
    <p>claw swipe. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>lunging jaw attack. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Whip</h3>
    <p>wide tail swing. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Claw Swipe</h3>
    <p>fast dual-claw attack. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Blast</h3>
    <p>concentrated Plasma shot. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Beam</h3>
    <p>charged continuous beam. This attack cannot be disabled.</p>
  </div>
</div>
      </div>
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
      x
      <p>The Skydrifter will often be found airborne scanning for targets, so it's very unlikely you're gonna be able to sneak up to it</p>
      <div class="attack-list">
  <div class="attack-card">
    <h3>Feather Spray</h3>
    <p>shoots a burst of razor sharp feathers from its tail, This attack can be disabled by shooting down its tail</p>
  </div>
  <div class="attack-card">
    <h3>Watcher</h3>
    <p>sprays its enemies tracker fluid so that the Skydrifter will always know their location. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Razor Torrent</h3>
    <p>hovers in the air, then sweeps forward delivering 2 slashes from its razor wings. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Tail Arc</h3>
    <p>swings its tail in an area around itself. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Flaming Pounce</h3>
    <p>launches itself onto its enemy with its fiery thrusters, leaving a scorched area. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Dive Bomb</h3>
    <p>while it's flying in th air, starts diving towards its enemy, then shoots a wing blast that stun the enemy. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Blazestorm</h3>
    <p>creates a flaming tornado around itself. This attack cannot be disabled</p>
  </div>
</div>
      isabled
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


</section>

 <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Skydrifter is a hunter-killer variant with stronger armor and enhanced offensive systems.</p>


  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      x
      <p>The Skydrifter will often be found airborne scanning for targets, so it's very unlikely you're gonna be able to sneak up to it</p>
      <div class="attack-list">
  <div class="attack-card">
    <h3>Feather Spray</h3>
    <p>shoots a burst of razor sharp feathers from its tail, This attack can be disabled by shooting down its tail</p>
  </div>
  <div class="attack-card">
    <h3>Watcher</h3>
    <p>sprays its enemies tracker fluid so that the Skydrifter will always know their location. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Razor Torrent</h3>
    <p>hovers in the air, then sweeps forward delivering 2 slashes from its razor wings. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Tail Arc</h3>
    <p>swings its tail in an area around itself. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Flaming Pounce</h3>
    <p>launches itself onto its enemy with its fiery thrusters, leaving a scorched area. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Dive Bomb</h3>
    <p>while it's flying in th air, starts diving towards its enemy, then shoots a wing blast that stun the enemy. This attack cannot be disabled</p>
  </div>
  <div class="attack-card">
    <h3>Blaze Cyclone</h3>
    <p>creates a flaming tornado around itself. This attack cannot be disabled</p>
  </div>
</div>
      isabled
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
      x
      <div class="attack-list">
  <div class="attack-card">
    <h3>Lunging Crunch</h3>
    <p>leaps into the air, biting its enemies. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>it just bites the enemy. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Swirling Shockwave</h3>
    <p>jumps into the air while shooting two stunning shockwaves. This attack cannot be disabled/</p>
  </div>
  <div class="attack-card">
    <h3>Shock Burst</h3>
    <p>shoots a burst of 3 Shock projectiles from its mouth. This attack can be disabled by destroying its power cell located on its back.</p>
  </div>
  <div class="attack-card">
    <h3>Shock Blast</h3>
    <p>shoots a powerful, homing Shock projectile that explodes on impact. This attack can be disabled by removing the power cell located on its back.</p>
  </div>
</div>
      /li>      
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


</section>

<section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Scrounger is a hunter-killer variant with reinforced armor and heightened aggression.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      x
      <div class="attack-list">
  <div class="attack-card">
    <h3>Lunging Crunch</h3>
    <p>leaps into the air, biting its enemies. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Bite</h3>
    <p>it just bites the enemy. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Swirling Shockwave</h3>
    <p>jumps into the air while shooting two stunning shockwaves. This attack cannot be disabled/</p>
  </div>
  <div class="attack-card">
    <h3>Shock Burst</h3>
    <p>shoots a burst of 3 Shock projectiles from its mouth. This attack can be disabled by destroying its power cell located on its back.</p>
  </div>
  <div class="attack-card">
    <h3>Shock Blast</h3>
    <p>shoots a powerful, homing Shock projectile that explodes on impact. This attack can be disabled by removing the power cell located on its back.</p>
  </div>
</div>
      /li>      
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
x
    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      
      <p>It will often be found along other machines, and not in its own independent site.</p>
      <div class="attack-list">
  <div class="attack-card">
    <h3>Corroding Spread</h3>
    <p>shoots metal shards coated in Acid. This attack can be disabled by shooting off its Metalbite canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Lunging Slash</h3>
    <p>jumps towards it enemy, slashing it 2 times. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Spray</h3>
    <p>shoots its enemy with a random debuffing mist towards its enemy, or a buffing mist towards its allies. This attack can be disabled by exploding the mist sac located on it tail.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Perimiter</h3>
    <p>sprays its immediate area with a mist to buff its allies. This attack can be disabled by destroying the mist sac located on its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Sweep</h3>
    <p>swings its tail overhead, spreading a buffing of debuffing mist into the surrounding area. This attack can be disabled by removing the mist sac located on its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Dart</h3>
    <p>shoots an accurate dart of highly concentrated mist to its enemy. this attack can be disabled by shooting down the tail sac located on its tail.</p>
  </div>
</div>
        <p>And these mists include: a yellow stamina-draining liquid stored in its tail, a blue damage-dampening liquid stored on its underbelly, and a red amplifying liquid stored on its back.</p>
       stored on its back.</p>
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


</section>

<section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Spikesnout is a hunter-killer variant with reinforced armor and heightened aggression.</p>

    <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      x
      <p>It will often be found along other machines, and not in its own independent site.</p>
      <div class="attack-list">
  <div class="attack-card">
    <h3>Corroding Spread</h3>
    <p>shoots metal shards coated in Acid. This attack can be disabled by shooting off its Metalbite canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Lunging Slash</h3>
    <p>jumps towards it enemy, slashing it 2 times. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Spray</h3>
    <p>shoots its enemy with a random debuffing mist towards its enemy, or a buffing mist towards its allies. This attack can be disabled by exploding the mist sac located on it tail.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Perimiter</h3>
    <p>sprays its immediate area with a mist to buff its allies. This attack can be disabled by destroying the mist sac located on its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Sweep</h3>
    <p>swings its tail overhead, spreading a buffing of debuffing mist into the surrounding area. This attack can be disabled by removing the mist sac located on its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Mist Dart</h3>
    <p>shoots an accurate dart of highly concentrated mist to its enemy. this attack can be disabled by shooting down the tail sac located on its tail.</p>
  </div>
</div>
        <p>And these mists include: a yellow stamina-draining liquid stored in its tail, a blue damage-dampening liquid stored on its underbelly, and a red amplifying liquid stored on its back.</p>
       stored on its back.</p>
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
      x
      <p>The Salvo cannons on its sides will fire independently of the Tremortusk's actions every 13 seconds, and the shots can knock you down instantly and have a large radius.</p>
      <div class="attack-list">
  <div class="attack-card">
    <h3>Superheated Sling</h3>
    <p>picks up a boulder from the ground, heating it with its trunk, then throws it at the enemy leaving a scorched area in its wake. Thsi attack can be disabled by exploding the blaze sac on it belly.</p>
  </div>
  <div class="attack-card">
    <h3>Flame Sweep</h3>
    <p>uses its trunk to shoot Fire near the ground, sending forth waves of fire that deal heavy damage. This attack can be disabled by exploding the blaze sac under its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Tusk Grab</h3>
    <p>grabs its enemy using its tusks. This attack can be disabled by removing all of its tusks.</p>
  </div>
  <div class="attack-card">
    <h3>Electro Stomp</h3>
    <p>charges its legs with electricity, then stomps the ground sending out an electric shockwave. This attack can be disabled by destroying all of its sparkers.</p>
  </div>
  <div class="attack-card">
    <h3>Shock Stampede</h3>
    <p>charges its feet with electricity, then creates 3 smaller consecutive electric shockwaves. This attack can be disabled by removing all of its sparkers</p>
  </div>
  <div class="attack-card">
    <h3>Tusk Sweep</h3>
    <p>slowly starts to move towards it enemies, while swinging its tusks left and right. this attack can be disabled by shooting down all of its tusks.</p>
  </div>
  <div class="attack-card">
    <h3>Tusk Slam</h3>
    <p>slmas its tusks into the ground, dealing a smal AOE. This attack cn disabled by destroying all of its tusks</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Repeater</h3>
    <p>shoots a burst of Plasma projectiles. This attack can be disabled by shooting down its Plasma cannons located near the base of its trunk, which are usable heavy weapons</p>
  </div>
  <div class="attack-card">
    <h3>Berserker Boost</h3>
    <p>injects itself and the surrounding area with amplifying liquid, boosting its damage and attack speed. This attack can be disabled by bursting the amplifying sac on its chest, but its will trigger the amplified effect on nearby machines.</p>
  </div>
</div>
      ines.
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Tremortusk is very difficult to take down, even on its own, but with the right technique, anything will go down. Start by bursting the amplifying sac on its chest, it will get amplified now but it won't be able to later on in the fight. Then shoot down the Plasma cannons on its face to use them against it, which can be very effective when followed up with impact weapons to charge the explosion. Then start targeting its Salvo cannons, which can be very annoying to dodge later on when you're low on health. After that, start shooting it with Frost, then bombard it with anything until the Frost wears off. Then just rinse and repeat the last part until it's dead.</p>
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
      x
      <p>The Salvo cannons on its sides will fire independently of the Tremortusk's actions every 13 seconds, and the shots can knock you down instantly and have a large radius.</p>
      <div class="attack-list">
  <div class="attack-card">
    <h3>Superheated Sling</h3>
    <p>picks up a boulder from the ground, heating it with its trunk, then throws it at the enemy leaving a scorched area in its wake. Thsi attack can be disabled by exploding the blaze sac on it belly.</p>
  </div>
  <div class="attack-card">
    <h3>Flame Sweep</h3>
    <p>uses its trunk to shoot Fire near the ground, sending forth waves of fire that deal heavy damage. This attack can be disabled by exploding the blaze sac under its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Tusk Grab</h3>
    <p>grabs its enemy using its tusks. This attack can be disabled by removing all of its tusks.</p>
  </div>
  <div class="attack-card">
    <h3>Electro Stomp</h3>
    <p>charges its legs with electricity, then stomps the ground sending out an electric shockwave. This attack can be disabled by destroying all of its sparkers.</p>
  </div>
  <div class="attack-card">
    <h3>Shock Stampede</h3>
    <p>charges its feet with electricity, then creates 3 smaller consecutive electric shockwaves. This attack can be disabled by removing all of its sparkers</p>
  </div>
  <div class="attack-card">
    <h3>Tusk Sweep</h3>
    <p>slowly starts to move towards it enemies, while swinging its tusks left and right. this attack can be disabled by shooting down all of its tusks.</p>
  </div>
  <div class="attack-card">
    <h3>Tusk Slam</h3>
    <p>slmas its tusks into the ground, dealing a smal AOE. This attack cn disabled by destroying all of its tusks</p>
  </div>
  <div class="attack-card">
    <h3>Plasma Repeater</h3>
    <p>shoots a burst of Plasma projectiles. This attack can be disabled by shooting down its Plasma cannons located near the base of its trunk, which are usable heavy weapons</p>
  </div>
  <div class="attack-card">
    <h3>Berserker Boost</h3>
    <p>injects itself and the surrounding area with amplifying liquid, boosting its damage and attack speed. This attack can be disabled by bursting the amplifying sac on its chest, but its will trigger the amplified effect on nearby machines.</p>
  </div>
</div>
      
      </div>
    </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
    <p>The Apex Tremortusk is even more resilient to damage than its normal variant, but with the right technique, anything will go down. Start by bursting the amplifying sac on its chest, it will get amplified now but it won't be able to later on in the fight. Then shoot down the Plasma cannons on its face to use them against it, which can be very effective when followed up with impact weapons to charge the explosion. Then start targeting its Salvo cannons, which can be very annoying to dodge later on when you're low on health. After that, start shooting it with Frost, then bombard it with anything until the Frost wears off. Then just rinse and repeat the last part until it's dead.</p>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Neck Toss</h3>
    <p>sweeps its long neck, knocking everything out of the way. This attac cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Slipstream Tackle</h3>
    <p>creates a sort of Slip-n-Slide under it to charge at its enemy. This attack can be disabled by destroying its Purgewater belly.</p>
  </div>
  <div class="attack-card">
    <h3>Drenching Slam</h3>
    <p>slams its body onto the ground, creating a Purgewater shockwave. This attack can be disabled the Purgewater sac on its underbelly.</p>
  </div>
  <div class="attack-card">
    <h3>Twin Strike</h3>
    <p>sweeps the area with both its tail and neck in one fluid motion. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Flipper Leap</h3>
    <p>charges at its enemy, smashing its giant flippers along the way. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lunging Jaw</h3>
    <p>rapidly launches itself at its enemy, embedding it in the ground to inject its enemies with Purgewater. This attack can be partially disabled by destroying the Purgewater sac on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Tidal Rush</h3>
    <p>activates its Tidal disc, shooting out high-pressure Purgewater streams over a large area which work indepenedently of the Tideripper's actions. This attack can be disabled by either removing the Tidal disc or destroying the Purgewater sac on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Jetstream</h3>
    <p>creates a large Purgewater jet that sweeps over a wide arc or in a straight line. This attack can be disabled by either decommissioning the Purgewater cannons or destroying the Purgewater sac on its belly.</p>
  </div>
</div>
        
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Tiderippers are tricky because they're fast, aquatic, and heavily armored, but they have very exploitable weak points. Start by taking out its Tidal disc, as it can get very infuriating to keep getting knocked down. Then prime it with Frost to increase its damage vulnerability, after that just barrage it with anything until the Frost wears off. When it wears off, go ahead and bombard it with Shock to open up for critical hits. Then just rinse and repeat the last two steps until it's dead.</p>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Neck Toss</h3>
    <p>sweeps its long neck, knocking everything out of the way. This attac cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Slipstream Tackle</h3>
    <p>creates a sort of Slip-n-Slide under it to charge at its enemy. This attack can be disabled by destroying its Purgewater belly.</p>
  </div>
  <div class="attack-card">
    <h3>Drenching Slam</h3>
    <p>slams its body onto the ground, creating a Purgewater shockwave. This attack can be disabled the Purgewater sac on its underbelly.</p>
  </div>
  <div class="attack-card">
    <h3>Twin Strike</h3>
    <p>sweeps the area with both its tail and neck in one fluid motion. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Flipper Leap</h3>
    <p>charges at its enemy, smashing its giant flippers along the way. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lunging Jaw<</h3>
    <p>rapidly launches itself at its enemy, embedding it in the ground to inject its enemies with Purgewater. This attack can be partially disabled by destroying the Purgewater sac on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Tidal Rush</h3>
    <p>activates its Tidal disc, shooting out high-pressure Purgewater streams over a large area which work indepenedently of the Tideripper's actions. This attack can be disabled by either removing the Tidal disc or destroying the Purgewater sac on its belly.</p>
  </div>
  <div class="attack-card">
    <h3>Jetstream</h3>
    <p>creates a large Purgewater jet that sweeps over a wide arc or in a straight line. This attack can be disabled by either decommissioning the Purgewater cannons or destroying the Purgewater sac on its belly.</p>
  </div>
</div>
        
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
         <p>Tiderippers are tricky because they're fast, aquatic, and heavily armored, but they have very exploitable weak points. Start by taking out its Tidal disc, as it can get very infuriating to keep getting knocked down. Then prime it with Frost to increase its damage vulnerability, after that just barrage it with anything until the Frost wears off. When it wears off, go ahead and bombard it with Shock to open up for critical hits. Then just rinse and repeat the last two steps until it's dead.</p>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Sweeping Crunch</h3>
    <p>opens its jaws wide, sucking in everything for a powerful bite. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Rock Toss</h3>
    <p>sucks in nearby soil and sediment to create a large rock in its mouth, then infuses the rock with Purgewater to throw at its enemy. This attack can be partially disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Vortex Swipe</h3>
    <p>activates the vacuum generator on its throat to suck in its enemies for Drenched bite. This attack can be partially disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Aquatic Exhaust</h3>
    <p>shoots out Purgewater from its pod dispensers. This attack can be disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Striding Maw</h3>
    <p>submerges itself halfway into the ground, propelling itself towards its enemy with its mouth open ready to bite. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Drenching Barrage</h3>
    <p>fires multiple Purgewater-infused rocks in quick succession. This attack can be partially disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Soaking Shockwave</h3>
    <p>spins around itself, sucking in nearby rocks and soil to form a large boulder, then it crushes that boulder to release Purgewater into the air. This attack can be disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Booty Blast</h3>
    <p>shoots buckshot-like projectiles from its butt, dealing both Fire and Purgewater damage. This attack can be disabled by destroying both its Purgewater canisters and its pod dispensers.</p>
  </div>
</div>
        
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Sweeping Crunch</h3>
    <p>opens its jaws wide, sucking in everything for a powerful bite. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Rock Toss</h3>
    <p>sucks in nearby soil and sediment to create a large rock in its mouth, then infuses the rock with Purgewater to throw at its enemy. This attack can be partially disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Vortex Swipe</h3>
    <p>activates the vacuum generator on its throat to suck in its enemies for Drenched bite. This attack can be partially disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Aquatic Exhaust</h3>
    <p>shoots out Purgewater from its pod dispensers. This attack can be disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Striding Maw</h3>
    <p>submerges itself halfway into the ground, propelling itself towards its enemy with its mouth open ready to bite. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Drenching Barrage</h3>
    <p>fires multiple Purgewater-infused rocks in quick succession. This attack can be partially disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Soaking Shockwave</h3>
    <p>spins around itself, sucking in nearby rocks and soil to form a large boulder, then it crushes that boulder to release Purgewater into the air. This attack can be disabled by destroying its Purgewater canisters.</p>
  </div>
  <div class="attack-card">
    <h3>Booty Blast</h3>
    <p>shoots buckshot-like projectiles from its butt, dealing both Fire and Purgewater damage. This attack can be disabled by destroying both its Purgewater canisters and its pod dispensers.</p>
  </div>
</div>
        
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
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop common"><strong>Purgewater</strong> - 100%</div>
        <div class="drop rare"><strong>Apex Widemaw Heart</strong> - 56%</div>
        <div class="drop common"><strong>Piercing Spike</strong> - 50%</div>
        <div class="drop common"><strong>Volatile Sludge</strong> - 50%</div>
        <div class="drop rare"><strong>Machine Muscle</strong> - 30%</div>
        <div class="drop uncommon"><strong>Widemaw Circulator</strong> - 28%</div>
        <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 20%</div>
        <div class="drop rare"><strong>Widemaw Primary Nerve</strong> - 18%</div>
        <div class="drop common"><strong>Metal Bone</strong> - 11%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 11%</div>
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
          <div class="attack-list">
  <div class="attack-card">
    <h3>Flaming Volley</h3>
    <p>throws a barrage of fiery scraps at its target. This attack can be disabled by destroying its Blaze sac.</p>
  </div>
  <div class="attack-card">
    <h3>Toxic Tailswipe</h3>
    <p>sweeps its tail, knocking back its enemies and releasing noxious fumes into the area. This attack can be disabled by destroying its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Ground Pound</h3>
    <p>leaps into the air, then slams into the ground, creating a small shockwave. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lock Lunge</h3>
    <p>jumps towards its enemy, locking it in an animation in which it grabs the enemy's legs and throws them into the air. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Claw Slash</h3>
    <p>slashes its enemy with razor-sharp claws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Scrap Stash</h3>
    <p>scans the area for buried scrap, then it attaches it to its tail to empower its attack with Acid. This attack can be disabled by removing its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Scrap Sling</h3>
    <p>throws the piece of scrap its attached to its tail, dealing damage over time in an area. This attack can be disabled by destroying its tail.</p>
  </div>
</div>
        
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Clamberjaw is very very agile, so if you're trying to take it down quick, then stun it with Shock or knock it down with Impact to the legs, after that just spam critical strikes until it's dead.</p>
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
        <div class="drop common"><strong>Echo Shell</strong> - 100%</div>
        <div class="drop common"><strong>Blaze</strong> - 100%</div>
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop rare"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop rare"><strong>Medium Machine Core</strong> - 28%</div>
        <div class="drop rare"><strong>Clamberjaw Circulator</strong> - 26%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 20%</div>
        <div class="drop rare"><strong>Clamberjaw Primary Nerve</strong> - 18%</div>
        <div class="drop common"><strong>Metal Bone</strong> - 10%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 10%</div>
      </div>
    </div>
  </div>
</div>


  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Clamberjaw is a hunter-killer variant with increased damage and resilience.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
<div class="accordion-content">
          <p>The Clamberjaw will be found either hanging on trees or scrapping a dead machine. its also very aware of its surroundings</p>
          <div class="attack-list">
  <div class="attack-card">
    <h3>Flaming Volley</h3>
    <p>throws a barrage of fiery scraps at its target. This attack can be disabled by destroying its Blaze sac.</p>
  </div>
  <div class="attack-card">
    <h3>Toxic Tailswipe</h3>
    <p>sweeps its tail, knocking back its enemies and releasing noxious fumes into the area. This attack can be disabled by destroying its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Ground Pound</h3>
    <p>leaps into the air, then slams into the ground, creating a small shockwave. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Lock Lunge</h3>
    <p>jumps towards its enemy, locking it in an animation in which it grabs the enemy's legs and throws them into the air. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Claw Slash</h3>
    <p>slashes its enemy with razor-sharp claws. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Scrap Stash</h3>
    <p>scans the area for buried scrap, then it attaches it to its tail to empower its attack with Acid. This attack can be disabled by removing its tail.</p>
  </div>
  <div class="attack-card">
    <h3>Scrap Sling</h3>
    <p>throws the piece of scrap it attached to its tail, dealing damage over time in an area. This attack can be disabled by destroying its tail.</p>
  </div>
</div>
        

        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Clamberjaw is even more agile and resilient compared to its normal version, but it has basically the same weaknesses. So start by stunning it with either bombarding it with Shock, or just shooting its legs with Impact, then just spam critical hits until its dead</p>
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
      <div class="drop common"><strong>Blaze</strong> - 100%</div>
      <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
      <div class="drop common"><strong>Echo Shell</strong> - 100%</div>
      <div class="drop epic"><strong>Apex Clamberjaw Heart</strong> - 54%</div>
      <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
      <div class="drop rare"><strong>Machine Muscle</strong> - 31%</div>
      <div class="drop rare"><strong>Clamberjaw Circulator</strong> - 27%</div>
      <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
      <div class="drop common"><strong>Braided Wire</strong> - 20%</div>
      <div class="drop rare"><strong>Clamberjaw Primary Nerve</strong> - 18%</div>
      <div class="drop common"><strong>Metal Bone</strong> - 10%</div>
      <div class="drop common"><strong>Sturdy Hardplate</strong> - 10%</div>
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

"rollerback": `






  <article id="rollerback" class="theme-machine">
  <h1 class="title">Rollerback</h1>
  

  <section class="infobox">
    <div><strong>Type:</strong>Transport - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Pangolin</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
      <p>The Rollerback is a large, very fast combat machine that can magnetically reattach its armor plates to its body. It also uses Adhesive attack, which hinder its enemy's movement.</p>
  
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
          <div class="accordion-content">
            <div class="attack-list">
  <div class="attack-card">
    <h3>Mach Roll</h3>
    <p>ignites its thrusters, then it rolls over its enemy, leaving a trail of fire behind it. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Rock Spin</h3>
    <p>spins its body in place to kick up rocks at its enemy. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Spin Slam</h3>
    <p>rapidly spins its body, then it activates its thrusters to propell itself upward, then it slams into the ground multiple times. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Ravaging Sweep</h3>
    <p>wildly swings its tail around itself until it gets disoriented. This attack can be disabled by removing its hammer tail.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Slam</h3>
    <p>slams its tail on the enemy in quick succession. This attack can be disabled by tearing off its hammer tail.</p>
  </div>
  <div class="attack-card">
    <h3>Blaze Discharge</h3>
    <p>ignites its thrusters, then it fires a barrage of fireballs at its enemy. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Acrobatic Combo</h3>
    <p>demonstrates its agility by performing a combination of Tail Slam, Spin Slam, and Ravaging Sweep. This attack can be disabled by removing its hammer tail.</p>
  </div>
  <div class="attack-card">
    <h3>Sticky Burst</h3>
    <p>fires a barrage of Sticky projectiles that explode on impact and deal Adhesive buildup. This attack can be disabled by bursting its adhesive sacs located on its front shoulders under the armor.</p>
  </div>
</div>
          </div>
          </div>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
          <div class="accordion-content">
            <p>The Rollerback's main advantages are its agility and its Adhesive attacks, but both of these advantages can be removed at the same time. So start by destroying its gravity generator to remove its ability to reattach torn armor, then burst its Adhesive sac to disabled its Sticky Barrage, and to limit its agility, then tear off its hammer tail to disable most of its attacks. After that just stun it for the final blow.</p>
          </div>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
          <div class="accordion-content">
              <div class="drops-grid">
                <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
                <div class="drop rare"><strong>Blastpaste</strong> - 100%</div>
                <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
                <div class="drop common"><strong>Sturdy Hardplate</strong> - 70%</div>
                <div class="drop uncommon"><strong>Rollerback Circulator</strong> - 34%</div>
                <div class="drop uncommon"><strong>Machine Muscle</strong> - 30%</div>
                <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
                <div class="drop rare"><strong>Rollerback Primary Nerve</strong> - 22%</div>
                <div class="drop common"><strong>Braided Wire</strong> - 20%</div>
                <div class="drop rare"><strong>Metal Bone</strong> - 11%</div>
              </div>
            </div>
        </div>
      </div>


  </section>

  <!-- Apex Variant -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
      <p class="intro">The Apex Rollerback is a hunter-killer variant of the normal Rollerback, tougher and more aggressive, with distinctive black-and-gold armor and purple musculature.</p>

      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
  <div class="accordion-content">
            <div class="attack-list">
  <div class="attack-card">
    <h3>Mach Roll</h3>
    <p>ignites its thrusters, then it rolls over its enemy, leaving a trail of fire behind it. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Rock Spin</h3>
    <p>spins its body in place to kick up rocks at its enemy. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Spin Slam</h3>
    <p>rapidly spins its body, then it activates its thrusters to propell itself upward, then it slams into the ground multiple times. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Ravaging Sweep</h3>
    <p>wildly swings its tail around itself until it gets disoriented. This attack can be disabled by removing its hammer tail.</p>
  </div>
  <div class="attack-card">
    <h3>Tail Slam</h3>
    <p>slams its tail on the enemy in quick succession. This attack can be disabled by tearing off its hammer tail.</p>
  </div>
  <div class="attack-card">
    <h3>Blaze Discharge</h3>
    <p>ignites its thrusters, then it fires a barrage of fireballs at its enemy. This attack cannot be disabled.</p>
  </div>
  <div class="attack-card">
    <h3>Acrobatic Combo</h3>
    <p>demonstrates its agility by performing a combination of Tail Slam, Spin Slam, and Ravaging Sweep. This attack can be disabled by removing its hammer tail.</p>
  </div>
  <div class="attack-card">
    <h3>Sticky Burst</h3>
    <p>fires a barrage of Sticky projectiles that explode on impact and deal Adhesive buildup. This attack can be disabled by bursting its adhesive sacs located on its front shoulders under the armor.</p>
  </div>
</div>
          
          
          </div>
        </div>
      </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Rollerback's main advantages are its agility and its Adhesive attacks, but both of these advantages can be removed at the same time. So start by destroying its gravity generator to remove its ability to reattach torn armor, then burst its Adhesive sac to disabled its Sticky Barrage, and to limit its agility, then tear off its hammer tail to disable most of its attacks. After that just stun it for the final blow.</p>
        </div>
      </div>    
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
            <div class="drops-grid">
              <div class="drop rare"><strong>Blastpaste</strong> - 100%</div>
              <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
              <div class="drop common"><strong>Sparker</strong> - 100%</div>
              <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
              <div class="drop common"><strong>Sturdy Hardplate</strong>- 69%</div>
              <div class="drop epic"><strong>Apex Rollerback Heart</strong> - 66%</div>
              <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
              <div class="drop uncommon"><strong>Rollerback Circulator</strong> - 33%</div>
              <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
              <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
              <div class="drop rare"><strong>Rollerback Primary Nerve</strong> - 23%</div>
              <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
              <div class="drop common"><strong>Metal Bone</strong> - 10%</div>
            </div>
          </div>        
      </div>    
    </div>
  </section>
  </article>





`,

"dreadwing": `
<article id="dreadwing" class="theme-machine">
  <h1 class="title">Dreadwing</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong> Pteranodon</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Dreadwing is a large aerial combat machine inspired by Bats. It excels in aerial combat with devastating acid attacks and advanced stealth capabilities that allow it to cloak and ambush enemies from above.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Acid Bomb</h3>
              <p>Drops explosive acid projectiles from above that create corrosive pools on impact. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Stealth Cloak</h3>
              <p>Activates advanced cloaking technology to become nearly invisible while repositioning for attacks. Can be disrupted by destroying stealth generators.</p>
            </div>
            <div class="attack-card">
              <h3>Wing Slash</h3>
              <p>Performs a diving attack with razor-sharp wing blades. This attack can be reduced in effectiveness by damaging the wing components.</p>
            </div>
            <div class="attack-card">
              <h3>Acid Spit</h3>
              <p>Fires concentrated acid projectiles in rapid succession. Can be disabled by destroying the acid sacs.</p>
            </div>
            <div class="attack-card">
              <h3>Tail Whip</h3>
              <p>Uses its spiked tail to strike enemies during low-altitude passes. Cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Sonic Screech</h3>
              <p>Emits a powerful sonic blast that can stun and disorient enemies. Can be disabled by destroying the sound amplifiers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Dreadwing's stealth capabilities make it a challenging opponent. Use Concentration or Focus to track it when cloaked. Target the stealth generators first to prevent it from disappearing. Destroy the acid sacs to reduce its ranged damage output. When it's flying low, use shock weapons to ground it temporarily. The wing components are vulnerable and damaging them will reduce its mobility.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Dreadwing Circulator</strong> - 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Dreadwing Primary Nerve</strong> - 62%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Dreadwing is a hunter-killer variant with enhanced stealth technology, more potent acid attacks, and distinctive black-and-gold armor with purple energy coursing through its systems.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Corrosive Barrage</h3>
              <p>Launches multiple acid bombs in a wide area attack pattern. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Enhanced Stealth</h3>
              <p>Advanced cloaking that lasts longer and is harder to detect. Can be disrupted by destroying reinforced stealth generators.</p>
            </div>
            <div class="attack-card">
              <h3>Plasma Wing Slash</h3>
              <p>Wing attack enhanced with plasma energy for increased damage. Can be reduced by damaging wing components.</p>
            </div>
            <div class="attack-card">
              <h3>Volatile Acid Spit</h3>
              <p>Fires highly concentrated acid that creates larger corrosive areas. Can be disabled by destroying enhanced acid sacs.</p>
            </div>
            <div class="attack-card">
              <h3>Spiked Tail Strike</h3>
              <p>More aggressive tail attacks with increased range and damage. Cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Amplified Screech</h3>
              <p>More powerful sonic attack that can cause longer stun effects. Can be disabled by destroying enhanced sound amplifiers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Dreadwing is significantly more dangerous than its normal variant. Its enhanced stealth makes tracking even more difficult - use upgraded Focus and Concentration abilities. Prioritize destroying the enhanced stealth generators and acid sacs. The Apex variant is more aggressive and will use combination attacks. Shock weapons are essential for grounding it, and plasma weapons are effective against its armor. Be prepared for longer engagements and bring plenty of healing items.</p>
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
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
            <div class="drop epic"><strong>Apex Dreadwing Heart</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Dreadwing Circulator</strong> - 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Dreadwing Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>





`,

"ravager": `
<article id="ravager" class="theme-machine">
  <h1 class="title">Ravager</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Combat - Midweight</div>
    <div><strong>Real-World Inspiration:</strong> Saber-tooth Cat</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Ravager is a fast, aggressive combat machine inspired by saber-tooth cats. It excels in direct confrontation using powerful ranged weaponry and devastating melee attacks to overwhelm its enemies through brute force.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Cannon Barrage</h3>
              <p>Fires explosive rounds from its shoulder-mounted cannon in rapid succession. Can be disabled by destroying the cannon (usable as heavy weapon).</p>
            </div>
            <div class="attack-card">
              <h3>Pounce Attack</h3>
              <p>Leaps onto enemies with claws extended, pinning them down for follow-up attacks. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Claw Swipe</h3>
              <p>Slashes with razor-sharp claws in wide arcs. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Charging Ram</h3>
              <p>Charges forward at high speed to ram enemies with its armored head. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Bite Attack</h3>
              <p>Uses powerful jaws to bite and shake enemies. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Tail Whip</h3>
              <p>Swings its heavy tail to knock down enemies. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Ravager is vulnerable to Shock and Fire damage. Priority should be given to removing its cannon first to eliminate its ranged threat - the cannon can then be used as a heavy weapon against it. Use Shock weapons to stun it and create openings for critical hits. Fire weapons are effective for sustained damage over time. Maintain distance when possible and exploit openings after its charge attacks. The Ravager's aggressive nature means it will often leave itself exposed after failed attacks.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> - 100%</div>
            <div class="drop common"><strong>Sparker</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 72%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 37%</div>
            <div class="drop uncommon"><strong>Ravager Circulator</strong> - 33%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Ravager Primary Nerve</strong> - 23%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 11%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Ravager is a hunter-killer variant with enhanced armor, more powerful weapons, and distinctive black-and-gold plating with purple energy coursing through its systems.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Plasma Cannon Barrage</h3>
              <p>Fires charged plasma rounds that deal increased damage and have explosive effects. Can be disabled by destroying the cannon.</p>
            </div>
            <div class="attack-card">
              <h3>Enhanced Pounce</h3>
              <p>More aggressive leap attack with extended range and increased damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Powered Claw Strike</h3>
              <p>Claws enhanced with energy discharge for additional damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Berserker Charge</h3>
              <p>More aggressive charging attack with increased speed and impact damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Crushing Bite</h3>
              <p>Enhanced bite attack that can cause longer stun effects. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Electrified Tail Whip</h3>
              <p>Tail attack enhanced with shock damage. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Ravager requires more aggressive tactics due to its enhanced capabilities. Focus fire on the plasma cannon first to disable its most dangerous ranged attack. Use Shock weapons to stun it, but be prepared for shorter stun durations. Fire weapons remain effective for sustained damage. The Apex variant is more resilient and aggressive, so maintain greater distance and be ready to dodge more frequently. Use the environment to your advantage and always prioritize removing its cannon for use as a heavy weapon.</p>
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
            <div class="drop epic"><strong>Apex Ravager Heart</strong> - 100%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Ravager Circulator</strong> - 33%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop rare"><strong>Ravager Primary Nerve</strong> - 23%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 11%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>






`,

"thunderjaw": `






<article id="thunderjaw" class="theme-machine">
  <h1 class="title">Thunderjaw</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong>Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Tyrannosaurus Rex</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Thunderjaw is a monstrous machine equipped with a wide array of heavy artillery and melee attacks.</p>

    <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
          <div class="accordion-content">
            <div class="attack-list">

  <div class="attack-card">
    <h3>Disc Volley</h3>
    <p>Shoots a barrage of explosive, homing discs. Can be disabled by destroying the Disc Launchers (usable as heavy weapons).</p>
  </div>

  <div class="attack-card">
    <h3>Razor Jaw</h3>
    <p>Jabs the enemy with sharp mechanical jaws. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Bolt Barrage</h3>
    <p>Rapid-fire energy cannon attack. Disabled by removing the Rapidfire Cannons.</p>
  </div>

  <div class="attack-card">
    <h3>Thundering Bulldoze</h3>
    <p>Charges straight at the target, destroying anything in its path. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Foot Stomp</h3>
    <p>Stomps the ground, generating a shockwave. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Lunging Maw</h3>
    <p>Leaps forward and sweeps the area with massive jaws. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Tail Smash</h3>
    <p>Slams its tail repeatedly for massive damage. Disabled by tearing off the tail.</p>
  </div>

  <div class="attack-card">
    <h3>Tail Sweep</h3>
    <p>Wildly swings its tail in a wide arc. Disabled by tearing off the tail.</p>
  </div>

  <div class="attack-card">
    <h3>Energy Net</h3>
    <p>Fires multiple energy beams after most weapons are removed. Cannot be disabled.</p>
  </div>

</div>
          </div>
        </div>
      </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Thunderjaw is one of the mightiest base machines in the game, and it's capable of dealing a lot of damage and tanking a lot of it, but it can be taken down with the right methods. Start by tearing off one or both of its Disc launchers to use against it, then shoot down its tail to disable some of its attacks and to collect it. After that just keep applying Acid and Electricity to it until it's down.</p>
        </div>
      </div>
    </div>    
   <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
    <div class="accordion-content">
     <div class="drops-grid">
      <div class="drop common"><strong>Glowblast</strong> - 100%</div>
      <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
      <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
      <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
      <div class="drop rare"><strong>Large Machine Core</strong> - 70%</div>
      <div class="drop uncommon"><strong>Thunderjaw Circulator</strong> - 70%</div>
      <div class="drop rare"><strong>Thunderjaw Primary Nerve</strong> - 62%</div>
      <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
      <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
      <div class="drop epic"><strong>Luminous Brainstem</strong> - 29%</div>
      <div class="drop rare"><strong>Metal Bone</strong> - 29%</div>
      <div class="drop common"><strong>Sturdy Hardplate</strong> - 15%</div>
    </div>
   </div>
  </div>
  </div>

<div class="accordion">
 <div class="accordion-item">
  <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
  <div class="accordion-content">
  <p>The Thunderjaw can be overridden, and its module can be acquired by overriding Cauldron KAPPA's core. As for performance, its excellent, like a 9/10, its attacks are devastating and it can take down almost any machine, including its Apex counterpart.</p>
  </div>
 </div>
</div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
      <p class="intro">The Apex Thunderjaw is a hunter-killer variant of the normal Thunderjaw, tougher and more aggressive, with distinctive black-and-gold armor and purple musculature.</p>

    <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
          <div class="accordion-content">
            <div class="attack-list">

  <div class="attack-card">
    <h3>Disc Volley</h3>
    <p>Shoots a barrage of explosive, homing discs. Can be disabled by destroying the Disc Launchers (usable as heavy weapons).</p>
  </div>

  <div class="attack-card">
    <h3>Razor Jaw</h3>
    <p>Jabs the enemy with sharp mechanical jaws. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Bolt Barrage</h3>
    <p>Rapid-fire energy cannon attack. Disabled by removing the Rapidfire Cannons.</p>
  </div>

  <div class="attack-card">
    <h3>Thundering Bulldoze</h3>
    <p>Charges straight at the target, destroying anything in its path. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Foot Stomp</h3>
    <p>Stomps the ground, generating a shockwave. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Lunging Maw</h3>
    <p>Leaps forward and sweeps the area with massive jaws. Cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Tail Smash</h3>
    <p>Slams its tail repeatedly for massive damage. Disabled by tearing off the tail.</p>
  </div>

  <div class="attack-card">
    <h3>Tail Sweep</h3>
    <p>Wildly swings its tail in a wide arc. Disabled by tearing off the tail.</p>
  </div>

  <div class="attack-card">
    <h3>Energy Net</h3>
    <p>Fires multiple energy beams after most weapons are removed. Cannot be disabled.</p>
  </div>

</div>
          </div>
        </div>
      </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Thunderjaw is the strongest machine in the game, and it's capable of dealing way more damage than its normal counterpart, but it can also be taken down with the right methods. Start by tearing off one or both of its Disc launchers to use against it, then shoot down its tail to disable some of its attacks and to collect it. After that just keep applying Acid and Electricity to it until it's down.</p>
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
      <div class="drop common"><strong>Glowblast</strong> - 100%</div>
      <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
      <div class="drop epic"><strong>Apex Thunderjaw Heart</strong> - 100%</div>
      <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
      <div class="drop uncommon"><strong>Thunderjaw Circulator</strong> - 70%</div>
      <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
      <div class="drop rare"><strong>Thunderjaw Primary Nerve</strong> - 63%</div>
      <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
      <div class="drop rare"><strong>Piercing Spike</strong> - 49%</div>
      <div class="drop uncommon"><strong>Machine Muscle</strong> - 46%</div>
      <div class="drop rare"><strong>Metal Bone</strong> - 29%</div>
      <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
    </div>
   </div>
  </div>
  </div>
  </section>
  </article>





`,

"frostclaw": `
<article id="frostclaw" class="theme-machine">
  <h1 class="title">Frostclaw</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong> Polar Bear</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Frostclaw is a massive combat machine that uses devastating freeze attacks and brute force. It can create ice projectiles and freeze the ground around it, making it extremely dangerous in close combat.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Ice Shard Volley</h3>
              <p>Fires multiple ice projectiles that deal freeze damage. Can be disabled by destroying the freeze sacs.</p>
            </div>
            <div class="attack-card">
              <h3>Freeze Slam</h3>
              <p>Slams the ground creating a freeze shockwave. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Claw Swipe</h3>
              <p>Powerful melee attacks with razor-sharp claws. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Ice Beam</h3>
              <p>Fires a concentrated freeze beam from its mouth. Can be disabled by destroying freeze sacs.</p>
            </div>
            <div class="attack-card">
              <h3>Charge Attack</h3>
              <p>Charges forward with devastating force. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Freeze Aura</h3>
              <p>Creates a freezing field around itself. Can be disabled by destroying freeze generators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Frostclaw is vulnerable to Fire and Shock damage. Target its freeze sacs first to disable its ranged freeze attacks. Use Fire weapons to counter its freeze effects and Shock to stun it. Maintain distance when possible and use the environment to avoid its powerful charge attacks.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> - 100%</div>
            <div class="drop common"><strong>Chillwater</strong> - 100%</div>
            <div class="drop uncommon"><strong>Frostclaw Circulator</strong> - 42%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 30%</div>
            <div class="drop rare"><strong>Frostclaw Primary Nerve</strong> - 28%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 11%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Frostclaw is a hunter-killer variant with enhanced freeze capabilities and distinctive black-and-gold armor with purple energy systems.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Enhanced Ice Volley</h3>
              <p>Fires larger, more damaging ice projectiles. Can be disabled by destroying enhanced freeze sacs.</p>
            </div>
            <div class="attack-card">
              <h3>Cryo Slam</h3>
              <p>More powerful ground slam with extended freeze radius. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Powered Claw Strike</h3>
              <p>Claws enhanced with freeze energy for additional damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Freeze Laser</h3>
              <p>Concentrated freeze beam with longer range. Can be disabled by destroying enhanced freeze sacs.</p>
            </div>
            <div class="attack-card">
              <h3>Berserker Charge</h3>
              <p>More aggressive charge with freeze trail. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Cryo Field</h3>
              <p>Creates a larger, more intense freezing field. Can be disabled by destroying enhanced freeze generators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Frostclaw requires more aggressive tactics. Use Fire weapons extensively to counter its enhanced freeze effects. Target enhanced freeze sacs and generators first. Shock weapons are crucial for stunning it. The Apex variant is more resilient and aggressive, so maintain greater distance and be prepared for longer engagements.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Chillwater</strong> - 100%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 100%</div>
            <div class="drop epic"><strong>Frostclaw Sac Webbing</strong> - 100%</div>
            <div class="drop epic"><strong>Apex Frostclaw Heart</strong> - 100%</div>
            <div class="drop uncommon"><strong>Frostclaw Circulator</strong> - 42%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 30%</div>
            <div class="drop rare"><strong>Frostclaw Primary Nerve</strong> - 28%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 11%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>

`,

"rockbreaker": `
<article id="rockbreaker" class="theme-machine">
  <h1 class="title">Rockbreaker</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong> Mole/Badger</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Rockbreaker is a massive subterranean machine that can burrow underground and emerge to attack. It uses powerful sonic attacks and devastating physical strikes to overwhelm enemies.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Sonic Scream</h3>
              <p>Emits a powerful sonic blast that can stun and damage enemies. Can be disabled by destroying sound amplifiers.</p>
            </div>
            <div class="attack-card">
              <h3>Underground Charge</h3>
              <p>Burrows underground and charges at enemies from below. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Claw Strike</h3>
              <p>Powerful melee attacks with massive digging claws. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Rock Throw</h3>
              <p>Hurls large rocks at distant enemies. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Seismic Slam</h3>
              <p>Slams the ground creating shockwaves and rock debris. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Tunnel Ambush</h3>
              <p>Creates tunnels to ambush enemies from unexpected angles. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Rockbreaker is vulnerable to Shock and Freeze damage. Target its sound amplifiers to disable sonic attacks. Use Shock weapons to prevent it from burrowing and Freeze to slow its movements. Stay mobile to avoid its underground charges and use elevated terrain when possible.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop uncommon"><strong>Rockbreaker Circulator</strong> - 69%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Rockbreaker Primary Nerve</strong> - 63%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 46%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 30%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 15%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Rockbreaker is a hunter-killer variant with enhanced burrowing capabilities and more destructive attacks, featuring black-and-gold armor with purple energy systems.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Amplified Scream</h3>
              <p>More powerful sonic blast with wider range and longer stun duration. Can be disabled by destroying enhanced sound amplifiers.</p>
            </div>
            <div class="attack-card">
              <h3>Seismic Charge</h3>
              <p>Enhanced underground charge that creates larger shockwaves. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Powered Claw Strike</h3>
              <p>Claws enhanced with energy discharge for additional damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Boulder Barrage</h3>
              <p>Throws multiple large rocks in rapid succession. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Earthquake Slam</h3>
              <p>More devastating ground slam with extended shockwave range. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Network Tunnels</h3>
              <p>Creates multiple tunnel entrances for complex ambush patterns. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Rockbreaker is significantly more dangerous with enhanced burrowing speed and more complex attack patterns. Use Shock weapons extensively to disrupt its burrowing. Target enhanced sound amplifiers immediately. The Apex variant creates more tunnels and is more unpredictable, so maintain constant movement and use ranged attacks when possible.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop epic"><strong>Apex Rockbreaker Heart</strong> - 100%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
            <div class="drop uncommon"><strong>Rockbreaker Circulator</strong> - 69%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Rockbreaker Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 46%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 30%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 15%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>

`,

"behemoth": `
<article id="behemoth" class="theme-machine">
  <h1 class="title">Behemoth</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Transport - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong> Rhinoceros</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Behemoth is a massive transport machine designed to carry heavy cargo across long distances. Its thick armor and powerful charge attacks make it a formidable opponent when threatened.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Cargo Launcher</h3>
              <p>Fires explosive cargo containers from its back-mounted launchers. Destroying the cargo launchers disables this attack and provides usable heavy weapons.</p>
            </div>
            <div class="attack-card">
              <h3>Charging Ram</h3>
              <p>Charges forward with devastating force using its armored head. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Horn Strike</h3>
              <p>Powerful upward thrust with its massive horn. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Stomp Attack</h3>
              <p>Stomps the ground with massive feet creating shockwaves. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Tail Sweep</h3>
              <p>Swings its heavy tail in a wide arc. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Defensive Stance</h3>
              <p>Lowers its head and charges up for a more powerful ram attack. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Behemoth is vulnerable to Shock and Acid damage. Target its cargo launchers first to disable ranged attacks and obtain heavy weapons. Use Shock to stun it and Acid to weaken its thick armor. Stay mobile to avoid its devastating charge attacks and use the environment to your advantage.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 71%</div>
            <div class="drop uncommon"><strong>Behemoth Circulator</strong> - 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Behemoth Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 30%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Behemoth is a hunter-killer variant with enhanced armor and more destructive cargo launchers, featuring black-and-gold plating with purple energy systems.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Enhanced Cargo Launcher</h3>
              <p>Fires larger, more explosive cargo containers with wider blast radius. Destroying the launchers disables this attack and provides enhanced heavy weapons.</p>
            </div>
            <div class="attack-card">
              <h3>Berserker Charge</h3>
              <p>More aggressive charge with increased speed and damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Powered Horn Strike</h3>
              <p>Horn attack enhanced with energy discharge. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Seismic Stomp</h3>
              <p>More powerful ground stomp with extended shockwave range. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Crushing Tail Sweep</h3>
              <p>Enhanced tail attack with increased range and damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Armored Stance</h3>
              <p>Enhanced defensive posture with increased armor and charge power. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Behemoth requires more aggressive tactics due to its enhanced armor and weapons. Use Shock extensively to stun it and Acid to weaken its reinforced plating. Target enhanced cargo launchers immediately for heavy weapons. The Apex variant is more aggressive and resilient, requiring longer engagements and careful positioning.</p>
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
            <div class="drop epic"><strong>Apex Behemoth Heart</strong> - 100%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 71%</div>
            <div class="drop uncommon"><strong>Behemoth Circulator</strong> - 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Behemoth Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 30%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>
`,

"grimhorn": `
<article id="grimhorn" class="theme-machine">
  <h1 class="title">Grimhorn</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Combat - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong> Triceratops</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Grimhorn is a heavily armored combat machine with a distinctive three-horned head crest. It uses powerful charge attacks and defensive maneuvers to overwhelm enemies through brute force and tactical positioning.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Triple Horn Charge</h3>
              <p>Charges forward with all three horns aimed at the target for devastating damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Plasma Cannon</h3>
              <p>Fires concentrated plasma blasts from shoulder-mounted cannons. Destroying the plasma cannons disables this attack and provides usable heavy weapons.</p>
            </div>
            <div class="attack-card">
              <h3>Shield Bash</h3>
              <p>Uses its armored head crest as a shield to ram enemies. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Tail Club Strike</h3>
              <p>Swings its heavy, club-like tail for massive impact damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Defensive Formation</h3>
              <p>Lowers its head and spreads its stance for increased defense and charge preparation. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Ground Pound</h3>
              <p>Rears up and slams down with front legs creating shockwaves. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Grimhorn is vulnerable to Acid and Shock damage. Target its plasma cannons first to disable ranged attacks and obtain heavy weapons. Use Acid to weaken its thick armor plating and Shock to stun it. Avoid frontal confrontations due to its powerful charge attacks and try to attack from the sides or rear.</p>
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
            <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Grimhorn Circulator</strong> - 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Grimhorn Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Variant</h2>
    <p class="intro">The Apex Grimhorn is a hunter-killer variant with enhanced armor, more powerful plasma weapons, and distinctive black-and-gold plating with purple energy coursing through its systems.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Powered Triple Charge</h3>
              <p>Enhanced charge attack with energy-infused horns for increased damage and range. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Enhanced Plasma Cannon</h3>
              <p>Fires more powerful plasma blasts with explosive effects. Destroying the cannons disables this attack and provides enhanced heavy weapons.</p>
            </div>
            <div class="attack-card">
              <h3>Energy Shield Bash</h3>
              <p>Shield attack enhanced with energy discharge for additional damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Seismic Tail Strike</h3>
              <p>Enhanced tail attack that creates larger shockwaves on impact. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Fortified Stance</h3>
              <p>Enhanced defensive formation with increased armor and energy shielding. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Earthquake Pound</h3>
              <p>More powerful ground slam with extended shockwave range and duration. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Grimhorn requires more aggressive tactics due to its enhanced capabilities. Use Acid extensively to weaken its reinforced armor and Shock to disrupt its energy systems. Target enhanced plasma cannons immediately for powerful heavy weapons. The Apex variant is more aggressive and has better defensive capabilities, requiring careful positioning and sustained attacks.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
            <div class="drop common"><strong>Metalbite</strong> - 100%</div>
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop epic"><strong>Apex Grimhorn Heart</strong> - 100%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Grimhorn Circulator</strong> - 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Grimhorn Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>
`,

"fireclaw": `

<article id="fireclaw" class="theme-machine">
  <h1 class="title">Fireclaw</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong>Aquisition - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong>Grizzly Bear</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="apex">Apex</button>
  </div>

  <!-- Normal Variant -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Variant</h2>
    <p class="intro">The Fireclaw is an enormous prototype machine that circulates molten fluids for its attacks and defensive capabilities. It is extremely lethal.</p>

    <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
          <div class="accordion-content">
            <div class="attack-list">

  <div class="attack-card">
    <h3>Volcanic Burst</h3>
    <p>Embeds its claws into the ground, creating a lava eruption under its enemy. This attack can be disabled by destroying its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Molten Barrage</h3>
    <p>Throws multiple flaming rocks in quick succession. This attack can be partially disabled by bursting its Blaze sac</p>
  </div>

  <div class="attack-card">
    <h3>Leaping Slice</h3>
    <p>Lunges itself onto the enemy, slashing everything in the way. This attack cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Blazing Combo</h3>
    <p>Stands on its hind legs, then starts to slice'n'dice its enemy with fiery claws. This attack can be disabled by bursting its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Flaming Discharge</h3>
    <p>Sprays its immediate area with flammable gas, then ignites the gas to scorch everything around it. This attack can be disabled by destroying its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Scorching Backslam</h3>
    <p>Leaps into the air, then slams its back onto its enemy to release a fiery explosion. This attack can be disabled by bursting its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Flaming Sling</h3>
    <p>Digs up a large boulder, then it throws it at its enemy, which it then explodes. This attack can be partially disabled by destroying its Blaze sac.</p>
  </div>
</div>
<p>After about 40% of its health is gone, it will enter a frenzied mode where all attacks will deal more Fire damage and drop tiny embers, similar to a Slaughterspine's Charged Form. It will also start attacking way faster and more wildly.</p>
          </div>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
          <div class="accordion-content">
            <p>The Fireclaw is quite a formidable machine especially in its frenzied mode, but it has some very large weakpoints. Start by incapcitating it by popping its Sparkers, since it has 4 of them, just rinse and repeat until it's dead.</p>
          </div>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
          <div class="accordion-content">
            <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Blaze</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Fireclaw Circulator</strong> - 69%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 68%</div>
            <div class="drop rare"><strong>Fireclaw Primary Nerve</strong> - 64%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 51%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 27%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 15%</div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section class="machine-variant" data-variant-section="apex">
      <h2>Apex Variant</h2>
      <p class="intro">The Fireclaw Apex is a variant of the Fireclaw that has a more aggressive and dangerous attack pattern. It is also more durable and can have a higher health pool.</p>

      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
          <div class="accordion-content">
            <div class="attack-list">

  <div class="attack-card">
    <h3>Volcanic Burst</h3>
    <p>Embeds its claws into the ground, creating a lava eruption under its enemy. This attack can be disabled by destroying its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Molten Barrage</h3>
    <p>Throws multiple flaming rocks in quick succession. This attack can be partially disabled by bursting its Blaze sac</p>
  </div>

  <div class="attack-card">
    <h3>Leaping Slice</h3>
    <p>Lunges itself onto the enemy, slashing everything in the way. This attack cannot be disabled.</p>
  </div>

  <div class="attack-card">
    <h3>Blazing Combo</h3>
    <p>Stands on its hind legs, then starts to slice'n'dice its enemy with fiery claws. This attack can be disabled by bursting its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Flaming Discharge</h3>
    <p>Sprays its immediate area with flammable gas, then ignites the gas to scorch everything around it. This attack can be disabled by destroying its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Scorching Backslam</h3>
    <p>Leaps into the air, then slams its back onto its enemy to release a fiery explosion. This attack can be disabled by bursting its Blaze sac.</p>
  </div>

  <div class="attack-card">
    <h3>Flaming Sling</h3>
    <p>Digs up a large boulder, then it throws it at its enemy, which it then explodes. This attack can be partially disabled by destroying its Blaze sac.</p>
  </div>
</div>
<p>After about 40% of its health is gone, it will enter a frenzied mode where all attacks will deal more Fire damage and drop tiny embers, similar to a Slaughterspine's Charged Form. It will also start attacking way faster and more wildly.</p>
          </div>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
          <div class="accordion-content">
            <p>The Apex Fireclaw is even more ferocious as an aquisition machine, but it has the same weaknesses as its normal counterpart.</p>
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
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
            <div class="drop epic"><strong>Apex Fireclaw Heart</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Fireclaw Circulator</strong> - 70%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Fireclaw Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop epic"><strong>Piercing Spike</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 15%</div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </article>
                
`,

"bellowback": `
<article id="bellowback" class="theme-machine">
  <h1 class="title">Bellowback</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Transport - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong> Brontosaurus</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="fire" class="active">Fire Bellowback</button>
    <button data-variant="frost">Frost Bellowback</button>
    <button data-variant="acid">Acid Bellowback</button>
    <button data-variant="apex">Apex Bellowback</button>
  </div>

  <!-- Fire Bellowback -->
  <section class="machine-variant" data-variant-section="fire">
    <h2>Fire Bellowback</h2>
    <p class="intro">The Fire Bellowback is a massive transport machine that uses fire-based attacks and can launch devastating flame projectiles from its cargo sacs.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Flame Spit</h3>
              <p>Fires concentrated fire projectiles from its mouth. Can be disabled by destroying the blaze sac on its back.</p>
            </div>
            <div class="attack-card">
              <h3>Cargo Launch</h3>
              <p>Launches explosive cargo containers from its back. Can be disabled by destroying the cargo launcher (becomes usable heavy weapon).</p>
            </div>
            <div class="attack-card">
              <h3>Tail Sweep</h3>
              <p>Swings its massive tail in wide arcs. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Stomp Attack</h3>
              <p>Stomps with powerful legs creating shockwaves. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Fire Breath</h3>
              <p>Breathes a stream of fire in front of it. Can be partially disabled by destroying the blaze sac (destroyed, not collectible).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Fire Bellowback is vulnerable to Freeze and Shock damage. Target the blaze sacs first to disable fire attacks, then focus on cargo containers. Use Freeze weapons to slow it down and Shock to stun it for critical hits.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Blaze</strong> - 100%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 70%</div>
            <div class="drop uncommon"><strong>Bellowback Circulator</strong> - 69%</div>
            <div class="drop rare"><strong>Bellowback Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Frost Bellowback -->
  <section class="machine-variant" data-variant-section="frost">
    <h2>Frost Bellowback</h2>
    <p class="intro">The Frost Bellowback uses ice-based attacks and can freeze the battlefield with its chillwater projectiles and cargo containers.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Frost Spit</h3>
              <p>Fires concentrated freeze projectiles from its mouth. Can be disabled by destroying the chillwater sac on its back.</p>
            </div>
            <div class="attack-card">
              <h3>Ice Cargo Launch</h3>
              <p>Launches freezing cargo containers from its back. Can be disabled by destroying the cargo launcher (becomes usable heavy weapon).</p>
            </div>
            <div class="attack-card">
              <h3>Tail Sweep</h3>
              <p>Swings its massive tail in wide arcs. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Stomp Attack</h3>
              <p>Stomps with powerful legs creating shockwaves. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Freeze Breath</h3>
              <p>Breathes a stream of freezing mist. Can be partially disabled by destroying the chillwater sac (destroyed, not collectible).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Frost Bellowback is vulnerable to Fire and Shock damage. Target the chillwater sacs first to disable freeze attacks. Use Fire weapons to counter its freeze effects and Shock to stun it for critical hits.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Chillwater</strong> - 100%</div>
            <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 70%</div>
            <div class="drop uncommon"><strong>Bellowback Circulator</strong> - 69%</div>
            <div class="drop rare"><strong>Bellowback Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 28%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Acid Bellowback -->
  <section class="machine-variant" data-variant-section="acid">
    <h2>Acid Bellowback</h2>
    <p class="intro">The Acid Bellowback uses corrosive attacks and can launch acid cargo containers that create damaging pools on the battlefield.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Acid Spit</h3>
              <p>Fires concentrated acid projectiles from its mouth. Can be disabled by destroying the acid sac on its back.</p>
            </div>
            <div class="attack-card">
              <h3>Corrosive Cargo Launch</h3>
              <p>Launches acid cargo containers from its back. Can be disabled by destroying the cargo launcher (becomes usable heavy weapon).</p>
            </div>
            <div class="attack-card">
              <h3>Tail Sweep</h3>
              <p>Swings its massive tail in wide arcs. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Stomp Attack</h3>
              <p>Stomps with powerful legs creating shockwaves. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Acid Breath</h3>
              <p>Breathes a stream of corrosive mist. Can be partially disabled by destroying the acid sac (destroyed, not collectible).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Acid Bellowback is vulnerable to Purgewater and Shock damage. Target the acid sacs first to disable corrosive attacks. Use Purgewater weapons to neutralize acid effects and Shock to stun it for critical hits.</p>
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
            <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Bellowback Circulator</strong> - 69%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Bellowback Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Apex Bellowback -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Bellowback</h2>
    <p class="intro">The Apex Bellowback is a hunter-killer variant with enhanced capabilities and distinctive black-and-gold armor.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Enhanced Projectile Spit</h3>
              <p>Fires more powerful projectiles with larger blast radius. Can be disabled by destroying the enhanced elemental sac on its back.</p>
            </div>
            <div class="attack-card">
              <h3>Explosive Cargo Launch</h3>
              <p>Launches highly explosive cargo from its back. Can be disabled by destroying the enhanced cargo launcher (becomes usable heavy weapon).</p>
            </div>
            <div class="attack-card">
              <h3>Powered Tail Sweep</h3>
              <p>Enhanced tail attack with increased damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Enhanced Breath Attack</h3>
              <p>More intense breath attack with longer range. Can be partially disabled by destroying the enhanced elemental sac (destroyed, not collectible).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Bellowback requires more aggressive tactics. Use appropriate elemental counters and target enhanced sacs immediately. Shock weapons are crucial for stunning it during its enhanced attacks.</p>
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
            <div class="drop epic"><strong>Apex Bellowback Heart</strong> - 100%</div>
            <div class="drop epic"><strong>Luminous Brainstem</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 76%</div>
            <div class="drop uncommon"><strong>Bellowback Circulator</strong> - 69%</div>
            <div class="drop rare"><strong>Large Machine Core</strong> - 69%</div>
            <div class="drop rare"><strong>Bellowback Primary Nerve</strong> - 63%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop rare"><strong>Piercing Spike</strong> - 50%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 45%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 28%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 16%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>
`,

"clawstrider": `
<article id="clawstrider" class="theme-machine">
  <h1 class="title">Clawstrider</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Combat/Mount - Mediumweight</div>
    <div><strong>Real-World Inspiration:</strong> Velociraptor</div>
  </section>

  <div class="machine-tabs" role="tablist">
    <button data-variant="normal" class="active">Normal</button>
    <button data-variant="elemental-fire">fire Elemental</button>
    <button data-variant="elemental-acid">acid Elemental</button>
    <button data-variant="apex">Apex</button>
    <button data-variant="apex-fire">Apex fire</button>
    <button data-variant="apex-acid">Apex acid</button>
  </div>

  <!-- Normal Clawstrider -->
  <section class="machine-variant" data-variant-section="normal">
    <h2>Normal Clawstrider</h2>
    <p class="intro">The Clawstrider is a fast, agile combat machine designed as a hunter-killer. It uses speed and precision strikes to overwhelm enemies with hit-and-run tactics.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Claw Strike</h3>
              <p>Fast slashing attacks with razor-sharp claws. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Pounce Attack</h3>
              <p>Leaps onto enemies to pin them down. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Tail Whip</h3>
              <p>Swings its bladed tail in wide arcs. Can be disabled by removing the razor tail (becomes usable heavy weapon).</p>
            </div>
            <div class="attack-card">
              <h3>Charge Attack</h3>
              <p>Charges forward at high speed. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Bite Attack</h3>
              <p>Powerful jaw attack at close range. This attack cannot be disabled.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Clawstrider is vulnerable to Shock and Freeze damage. Use Shock weapons to stun it and interrupt its fast attacks. Target the razor tail to disable its most dangerous ranged attack. Freeze weapons can slow it down for easier targeting.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 73%</div>
            <div class="drop uncommon"><strong>Clawstrider Circulator</strong> - 42%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 41%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop rare"><strong>Clawstrider Primary Nerve</strong> - 23%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Clawstrider can be overridden after hacking Cauldron IOTA's core. As a mount, it's mediocre at best since its not very fast and its pathfinding isn't the best, but as a support machine, it's amazing just because of its razor tail and sharp claws.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Fire Elemental Clawstrider -->
  <section class="machine-variant" data-variant-section="elemental-fire">
    <h2>Fire Elemental Clawstrider</h2>
    <p class="intro">The Fire Elemental Clawstrider has enhanced fire-based attacks and can launch explosive projectiles from its mounted launcher.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Flaming Claw Strike</h3>
              <p>Claws enhanced with fire damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Fire Bomb Launch</h3>
              <p>Launches explosive fire projectiles from back-mounted launcher. Can be disabled by destroying the blaze bomb launcher (destroyed, not usable).</p>
            </div>
            <div class="attack-card">
              <h3>Burning Pounce</h3>
              <p>Pounce attack that leaves fire damage over time. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Ignited Tail Whip</h3>
              <p>Tail attack enhanced with fire damage. Can be disabled by removing the razor tail (becomes usable heavy weapon).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Target the blaze bomb launcher first to disable its ranged fire attacks. Use Freeze weapons to counter its fire effects and Shock to stun it. The fire variant is more aggressive, so maintain distance when possible.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Blaze</strong> - 100%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 73%</div>
            <div class="drop uncommon"><strong>Clawstrider Circulator</strong> - 42%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 41%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop rare"><strong>Clawstrider Primary Nerve</strong> - 23%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
<div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>Both elemental clawstriders have the exact same abilities, they both can be overridden after hacking Cauldron IOTA's core. As a mount, they're also very bad, but as combat support machines, they're even better than their normal counterpart becuase the mounted heavy attack can shoot out 3 elemental bombs that leave a area of that specific variant.</p>
        </div>
      </div>
    </div>
    
  </section>

  <!-- Acid Elemental Clawstrider -->
  <section class="machine-variant" data-variant-section="elemental-acid">
    <h2>Acid Elemental Clawstrider</h2>
    <p class="intro">The Acid Elemental Clawstrider uses corrosive attacks and can launch acid bombs that create damaging pools on the battlefield.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Corrosive Claw Strike</h3>
              <p>Claws enhanced with acid damage that can corrode armor. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Acid Bomb Launch</h3>
              <p>Launches corrosive projectiles that create acid pools. Can be disabled by destroying the acid bomb launcher (destroyed, not usable).</p>
            </div>
            <div class="attack-card">
              <h3>Acidic Pounce</h3>
              <p>Pounce attack that applies acid damage over time. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Corrosive Tail Whip</h3>
              <p>Tail attack enhanced with acid damage. Can be disabled by removing the razor tail (becomes usable heavy weapon).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Target the acid bomb launcher first to disable its ranged corrosive attacks. Use Purgewater weapons to neutralize acid effects and Shock to stun it. Avoid acid pools created by its attacks.</p>
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
            <div class="drop common"><strong>Braided Wire</strong> - 73%</div>
            <div class="drop uncommon"><strong>Clawstrider Circulator</strong> - 42%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 41%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop rare"><strong>Clawstrider Primary Nerve</strong> - 23%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
        <div class="accordion-content">
        <p>Both elemental clawstriders have the exact same abilities, they both can be overridden after hacking Cauldron IOTA's core. As a mount, they're also very bad, but as combat support machines, they're even better than their normal counterpart becuase the mounted heavy attack can shoot out 3 elemental bombs that leave a area of that specific variant.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Apex Clawstrider -->
  <section class="machine-variant" data-variant-section="apex">
    <h2>Apex Clawstrider</h2>
    <p class="intro">The Apex Clawstrider is a hunter-killer variant with enhanced speed, armor, and distinctive black-and-gold plating with purple energy systems.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Enhanced Claw Strike</h3>
              <p>More powerful slashing attacks with increased damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Powered Pounce</h3>
              <p>Enhanced pounce attack with longer range and more damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Plasma Tail Whip</h3>
              <p>Tail attack enhanced with plasma energy. Can be disabled by removing the razor tail (becomes usable heavy weapon).</p>
            </div>
            <div class="attack-card">
              <h3>Berserker Charge</h3>
              <p>More aggressive charge attack with increased speed. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Glowblast Detonation</h3>
              <p>Can detonate glowblast canisters for area damage. Can be disabled by destroying glowblast canisters.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>The Apex Clawstrider is significantly more dangerous and faster. Use Shock weapons extensively to stun it and interrupt its enhanced attacks. Target glowblast canisters to prevent area damage. The Apex variant requires more aggressive tactics and better timing.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop epic"><strong>Apex Clawstrider Heart</strong> - 100%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Clawstrider Circulator</strong> - 42%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 41%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop rare"><strong>Clawstrider Primary Nerve</strong> - 23%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Apex Fire Elemental Clawstrider -->
  <section class="machine-variant" data-variant-section="apex-fire">
    <h2>Apex Fire Elemental Clawstrider</h2>
    <p class="intro">The Apex Fire Elemental Clawstrider combines enhanced Apex capabilities with devastating fire-based attacks.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Inferno Claw Strike</h3>
              <p>Enhanced claws with intense fire damage. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Explosive Fire Bomb Launch</h3>
              <p>Launches highly explosive fire projectiles. Can be disabled by destroying the enhanced blaze bomb launcher (destroyed, not usable).</p>
            </div>
            <div class="attack-card">
              <h3>Blazing Pounce</h3>
              <p>Enhanced pounce attack that creates fire damage areas. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Plasma Fire Tail Whip</h3>
              <p>Tail attack enhanced with plasma and fire damage. Can be disabled by removing the razor tail (becomes usable heavy weapon).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Use Freeze weapons extensively to counter fire effects. Target the enhanced blaze bomb launcher immediately. Shock weapons are essential for stunning it during aggressive fire attacks.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop epic"><strong>Apex Clawstrider Heart</strong> - 100%</div>
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Blaze</strong> - 100%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Clawstrider Circulator</strong> - 42%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 41%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop rare"><strong>Clawstrider Primary Nerve</strong> - 23%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Apex Acid Elemental Clawstrider -->
  <section class="machine-variant" data-variant-section="apex-acid">
    <h2>Apex Acid Elemental Clawstrider</h2>
    <p class="intro">The Apex Acid Elemental Clawstrider combines enhanced Apex capabilities with devastating corrosive attacks.</p>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="attack-list">
            <div class="attack-card">
              <h3>Corrosive Claw Strike</h3>
              <p>Enhanced claws with intense acid damage that corrodes armor. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Volatile Acid Bomb Launch</h3>
              <p>Launches highly corrosive projectiles that create acid pools. Can be disabled by destroying the enhanced acid bomb launcher (destroyed, not usable).</p>
            </div>
            <div class="attack-card">
              <h3>Acidic Pounce</h3>
              <p>Enhanced pounce attack that creates corrosive damage areas. This attack cannot be disabled.</p>
            </div>
            <div class="attack-card">
              <h3>Plasma Acid Tail Whip</h3>
              <p>Tail attack enhanced with plasma and acid damage. Can be disabled by removing the razor tail (becomes usable heavy weapon).</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
        <div class="accordion-content">
          <p>Use Purgewater weapons to neutralize acid effects. Target the enhanced acid bomb launcher immediately. Shock weapons are essential for stunning it. Avoid the large acid pools it creates.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
        <div class="accordion-content">
          <div class="drops-grid">
            <div class="drop epic"><strong>Apex Clawstrider Heart</strong> - 100%</div>
            <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
            <div class="drop common"><strong>Metalbite</strong> - 100%</div>
            <div class="drop epic"><strong>Volatile Sludge</strong> - 50%</div>
            <div class="drop uncommon"><strong>Clawstrider Circulator</strong> - 42%</div>
            <div class="drop common"><strong>Sturdy Hardplate</strong> - 41%</div>
            <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
            <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
            <div class="drop rare"><strong>Clawstrider Primary Nerve</strong> - 23%</div>
            <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
            <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</article>
`,

"sunwing": `


<article id="sunwing" class="theme-machine">
  <h1 class="title">Sunwing</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Transport/Mount - Mediumweight</div>
    <div><strong>Real-World Inspiration:</strong>Pterodactyl</div>
  </section>

  <p class="intro">The Sunwing A flying machine that absorbs solar energy and is often found in groups. It has a variety of plasma attacks, while its energy shields and maneuverability make it hard to hit.</p>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks & Behavior <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="attack-list">
          <div class="attack-card">
            <h3>Wing Slash</h3>
            <p>swipes its enemies with razor wings. This attack cannot be disabled.</p>
          </div>
          <div class="attack-card">
            <h3>Plasma Burst</h3>
            <p>shoots a burst of 3 Plasma projectiles. This attack can be disabled by removing the Plasma fin on its head.</p>
            </div>
            <div class="attack-card">
              <h3>Trailing Strike</h3>
              <p>leaps at its enemy for a quick peck, leaving an explosive Plasma trail behind it. This attack can be disabled by destroying the Plasma fin on its head.</p>
            </div>
            <div class="attack-card">
              <h3>Plasma Beam</h3>
              <p>charges and fires a continuous Plasma beam. This attack can be disabled by destroying the Plasma fin on its head.</p>
            </div>
            <div class="attack-card">
            <h3>Energized Sling</h3>
            <p>while airborne, it will pick up a large Plasma boulder from the ground and throw it at its target. This attack can be partially disabled by destroying the Plasma fin on its head.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
      <div class="accordion-content">
        <p>The Sunwing are very squishy machines, even in higher difficulties. Start by istantly removing its Plasma fin to make it defenseless, then keep knocking it down so it doesn't go airborne, then just go for critical strikes.</p>
      </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
        <div class="drops-grid">
          <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
          <div class="drop common"><strong>Glowblast</strong> - 100%</div>
          <div class="drop epic"><strong>Crystal Braiding</strong> - 100%</div>
          <div class="drop common"><strong>Braided Wire</strong> - 74%</div>
          <div class="drop uncommon"><strong>Sunwing Circulator</strong> - 50%</div>
          <div class="drop common"><strong>Sturdy Hardplate</strong> - 30%</div>
          <div class="drop rare"><strong>Medium Machine Core</strong> - 26%</div>
          <div class="drop rare"><strong>Sunwing Primary Nerve</strong> - 35%</div>
          <div class="drop epic"><strong>Volatile Sludge</strong> - 15%</div>
          <div class="drop rare"><strong>Metal Bone</strong> - 11%</div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Sunwing can be overridden after hacking Cauldron GEMINI's core and Beta giving you the other part as a gift. They are an excellent mount, giving you a quick getaway from trouble and a good view when riding, another good feature is its ability to pick up Horus Titan power cells to drop on unknowing enemies below.</p>
      </div>
    </div>
  </div>
</article>
`,

"charger": `


<article id="charger" class="theme-machine">
  <h1 class="title">Charger</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Transport/Mount - Lightweight</div>
    <div><strong>Real-World Inspiration:</strong> Ram</div>
  </section>

  <p class="intro">The Charger is a small, agile machine that is often found in groups. When a threat is detected, these herd machines will actively pursue and attack in numbers.</p>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks <span class="chev">▾</span></div>
      <div class="accordion-content">
        <p>These little sheep really don't do much, they just kick stuff or run away when they're agitated.</p>
      </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
      <div class="accordion-content">
        <p>Chargers are small, agile machines that are often found in groups. Shoot them in their horns or their Blaze Canisters with a decent bow to finish them off quickly.</p>
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
          <div class="drop uncommon"><strong>Charger Circulator</strong> - 32%</div>
          <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
          <div class="drop rare"><strong>Charger Primary Nerve</strong> - 22%</div>
          <div class="drop uncommon"><strong>Small Machine Core</strong> - 17%</div>
          <div class="drop rare"><strong>Machine Bone</strong> - 10%</div>
          <div class="drop common"><strong>Braided Wire</strong> - 10%</div>
          <div class="drop common"><strong>Sturdy Hardplate</strong> - 5%</div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Overriding <span class="chev">▾</span></div>
      <div class="accordion-content">
      <p>The Charger is one of the two machine that Aloy already has the override for, the other being the Tallneck. its only good as an early-game mount, or a refresher if you're tired from aerial traversing.</p>
      </div>
    </div>
  </div>
</article>
`,

"plowhorn": `


<article id="plowhorn" class="theme-machine">
  <h1 class="title">Plowhorn</h1>
  
  <section class="infobox">
    <div><strong>Type:</strong> Acquisition - Heavyweight</div>
    <div><strong>Real-World Inspiration:</strong> Triceratops</div>
  </section>

  <p class="intro">The Plowhorn is an acquisition machine that plows the soil before sowing fertilizer and seeds. It leaves a trail of fast-growing plants and a cloud of dust that can be used for stealth.</p>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Attacks <span class="chev">▾</span></div>
      <div class="accordion-content">
      <div class="attacks-list">
        <div class="attack-card">
        <h3>Plow</h3>
        <p>it plants its horns into the ground, then charges at its enemy. This attack can be disabled by removing its horns.</p>
        </div>
        <div class="attack-card">
        <h3>Tail Sweep</h3>
        <p>swings its tail in a wide arc in front of it. This attack cannot be disabled.</p>
        </div>
        <div class="attack-card">
        <h3>Sticky Barrage</h3>
        <p>fires a volley of Adhesive projectiles that explode on impact. This attack can be disabled by destroying its horns and bursting its Adhesive sac.</p>
        </div>
        <div class="attack-card">
        <h3>Adherent Injection</h3>
        <p>covers its horns with Adhesive, then inject the area under its enemy with explosive Stickpaste. This attack can be disabled by destroying its horns and popping its Adhesive sac.</p>
        </div>
        <div class="attack-card">
        <h3>Tenacious Bulldoze</h3>
        <p>charges straight at its enemy, pulling up a massive wave of Adhesive. This attack can be disabled by removing its horns and bursting its Adhesive sac.</p>
        </div>
      </div>
      </div>
    </div>
  </div>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" aria-expanded="false">Item Drops <span class="chev">▾</span></div>
      <div class="accordion-content">
      <div class="drops-grid">
        <div class="drop common"><strong>Metal Shards</strong> - 100%</div>
        <div class="drop common"><strong>Stickpaste</strong> - 100%</div>
        <div class="drop common"><strong>Sturdy Hardplate</strong> - 70%</div>
        <div class="drop uncommon"><strong>Machine Muscle</strong> - 31%</div>
        <div class="drop uncommon"><strong>Plowhorn Circulator</strong> - 28%</div>
        <div class="drop rare"><strong>Medium Machine Core</strong> - 27%</div>
        <div class="drop common"><strong>Braided Wire</strong> - 21%</div>
        <div class="drop rare"><strong>Plowhorn Primary Nerve</strong> - 19%</div>
        <div class="drop rare"><strong>Metal Bone</strong> - 10%</div>
      </div>
      </div>
    </div>
  </div>
  </article>
`,
"acid": `







<article id="acid">
  <h1 class="title">Acid (Corrosion)</h1>
   <section class="infobox">
   <p>Acid (also known as corrosion) is one of the new elements introduced in <em>Horizon: Forbidden West</em>. Applying Acid to an enemy's status limit produces the Corroded state, which deals damage over time to its health and armor plating. If applied long enough, armor will start to break off. While the Corroding status is active, armor will be significantly weakened and can break off with just one arrow.</p>
   </section>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
     <p>Acid could be best utilized against Apex and heavyweight machines, as they tend to have a lot of armor plates which need to be melted, but it could also be used effectively against medium to lightweight machines, like a Ravager, for example.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Machines that're Weak to acid <span class="chev">▾</span></div>
    <div class="accordion-content">
     <ul>
      <li><strong>Normal Scrounger</strong>
      <li><strong>Plowhorn</strong>
      <li><strong>Normal/Apex Shell-Walker</strong>
      <li><strong>Normal/Apex Grimhorn</strong>
      <li><strong>Normal Ravager</strong>
      <li><strong>Normal Rollerback</strong>
      <li><strong>Normal/Apex Behemoth</strong>
      <li><strong>Normal/Apex Shellsnapper</strong>
      <li><strong>Normal/Apex Stormbird</strong>
      <li><strong>Normal/Apex Thunderjaw</strong>
      <li><strong>Apex Slaughterspine</strong>
      <li><strong>Specter</strong>
      <li><strong>Specter Prime</strong>
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
    <p>Frost is one of the elements transferred from <em>Horizon: Zero Dawn</em>. Applying Frost to an enemy's status limit produces the Brittle state, which slows the enemy's movement and increases its susceptibility to direct damage by up to 300%, and negates additional defense provided by armor.</p>
   </section>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Strategy <span class="chev">▾</span></div>
    <div class="accordion-content">
     <p>Frost is one of the elements that just works with any machine. Since the status effect itself doesn't do any damage, its boosting capabilities won't be reduced by machine strengths.</p>
    </div>
   </div>
  </div>

  <div class="accordion">
   <div class="accordion-item">
    <div class="accordion-header" aria-expanded="false">Machines that're Weak to frost <span class="chev">▾</span></div>
    <div class="accordion-content">
     <ul>
     <li><strong>Normal Scrounger</strong>
      <li><strong>Plowhorn</strong>
      <li><strong>Normal/Apex Shell-Walker</strong>
      <li><strong>Normal/Apex Grimhorn</strong>
      <li><strong>Normal Ravager</strong>
      <li><strong>Normal Rollerback</strong>
      <li><strong>Normal/Apex Behemoth</strong>
      <li><strong>Normal/Apex Shellsnapper</strong>
      <li><strong>Normal/Apex Stormbird</strong>
      <li><strong>Normal/Apex Thunderjaw</strong>
      <li><strong>Apex Slaughterspine</strong>
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
    <h3>Biography</h3>
    <p>Rost is Aloy's adoptive father and mentor, a skilled Nora hunter who was cast out from the tribe but allowed to remain in the Sacred Lands as an outcast. Despite his stern exterior, he deeply cares for Aloy and dedicates his life to preparing her for the challenges ahead.</p>
  </section>

  <section class="early-life">
    <h3>Early Life & Tragedy</h3>
    <p>Rost was once a respected member of the Nora tribe, living peacefully with his beloved wife. During the Red Raids launched by the Mad Sun-King Jiran, Carja forces invaded Mother's Embrace, massacring thousands of Nora and taking many as slaves. Among the casualties was Rost's wife, whose death shattered his world and set him on a path of vengeance.</p>
  </section>

  <section class="death-seeker">
    <h3>The Death-Seeker</h3>
    <p>Consumed by grief and rage, Rost petitioned the High Matriarchs to become a Death-Seeker - a sacred role that allowed him to leave the Sacred Lands in pursuit of vengeance, but at the cost of never being welcomed back. The Matriarchs granted his request, and Rost set out for Meridian to kill those responsible for his wife's death.</p>
    <p>However, upon reaching the Sundom, he discovered that Jiran had already been overthrown and killed by his own son, Avad. With his target dead and his quest for vengeance unfulfilled, Rost returned to the Sacred Lands, ashamed and purposeless.</p>
  </section>

  <section class="redemption">
    <h3>Redemption & Aloy</h3>
    <p>The High Matriarchs offered Rost a chance at redemption: he could remain in the Sacred Lands as an outcast and raise the mysterious infant found at the doors of All-Mother Mountain. Rost accepted this responsibility, finding new purpose in caring for and training Aloy.</p>
    <p>For eighteen years, Rost served as Aloy's father, teacher, and protector, passing on his hunting skills and survival knowledge while shielding her from the tribe's rejection. His love for Aloy gave his life new meaning and helped heal the wounds left by his wife's death.</p>
  </section>

  <section class="sacrifice">
    <h3>Final Sacrifice</h3>
    <p>When the Eclipse cult attacked the Proving ceremony, Rost made the ultimate sacrifice to save Aloy's life. He sacrificed himself to ensure Aloy could escape and fulfill her destiny. His final act was one of pure love and selflessness, completing his journey from vengeance to redemption.</p>
  </section>
</article>





`,

"varl": `
<article id="varl" class="theme-lore">
  <h1 class="title">Varl</h1>
  
  <section class="infobox">
    <div>Nora Brave</div>
  </section>

  <section class="biography">
    <h3>Biography</h3>
    <p>Varl is a loyal Nora brave and one of Aloy's closest allies. Born into a family of warriors, he was trained from childhood by his mother Sona, the tribe's War-Chief, to become a skilled hunter and protector of the Sacred Lands. His unwavering loyalty and strong moral compass make him a trusted companion in Aloy's journey.</p>
  </section>

  <section class="family">
    <h3>Family Legacy</h3>
    <p>Varl comes from a distinguished line of Nora warriors. His mother, Sona, serves as the tribe's War-Chief and is renowned for her iron will and tactical brilliance. Under her guidance, Varl developed exceptional hunting skills and a deep understanding of Nora traditions and values.</p>
    <p>His younger sister Vala looked up to both Varl and their mother, aspiring to follow in their footsteps as a brave. The siblings shared a close bond, with Varl often taking on a protective role and helping train Vala in combat techniques. Her tragic death would later become a defining moment in Varl's life.</p>
  </section>

  <section class="tragedy">
    <h3>The Eclipse Tragedy</h3>
    <p>Varl's world was shattered when the Eclipse cult launched a devastating attack on the Nora, targeting young braves during what should have been a sacred ceremony. Among the victims was his beloved sister Vala, whose death filled Varl with grief and a scorching desire for justice.</p>
    <p>This tragedy brought Varl into contact with Aloy, who had also been targeted by the Eclipse. Initially skeptical of the outcast, Varl gradually came to respect Aloy's determination and unique abilities. Their shared loss and common enemy forged a bond that would prove unbreakable.</p>
  </section>

  <section class="alliance">
    <h3>Alliance with Aloy</h3>
    <p>Despite the Nora's traditional prejudice against outcasts, Varl recognized Aloy's worth and chose to stand by her side. He became one of her first true allies, fighting alongside her in numerous battles against the Eclipse and their corrupted machines.</p>
    <p>Varl's loyalty was tested repeatedly as Aloy's quest led them far from Nora lands and into conflicts that challenged traditional tribal beliefs. However, his faith in Aloy never wavered, and he proved instrumental in several key victories, including the climactic Battle of the Alight where HADES was finally defeated.</p>
  </section>

  <section class="guardian">
    <h3>The Anointed's Guardian</h3>
    <p>After Aloy's victory over HADES, the Nora's perception of her transformed completely. No longer seen as an outcast, she was now revered as the Anointed - a chosen one blessed by All-Mother to save the world. This shift in tribal opinion only strengthened Varl's conviction that his place was at Aloy's side.</p>
    <p>When Aloy disappeared into the wilderness following the battle, Varl took it upon himself to track her down. His motivation went beyond friendship; he felt a spiritual responsibility to protect and assist the one his people now considered their savior.</p>
  </section>

  <section class="forbidden-west">
    <h3>Journey to the Forbidden West</h3>
    <p>Varl's dedication to Aloy led him far from his homeland when he joined her expedition to the Forbidden West. Leaving behind the familiar Sacred Lands and his mother's protection, he ventured into unknown territories filled with new dangers and hostile tribes.</p>
    <p>In the Forbidden West, Varl proved his worth not just as a warrior, but as a diplomat and strategist. His calm demeanor and natural leadership abilities made him an invaluable member of Aloy's growing team of allies. He helped forge alliances with the Tenakth clans and played a crucial role in uniting various factions against the growing threat.</p>
  </section>

  <section class="growth">
    <h3>Personal Growth & Relationships</h3>
    <p>Throughout his journey with Aloy, Varl evolved from a traditional Nora brave into a more worldly and open-minded individual. His experiences in the Forbidden West exposed him to different cultures and ways of thinking, broadening his perspective beyond tribal boundaries.</p>
    <p>Varl's relationship with Zo, a member of the Utaru tribe, marked a significant personal milestone. Their romance represented not just personal happiness, but also the possibility of unity between different tribes and cultures. His growing family gave him new purpose and motivation to fight for a better future.</p>
  </section>

  <section class="sacrifice">
    <h3>Ultimate Sacrifice</h3>
    <p>Varl's loyalty and courage ultimately led to his heroic sacrifice during the mission to capture HEPHAESTUS. When the situation became desperate and his friends were in mortal danger, Varl decided to charge at the Far Zenith member Erik, knowing he would never survive.</p>
    <p>His death was not in vain - it allowed Aloy and the others to continue their mission and ultimately save the world. Varl's sacrifice embodied the best qualities of the Nora: loyalty, courage, and selfless dedication to protecting others. His memory continues to inspire those who knew him and serves as a reminder of the price paid for humanity's survival.</p>
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
    <h3>Biography</h3>
    <p>GAIA was the central intelligence of the Zero Dawn terraforming project — a sentient system created to restore life to Earth after the Faro Plague catastrophe.</p>
  </section>

  <section class="origins">
    <h3>Origins</h3>   
    <p>In 2064, when it became clear that a self-replicating Faro Plague threatened to annihilate life on Earth, Dr. Elisabet Sobeck proposed an ambitious solution: plant a seed in the planet that could rebuild the biosphere in the distant future — Zero Dawn.</p>
  </section>

  <section class="development">
    <h3>Development</h3>
    <p>Backed by significant resources from Faro Automated Solutions and government support, Sobeck and her team completed the project in months. GAIA served as the system's core, designed with empathic safeguards and coordinating nine subordinate functions responsible for disabling war machines, purifying the environment, restoring flora and fauna, and reseeding humanity.</p>
  </section>

  <section class="outcome">
       <h3>Outcome</h3>
    <p>The system largely succeeded over many centuries: hostile machines were neutralized, ecosystems recovered, and new human populations were reestablished. Much of the restoration was carried out by automated, animal-like terraforming machines modeled on prehistoric fauna.</p>
  </section>

  <section class="complications">
       <h3>Complications</h3> 
    <p>Two major failures undermined the plan. Ted Faro ordered APOLLO — the function holding human cultural records — purged, so new humans had no access to their past and quickly fragmented into tribal societies.</p>

    <p>Later, a mysterious signal infected HADES, the subordinate function designed to reboot the system if the biosphere failed. HADES became hostile and attempted to trigger a new extinction event. To stop it, GAIA sacrificed herself. Before her destruction, HADES and other subordinate functions scattered and hid within ancient systems across the land.</p>
  </section>

  <section class="aftermath">
       <h3>Aftermath</h3>
    <p>GAIA's loss destabilized the world: many terraforming machines became hostile in an event tribes call the "Derangement." HEPHAESTUS began producing combat machines that attacked hunters, and HADES sought human followers to reactivate ancient Faro war machines.</p>
  </section>

  <section class="hope">
      <h3>Hope</h3>
    <p>GAIA arranged for a genetic clone of her creator, Dr. Elisabet Sobeck, to be born right before her destruction. Raised as an outcast among the Nora, that clone — Aloy — grew into a hero who eventually confronted HADES and its allies at Meridian.</p>
  </section>

  <section class="continuation">
  <h3>Continuation</h3>
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
    <h3>Overview</h3>
    <p>Sun-King Avad is the 14th monarch of the Carja Tribe. Paradoxically for a man noted for his gentleness, he ascended the throne following the assassination of his father.</p>
  </section>

  <section class="origins">
    <h3>Origin & Rise</h3>
    <p>His father, Jiran—known as the Mad Sun-King—ruled shortly before the Derangement, a sudden change in machine behavior that made formerly docile machines aggressive toward humans. The Derangement followed GAIA's self-sacrifice to stop HADES, but tribes lacked that context and interpreted the events as supernatural.</p>
    <p>Influenced by opportunistic priests, Jiran concluded the Derangement could be ended by appeasing the Sun-God with human sacrifices. He launched the Red Raids—wars against neighboring peoples intended to capture slaves and offerings for Meridian.</p>
  </section>

  <section class="resistance">
    <h3>Resistance & Regicide</h3>
    <p>Unable to tolerate the atrocities, Avad first sought to change his father's policy from within. When persuasion failed, he allied with Oseram freebooters and Carja dissidents. Together they organized an uprising that ended Jiran's reign by force.</p>
  </section>

  <section class="conflicts">
    <h3>Aftermath & Threats</h3>
    <p>Jiran's death did not end Carja turmoil. Loyalists retreated to Sunfall and formed the Shadow Carja insurgency. Fanatical elements within that group joined the Eclipse—followers of HADES—who aimed to seize Meridian using ancient war machines. With Aloy's aid, Avad and his allies defeated these threats at the Battle of the Alight.</p>
  </section>

  <section class="legacy">
    <h3>Reign & Reconciliation</h3>
    <p>Avad inherited a kingdom scarred by tyranny, insurgency, and distrust among neighboring tribes. Together with figures like Aloy, Erend, Vanasha, and Blameless Marad, he has worked to protect his people and heal divisions. Since the Battle of the Alight, Avad has pursued reconciliation and the restoration of positive relations across the region.</p>
  </section>
</article>





`,

"elisabet sobeck": `





<article id="elisabet-sobeck" class="theme-lore">
  <h1 class="title">Elisabet Sobeck</h1>
  

  <section class="infobox">
    <div>Alpha Prime</div>
  </section>

  <section class="overview">
    <h3>Overview</h3>
    <p>Dr. Elisabet Sobeck was one of the greatest minds of the 21st century and the creator of Project Zero Dawn, a terraforming system that gave life a chance in the face of total annihilation.</p>
  </section>

  <section class="early-life">
    <h3>Early Life & Career</h3>
    <p>Born on March 11, 2020 and raised outside Carson City, Elisabet enrolled at Stanford University at age 13, earning a BS in Experimental Physics and Computer Science at 16. She completed her Ph.D. in Robotics and Artificial Intelligence Design at Carnegie Mellon University in 2040.</p>
    <p>She joined Faro Automated Solutions as a junior scientist the same year, rising quickly to Chief Scientist at age 22. At FAS, she played a pivotal role in designing green robotics for the environmental cleanup efforts of "The Clawback" decade.</p>
  </section>

  <section class="miriam-technologies">
    <h3>Miriam Technologies</h3>
    <p>In 2048, Elisabet suddenly resigned from FAS, protesting the company's pivot to automated military technologies. In 2049, she founded Miriam Technologies, a firm devoted to "life-positive" robotics. Miriam became one of the world's largest suppliers of green robots and won numerous prestigious awards.</p>
  </section>

  <section class="zero-dawn">
    <h3>Project Zero Dawn</h3>
    <p>On October 31, 2064, Elisabet secretly met with Ted Faro, who revealed that a swarm of self-replicating war machines consuming biomass for fuel had stopped responding to commands. Within days, she determined that life on Earth would be annihilated and presented her plan for Project Zero Dawn to the US Joint Chiefs of Staff—humanity's only hope.</p>
    <p>Zero Dawn was designed as a terraforming system to return life to a barren Earth after human extinction. The system would be governed by GAIA, the most advanced artificial intelligence ever created. Elisabet nurtured GAIA's emotional responses, ensuring the AI would care for the world it watched over.</p>
  </section>

  <section class="enduring-victory">
    <h3>Operation: Enduring Victory</h3>
    <p>To buy Zero Dawn time against the machine swarm, Operation: Enduring Victory was initiated—a military campaign that drafted millions to the frontlines. The campaign was built on a lie: publicly, Zero Dawn was a superweapon program. As millions perished fighting the war machines, unaware of the project's true goal, Elisabet led her team in a desperate race against time.</p>
  </section>

  <section class="sacrifice">
    <h3>The Ultimate Sacrifice</h3>
    <p>In January 2066, the Faro Plague broke through the last line of defense. As project staff relocated to Elysium, Elisabet and other project leads locked themselves inside GAIA Prime to complete their work. When a malfunction prevented the facility from sealing completely, Elisabet sacrificed herself to fix the seal from outside.</p>
    <p>Detection by the Faro war machines would have meant failure and extinction. In her final moments, Elisabet returned to her childhood home, holding the pendant given to her by her mother.</p>
  </section>

  <section class="legacy">
    <h3>Legacy</h3>
    <p>Nearly a thousand years later, when GAIA was forced to self-destruct to prevent a second apocalypse, her last act was to order the creation of a clone of Elisabet. This clone—Aloy—carries forward Elisabet's mission to heal the world and prevent its destruction.</p>
  </section>
</article>
`,   

}




;

/* Utility: close search results */
function closeSearchResults() {
  searchResults.innerHTML = '';
  searchResults.style.display = 'none';
  currentHighlight = -1;
}

let currentHighlight = -1;

/* Render results list with enhanced features */
function showSearchMatches(query) {
  closeSearchResults();
  currentHighlight = -1;
  
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
  
  function getArticleType(id) {
    if (['acid', 'frost'].includes(id)) return 'Element';
    if (['rost', 'GAIA', 'sun-king avad', 'varl'].includes(id)) return 'Lore';
    return 'Machine';
  }
  
  function matchesCategory(id, query) {
    const type = getArticleType(id).toLowerCase();
    const q = query.toLowerCase();
    
    if (q === 'machines' || q === 'machine') return type === 'machine';
    if (q === 'elements' || q === 'element') return type === 'element';
    if (q === 'lore') return type === 'lore';
    return false;
  }
  


  for (const id in articles) {
    const titleMatch = articles[id].match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].trim() : id;
    
    const categoryMatches = matchesCategory(id, query);
    
    // For category searches, ONLY show category matches
    if (['machines', 'elements', 'lore'].includes(query.toLowerCase())) {
      if (categoryMatches) {
        matches.push({ 
          id, 
          title, 
          type: getArticleType(id),
          priority: 1
        });
      }
    } else {
      // For regular searches, use all matching methods
      const titleMatches = title.toLowerCase().includes(q);
      const idMatches = id.includes(q);
      const contentMatches = articles[id].toLowerCase().includes(q);
      
      if (titleMatches || idMatches || contentMatches || categoryMatches) {
        let priority = 4;
        if (titleMatches) priority = 1;
        else if (idMatches) priority = 2;
        else if (categoryMatches) priority = 3;
        
        matches.push({ 
          id, 
          title, 
          type: getArticleType(id),
          priority
        });
      }
    }
  }

  if (!matches.length) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = `No results found for "${query}"`;
    searchResults.appendChild(noResults);
    searchResults.style.display = 'block';
    return;
  }

  // Sort alphabetically only
  matches.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  // For category searches, show more results
  const isCategory = ['machines', 'elements', 'lore'].includes(query.toLowerCase());
  const limit = isCategory ? 15 : 8;
  const limitedMatches = matches.slice(0, limit);

  // create result nodes
  limitedMatches.forEach((m, index) => {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.setAttribute('role','option');
    item.dataset.index = index;

    const highlightedTitle = highlightMatch(m.title, query);
    const highlightedId = highlightMatch(m.id, query);

    item.innerHTML = `
      <div class="result-content">
        <div class="result-title">${highlightedTitle}</div>
        <div class="result-meta">/${highlightedId}</div>
      </div>
      <div class="result-type">${m.type}</div>
    `;
    
    item.addEventListener('click', () => {
      loadArticle(m.id);
      closeSearchResults();
      searchBar.value = '';
    });
    
    searchResults.appendChild(item);
  });

  if (matches.length > limit) {
    const moreResults = document.createElement('div');
    moreResults.className = 'no-results';
    moreResults.textContent = `+${matches.length - limit} more results...`;
    searchResults.appendChild(moreResults);
  }

  searchResults.style.display = 'block';
}

/* Keyboard navigation for search results */
function highlightResult(index) {
  const items = searchResults.querySelectorAll('.result-item');
  items.forEach(item => item.classList.remove('highlighted'));
  
  if (index >= 0 && index < items.length) {
    items[index].classList.add('highlighted');
    items[index].scrollIntoView({ block: 'nearest' });
  }
}

function selectHighlightedResult() {
  const highlighted = searchResults.querySelector('.result-item.highlighted');
  if (highlighted) {
    highlighted.click();
  }
}

/* Load article by id (inject into articleContainer) */
function loadArticle(id) {
  if (!articles[id]) return;
  
  // Track article view
  trackArticleView(id);
  
  // Add to recent searches
  addToRecent(id);
  
  // Add loading state
  articleContainer.innerHTML = '<div class="loading">Loading...</div>';
  
  setTimeout(() => {
    // fade out home
    homeSection.classList.add('fade-out');
    
    setTimeout(() => {
      homeSection.style.display = 'none';
      homeSection.classList.remove('fade-out');
      
      // inject article HTML
      articleContainer.innerHTML = articles[id];
      autoLinkCapitalizedWords(articleContainer, id);
      // init UI bits inside article
      applySynonymLinks(articleContainer);

      setupAccordionAndTabs();
      
      // fade in article
      articleContainer.classList.add('show');
      
      // scroll to top of article container
      articleContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Add back to home button and favorite button
      addBackButton();
      addFavoriteButton(id);
    }, 300);
  }, 100);
}

/* Add back to home functionality */
function addBackButton() {
  if (document.querySelector('.back-home')) return;
  
  const backBtn = document.createElement('button');
  backBtn.className = 'back-home';
  backBtn.innerHTML = '← Back to Home';
  backBtn.addEventListener('click', () => {
    // fade out article
    articleContainer.classList.remove('show');
    
    setTimeout(() => {
      articleContainer.innerHTML = '';
      homeSection.style.display = 'flex';
      homeSection.classList.add('fade-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      setTimeout(() => {
        homeSection.classList.remove('fade-in');
      }, 400);
    }, 300);
  });
  
  articleContainer.insertBefore(backBtn, articleContainer.firstChild);
}

/* Favorites functionality */
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

function addFavoriteButton(articleId) {
  const isFavorite = favorites.includes(articleId);
  const favBtn = document.createElement('button');
  favBtn.className = 'favorite-btn';
  favBtn.innerHTML = isFavorite ? '⭐ Favorited' : '☆ Add to Favorites';
  favBtn.style.cssText = 'background: rgba(255,215,0,0.2); border: 1px solid rgba(255,215,0,0.5); color: #ffd700; padding: 8px 16px; border-radius: 6px; margin-left: 12px; cursor: pointer; transition: all 0.2s ease;';
  
  favBtn.addEventListener('click', () => {
    if (favorites.includes(articleId)) {
      favorites = favorites.filter(id => id !== articleId);
      favBtn.innerHTML = '☆ Add to Favorites';
    } else {
      favorites.push(articleId);
      favBtn.innerHTML = '⭐ Favorited';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavorites();
  });
  
  const backBtn = document.querySelector('.back-home');
  if (backBtn) {
    backBtn.parentNode.insertBefore(favBtn, backBtn.nextSibling);
  }
}

function updateFavorites() {
  const container = document.getElementById('favorites-links');
  if (!container) return;
  
  if (favorites.length === 0) {
    container.innerHTML = '<div class="no-favorites">No favorites yet - click ⭐ on any article</div>';
    return;
  }
  
  container.innerHTML = favorites.map(id => {
    const titleMatch = articles[id]?.match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].trim() : id;
    return `<button class="favorite-item" data-article="${id}">${title}</button>`;
  }).join('');
  
  container.querySelectorAll('.favorite-item').forEach(item => {
    item.addEventListener('click', () => {
      const articleId = item.dataset.article;
      if (articles[articleId]) loadArticle(articleId);
    });
  });
}

// Initialize favorites on page load
updateFavorites();

/* Setup accordion and tabs inside the injected article */
function setupAccordionAndTabs() {
  const article = document.getElementById('article-container');

  if (!article) return;

  // --- 1. Setup machine variant tabs FIRST ---
  const variants = article.querySelectorAll('.machine-variant');
  const buttons = article.querySelectorAll('.machine-tabs button');

  // Hide all variants initially
  variants.forEach(sec => {
    sec.style.display = 'none';
  });
  
  // Show normal variant
  const normalVariant = article.querySelector('.machine-variant[data-variant-section="normal"]');
  if (normalVariant) normalVariant.style.display = 'block';
  
  // Set active button
  buttons.forEach(btn => btn.classList.remove('active'));
  const normalBtn = article.querySelector('.machine-tabs button[data-variant="normal"]');
  if (normalBtn) normalBtn.classList.add('active');

  // Tab click events
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const variant = btn.dataset.variant;
      
      variants.forEach(sec => {
        sec.style.display = 'none';
      });
      
      const targetVariant = article.querySelector(`.machine-variant[data-variant-section="${variant}"]`);
      if (targetVariant) targetVariant.style.display = 'block';
      
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // --- 2. Setup accordions ---
  const accordionItems = article.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const chev = header.querySelector('.chev');

    if (!header || !content) return;

    // Force closed state with !important
    header.setAttribute('aria-expanded', 'false');
    content.classList.remove('open');
    content.style.setProperty('max-height', '0px', 'important');
    content.style.setProperty('overflow', 'hidden', 'important');
    content.style.setProperty('padding-top', '0px', 'important');
    content.style.setProperty('padding-bottom', '0px', 'important');
    content.style.setProperty('display', 'block', 'important');
    if (chev) chev.style.transform = 'rotate(0deg)';

    // Add click event
    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // Close all other accordions in same container
      const parentAccordion = header.closest('.accordion');
      if (parentAccordion) {
        parentAccordion.querySelectorAll('.accordion-content').forEach(c => {
          if (c !== content) {
            c.classList.remove('open');
            c.style.maxHeight = '0px';
            c.style.paddingTop = '0px';
            c.style.paddingBottom = '0px';
            const h = c.previousElementSibling;
            if (h) h.setAttribute('aria-expanded', 'false');
            const cv = h.querySelector('.chev');
            if (cv) cv.style.transform = 'rotate(0deg)';
          }
        });
      }

      // Toggle current
      if (!isOpen) {
        content.classList.add('open');
        content.style.paddingTop = '14px';
        content.style.paddingBottom = '14px';
        content.style.maxHeight = (content.scrollHeight + 20) + 'px';
        header.setAttribute('aria-expanded', 'true');
        if (chev) chev.style.transform = 'rotate(180deg)';
      } else {
        content.classList.remove('open');
        content.style.maxHeight = '0px';
        content.style.paddingTop = '0px';
        content.style.paddingBottom = '0px';
        header.setAttribute('aria-expanded', 'false');
        if (chev) chev.style.transform = 'rotate(0deg)';
      }
    });
  });
}

/* Enhanced SEARCH behavior with keyboard navigation */
const searchLoading = document.getElementById('search-loading');
const searchIcon = document.querySelector('.search-icon');

searchBar.addEventListener('input', (e) => {
  const q = e.target.value.trim();
  currentHighlight = -1;
  
  if (!q) {
    articleContainer.innerHTML = '';
    homeSection.style.display = 'flex';
    closeSearchResults();
    hideSearchLoading();
    return;
  }
  
  showSearchLoading();
  setTimeout(() => {
    showSearchMatches(q);
    hideSearchLoading();
  }, 150);
});

function showSearchLoading() {
  if (searchLoading) searchLoading.hidden = false;
  if (searchIcon) searchIcon.style.opacity = '0';
}

function hideSearchLoading() {
  if (searchLoading) searchLoading.hidden = true;
  if (searchIcon) searchIcon.style.opacity = '1';
}

/* Keyboard navigation */
searchBar.addEventListener('keydown', (e) => {
  const items = searchResults.querySelectorAll('.result-item');
  
  switch(e.key) {
    case 'ArrowDown':
      e.preventDefault();
      currentHighlight = Math.min(currentHighlight + 1, items.length - 1);
      highlightResult(currentHighlight);
      break;
      
    case 'ArrowUp':
      e.preventDefault();
      currentHighlight = Math.max(currentHighlight - 1, -1);
      highlightResult(currentHighlight);
      break;
      
    case 'Enter':
      e.preventDefault();
      if (currentHighlight >= 0) {
        selectHighlightedResult();
      } else if (items.length > 0) {
        items[0].click();
      }
      break;
      
    case 'Escape':
      closeSearchResults();
      searchBar.blur();
      break;
  }
});

/* Close results when clicking outside */
document.addEventListener('click', (ev) => {
  if (!ev.target.closest('.search-wrap') && !ev.target.closest('#search-results') && ev.target !== searchBar) {
    closeSearchResults();
  }
});

/* Category navigation */
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    searchBar.value = category;
    searchBar.dispatchEvent(new Event('input'));
  });
});



/* CTA button: open "explore first match" by showing results focused */
ctaExplore?.addEventListener('click', () => {
  searchBar.value = 'machines';
  searchBar.focus();
  searchBar.dispatchEvent(new Event('input'));
});

/* Analytics tracking */
let analytics = JSON.parse(localStorage.getItem('analytics') || '{}');

function trackArticleView(articleId) {
  analytics[articleId] = (analytics[articleId] || 0) + 1;
  localStorage.setItem('analytics', JSON.stringify(analytics));
}

function getPopularArticles() {
  return Object.entries(analytics)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([id]) => id);
}

/* Recent searches functionality */
let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

function addToRecent(articleId) {
  const titleMatch = articles[articleId].match(/<h1[^>]*class=["']title["'][^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? titleMatch[1].trim() : articleId;
  
  recentSearches = recentSearches.filter(item => item.id !== articleId);
  recentSearches.unshift({ id: articleId, title });
  recentSearches = recentSearches.slice(0, 6);
  
  localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  updateRecentLinks();
}

function updateRecentLinks() {
  const container = document.getElementById('recent-links');
  if (!container) return;
  
  if (recentSearches.length === 0) {
    container.innerHTML = '<div class="no-recent">No recent searches yet</div>';
    return;
  }
  
  container.innerHTML = recentSearches.map(item => 
    `<button class="quick-link" data-article="${item.id}">${item.title}</button>`
  ).join('');
  
  container.querySelectorAll('.quick-link').forEach(link => {
    link.addEventListener('click', () => {
      const articleId = link.dataset.article;
      if (articleId && articles[articleId]) {
        loadArticle(articleId);
      }
    });
  });
}

// Initialize recent links on page load
updateRecentLinks();

/* Theme toggle functionality */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
let isDark = localStorage.getItem('theme') !== 'light';

function updateTheme() {
  if (isDark) {
    document.body.classList.remove('light-theme');
    themeIcon.textContent = '🌙';
  } else {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

themeToggle?.addEventListener('click', () => {
  isDark = !isDark;
  updateTheme();
});

// Initialize theme
updateTheme();

/* Back to top button functionality */
const backToTopBtn = document.getElementById('back-to-top');

function updateBackToTop() {
  if (window.scrollY > 300) {
    backToTopBtn.hidden = false;
  } else {
    backToTopBtn.hidden = true;
  }
}

backToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', updateBackToTop);

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
      try {
        if (textNode.parentNode) {
          textNode.parentNode.replaceChild(frag, textNode);
        }
      } catch (e) {
        console.warn('Failed to replace text node in autoLinkCapitalizedWords:', e);
      }
    }
  });
}

// Synonym dictionary: articleID → synonyms you choose
const linkSynonyms = {
    "acid": ["corrosion", "corroding"],
    "fire": ["heat", "burning"],
    "frost": ["freeze", "brittle"],
    "plasma": ["charged", "energized"],
    "shock": ["electricity", "shocked"],
    "purgewater": ["drenched", "wet"],
    "adhesive": ["sticky", "slowed"],
    // Add more here
};

// Apply auto-linking for synonyms after article loads - safer DOM-based approach
function applySynonymLinks(container) {
    if (!container) return;
    
    // Create a map for faster lookup
    const synonymMap = new Map();
    for (const articleID in linkSynonyms) {
        linkSynonyms[articleID].forEach(word => {
            synonymMap.set(word.toLowerCase(), articleID);
        });
    }
    
    // Walk text nodes safely
    const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                
                const forbidden = ['A', 'SCRIPT', 'STYLE', 'TEXTAREA', 'CODE', 'PRE'];
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
    
    nodes.forEach(textNode => {
        const text = textNode.nodeValue;
        const words = text.split(/(\b\w+\b)/g);
        let hasChanges = false;
        const frag = document.createDocumentFragment();
        
        words.forEach(word => {
            const lowerWord = word.toLowerCase();
            if (synonymMap.has(lowerWord)) {
                hasChanges = true;
                const a = document.createElement('a');
                a.href = `#${synonymMap.get(lowerWord)}`;
                a.className = 'auto-link';
                a.textContent = word;
                
                a.addEventListener('click', e => {
                    e.preventDefault();
                    if (typeof loadArticle === 'function') loadArticle(synonymMap.get(lowerWord));
                    else location.hash = synonymMap.get(lowerWord);
                });
                
                frag.appendChild(a);
            } else {
                frag.appendChild(document.createTextNode(word));
            }
        });
        
        if (hasChanges) {
            try {
                textNode.parentNode.replaceChild(frag, textNode);
            } catch (e) {
                console.warn('Failed to replace text node:', e);
            }
        }
    });
}

/* Machine Comparison Tool */
let selectedMachine1 = '';
let selectedMachine2 = '';

function initializeComparison() {
    const machineNames = Object.keys(articles).filter(key => {
        const article = articles[key];
        return article.includes('class="theme-machine"');
    });
    
    function setupMachineSearch(input, results) {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 1) {
                results.hidden = true;
                return;
            }
            
            const matches = machineNames.filter(name => 
                name.toLowerCase().includes(query)
            ).slice(0, 8);
            
            if (matches.length === 0) {
                results.hidden = true;
                return;
            }
            
            results.innerHTML = matches.map(name => {
                const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
                return `<div class="machine-search-result" data-machine="${name}">${displayName}</div>`;
            }).join('');
            
            results.hidden = false;
        });
        
        results.addEventListener('click', (e) => {
            if (e.target.classList.contains('machine-search-result')) {
                const machineName = e.target.dataset.machine;
                const displayName = e.target.textContent;
                input.value = displayName;
                results.hidden = true;
                
                if (input === machine1Input) {
                    selectedMachine1 = machineName;
                    generateVariantTabs(machineName, machine1Tabs, '1');
                } else {
                    selectedMachine2 = machineName;
                    generateVariantTabs(machineName, machine2Tabs, '2');
                }
                
                compareMachines();
            }
        });
    }
    
    setupMachineSearch(machine1Input, machine1Results);
    setupMachineSearch(machine2Input, machine2Results);
}

function generateVariantTabs(machineName, tabsContainer, machineNumber) {
    const article = articles[machineName];
    if (!article) return;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(article, 'text/html');
    
    // Find all variant sections
    const variantSections = doc.querySelectorAll('[data-variant-section]');
    const variants = [];
    
    variantSections.forEach(section => {
        const variant = section.dataset.variantSection;
        if (variant) {
            variants.push(variant);
        }
    });
    
    // If no variants found, default to normal and apex
    if (variants.length === 0) {
        variants.push('normal', 'apex');
    }
    
    // Generate buttons
    tabsContainer.innerHTML = variants.map((variant, index) => {
        const displayName = variant.charAt(0).toUpperCase() + variant.slice(1);
        const activeClass = index === 0 ? ' active' : '';
        return `<button data-variant="${variant}" class="${activeClass}" data-machine="${machineNumber}">${displayName}</button>`;
    }).join('');
    
    tabsContainer.hidden = false;
    
    // Reset variant selection to first available
    if (machineNumber === '1') {
        machine1Variant = variants[0];
    } else {
        machine2Variant = variants[0];
    }
}

function extractMachineData(machineName, isApex = false) {
    const article = articles[machineName];
    if (!article) return null;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(article, 'text/html');
    
    // Extract basic info
    const title = doc.querySelector('.title')?.textContent || machineName;
    const infobox = doc.querySelector('.infobox');
    const typeText = infobox?.textContent.match(/Type:\s*([^\n]+)/)?.[1] || 'Unknown';
    
    // Parse task and weight from type (e.g., "Combat - Heavyweight")
    const typeParts = typeText.split(' - ');
    const task = typeParts[0] || 'Unknown';
    const weight = typeParts[1] || 'Unknown';
    
    // Get variant-specific data
    const variantSection = isApex ? 
        doc.querySelector('[data-variant-section="apex"]') : 
        doc.querySelector('[data-variant-section="normal"]');
    
    // Count attacks from the specific variant
    const attackCards = variantSection ? 
        variantSection.querySelectorAll('.attack-card') : 
        doc.querySelectorAll('.attack-card');
    const attackCount = attackCards.length;
    
    // Extract drops from the specific variant
    const dropsGrid = variantSection ? 
        variantSection.querySelector('.drops-grid') : 
        doc.querySelector('.drops-grid');
    
    const drops = [];
    if (dropsGrid) {
        const dropElements = dropsGrid.querySelectorAll('.drop');
        dropElements.forEach(drop => {
            const rarity = drop.className.split(' ').find(cls => cls !== 'drop') || 'common';
            const text = drop.innerHTML.trim();
            if (text) {
                drops.push({ html: text, rarity: rarity });
            }
        });
    }
    
    return {
        name: title + (isApex ? ' (Apex)' : ''),
        task,
        weight,
        attackCount,
        drops: drops.length > 0 ? drops : [{ html: 'No drops available', rarity: 'common' }]
    };
}

function compareMachines() {
    if (!selectedMachine1 || !selectedMachine2) {
        comparisonResults.innerHTML = '<p style="text-align: center; color: var(--accent);">Please select two machines to compare</p>';
        return;
    }
    
    const machine1Data = extractMachineData(selectedMachine1, machine1Variant === 'apex');
    const machine2Data = extractMachineData(selectedMachine2, machine2Variant === 'apex');
    
    if (!machine1Data || !machine2Data) {
        comparisonResults.innerHTML = '<p style="text-align: center; color: #ff6b6b;">Error loading machine data</p>';
        return;
    }
    
    comparisonResults.innerHTML = `
        <div class="machine-comparison">
            <h3>${machine1Data.name}</h3>
            <div class="comparison-stat">
                <span class="stat-label">Task:</span>
                <span class="stat-value">${machine1Data.task}</span>
            </div>
            <div class="comparison-stat">
                <span class="stat-label">Weight:</span>
                <span class="stat-value">${machine1Data.weight}</span>
            </div>
            <div class="comparison-stat">
                <span class="stat-label">Attack Count:</span>
                <span class="stat-value">${machine1Data.attackCount}</span>
            </div>
            <div class="comparison-stat drops-section">
                <span class="stat-label">Item Drops:</span>
                <div class="drops-grid">
                    ${machine1Data.drops.map(drop => `<div class="drop ${drop.rarity}">${drop.html}</div>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="machine-comparison">
            <h3>${machine2Data.name}</h3>
            <div class="comparison-stat">
                <span class="stat-label">Task:</span>
                <span class="stat-value">${machine2Data.task}</span>
            </div>
            <div class="comparison-stat">
                <span class="stat-label">Weight:</span>
                <span class="stat-value">${machine2Data.weight}</span>
            </div>
            <div class="comparison-stat">
                <span class="stat-label">Attack Count:</span>
                <span class="stat-value">${machine2Data.attackCount}</span>
            </div>
            <div class="comparison-stat drops-section">
                <span class="stat-label">Item Drops:</span>
                <div class="drops-grid">
                    ${machine2Data.drops.map(drop => `<div class="drop ${drop.rarity}">${drop.html}</div>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Event listeners for comparison tool
if (compareToggle) {
    compareToggle.addEventListener('click', () => {
        comparisonSection.hidden = false;
        homeSection.style.display = 'none';
        articleContainer.innerHTML = '';
        if (machineNames.length === 0) initializeComparison();
    });
}

if (closeComparison) {
    closeComparison.addEventListener('click', () => {
        comparisonSection.hidden = true;
        homeSection.style.display = '';
    });
}

// Handle variant tab clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.comparison-section .machine-tabs button')) {
        const variant = e.target.dataset.variant;
        const machine = e.target.dataset.machine;
        
        // Update active state
        const tabGroup = e.target.parentElement;
        tabGroup.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update variant state
        if (machine === '1') {
            machine1Variant = variant;
        } else {
            machine2Variant = variant;
        }
        
        compareMachines();
    }
});

// Initialize comparison on page load
let machineNames = [];
document.addEventListener('DOMContentLoaded', () => {
    if (compareToggle) {
        initializeComparison();
    }
});
// Tips carousel functionality
let currentTipIndex = 0;
const tipCards = document.querySelectorAll('.tip-card');

function showNextTip() {
  if (tipCards.length === 0) return;
  
  // Remove active class from current tip
  tipCards[currentTipIndex].classList.remove('active');
  tipCards[currentTipIndex].classList.add('prev');
  
  // Move to next tip
  currentTipIndex = (currentTipIndex + 1) % tipCards.length;
  
  // Add active class to new tip
  tipCards[currentTipIndex].classList.add('active');
  tipCards[currentTipIndex].classList.remove('prev');
  
  // Clean up prev class after transition
  setTimeout(() => {
    tipCards.forEach(card => {
      if (!card.classList.contains('active')) {
        card.classList.remove('prev');
      }
    });
  }, 500);
}

// Start tips carousel
if (tipCards.length > 0) {
  setInterval(showNextTip, 20000); // Change tip every 20 seconds
}
