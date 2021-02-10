const dataSource = [{'abate': 'become less in amount or intensity'}, {'aberrant': 'markedly different from an accepted norm'}, {'abeyance': 'temporary cessation or suspension'}, {'abscond': 'run away, often taking something or somebody along'}, {'abstemious': 'marked by temperance in indulgence'}, {'admonish': 'scold or reprimand; take to task'}, {'adulterate': 'make impure by adding a foreign or inferior substance'}, {'aesthetic': 'characterized by an appreciation of beauty or good taste'}, {'aggregate': 'a sum total of many heterogeneous things taken together'}, {'alacrity': 'liveliness and eagerness'}, {'alleviate': 'provide physical relief, as from pain'}, {'amalgamate': 'bring or combine together or with something else'}, {'ambiguous': 'having more than one possible meaning'}, {'ambivalence': 'mixed feelings or emotions'}, {'ameliorate': 'make better'}, {'anachronism': "locating something at a time when it couldn't have existed"}, {'analogous': 'similar or equivalent in some respects'}, {'anarchy': 'a state of lawlessness and disorder'}, {'anomalous': 'deviating from the general or common order or type'}, {'antipathy': 'a feeling of intense dislike'}, {'apathy': 'an absence of emotion or enthusiasm'}, {'appease': 'make peace with'}, {'apprise': 'inform somebody of something'}, {'approbation': 'official acceptance or agreement'}, {'appropriate': 'suitable for a particular person, place, or situation'}, {'arduous': 'characterized by effort to the point of exhaustion'}, {'artless': 'simple and natural; without cunning or deceit'}, {'ascetic': 'someone who practices self denial as a spiritual discipline'}, {'assiduous': 'marked by care and persistent effort'}, {'assuage': 'provide physical relief, as from pain'}, {'attenuate': 'become weaker, in strength, value, or magnitude'}, {'audacious': 'disposed to venture or take risks'}, {'austere': 'of a stern or strict bearing or demeanor'}, {'aver': 'declare or affirm solemnly and formally as true'}, {'banal': 'repeated too often; overfamiliar through overuse'}, {'belie': 'be in contradiction with'}, {'beneficent': 'doing or producing good'}, {'bolster': 'support and strengthen'}, {'bombastic': 'ostentatiously lofty in style'}, {'boorish': 'ill-mannered and coarse in behavior or appearance'}, {'burgeon': 'grow and flourish'}, {'burnish': 'polish and make shiny'}, {'buttress': 'a support usually of stone or brick'}, {'cacophonous': 'having an unpleasant sound'}, {'capricious': 'determined by chance or impulse rather than by necessity'}, {'castigation': 'verbal punishment'}, {'catalyst': 'substance that initiates or accelerates a chemical reaction'}, {'caustic': 'capable of destroying or eating away by chemical action'}, {'chicanery': 'the use of tricks to deceive someone'}, {'coagulate': 'change from a liquid to a thickened or solid state'}, {'coda': 'the closing section of a musical composition'}, {'cogent': 'powerfully persuasive'}, {'commensurate': 'corresponding in size or degree or extent'}, {'compendium': 'a publication containing a variety of works'}, {'complaisant': 'showing a cheerful willingness to do favors for others'}, {'compliant': "disposed to act in accordance with someone's wishes"}, {'conciliatory': 'making or willing to make concessions'}, {'condone': 'excuse, overlook, or make allowances for'}, {'confound': 'be confusing or perplexing to'}, {'connoisseur': 'an expert able to appreciate a field'}, {'contention': 'the act of competing as for profit or a prize'}, {'contentious': 'showing an inclination to disagree'}, {'contrite': 'feeling or expressing pain or sorrow for sins or offenses'}, {'conundrum': 'a difficult problem'}, {'converge': 'be adjacent or come together'}, {'convoluted': 'highly complex or intricate'}, {'craven': 'lacking even the rudiments of courage; abjectly fearful'}, {'daunt': 'cause to lose courage'}, {'decorum': 'propriety in manners and conduct'}, {'default': 'an option that is selected automatically'}, {'deference': "courteous regard for people's feelings"}, {'delineate': 'represented accurately or precisely'}, {'denigrate': 'attack the good name and reputation of someone'}, {'deride': 'treat or speak of with contempt'}, {'derivative': 'a compound obtained from another compound'}, {'desiccate': 'lacking vitality or spirit; lifeless'}, {'desultory': 'marked by lack of definite plan, purpose, or enthusiasm'}, {'deterrent': 'something immaterial that interferes with action or progress'}, {'diatribe': 'thunderous verbal attack'}, {'dichotomy': 'a classification into two opposed parts or subclasses'}, {'diffidence': 'lack of self-assurance'}, {'diffuse': 'spread out; not concentrated in one place'}, {'digression': 'a message that departs from the main subject'}, {'dirge': 'a song or hymn of mourning as a memorial to a dead person'}, {'disabuse': 'free somebody from an erroneous belief'}, {'discerning': 'having or revealing keen insight and good judgment'}, {'discordant': 'not in agreement or harmony'}, {'discredit': 'the state of being held in low esteem'}, {'discrepancy': 'a difference between conflicting facts or claims or opinions'}, {'discrete': 'constituting a separate entity or part'}, {'disingenuous': 'not straightforward or candid'}, {'disinterested': "unaffected by concern for one's own welfare"}, {'disjointed': 'taken apart at the points of connection'}, {'dismiss': 'stop associating with'}, {'disparage': 'express a negative opinion of'}, {'disparate': 'fundamentally different or distinct in quality or kind'}, {'dissemble': 'behave unnaturally or affectedly'}, {'disseminate': 'cause to become widely known'}, {'dissolution': 'separation into component parts'}, {'dissonance': 'disagreeable sounds'}, {'distend': 'cause to expand as if by internal pressure'}, {'distill': 'undergo condensation'}, {'diverge': 'move or draw apart'}, {'divest': 'take away possessions from someone'}, {'document': "a representation of a person's thinking with symbolic marks"}, {'dogmatic': 'pertaining to a code of beliefs accepted as authoritative'}, {'dormant': 'inactive but capable of becoming active'}, {'dupe': 'fool or hoax'}, {'ebullient': 'joyously unrestrained'}, {'eclectic': 'selecting what seems best of various styles or ideas'}, {'efficacy': 'capacity or power to produce a desired result'}, {'effrontery': 'audacious behavior that you have no right to'}, {'elegy': 'a mournful poem; a lament for the dead'}, {'elicit': 'call forth, as an emotion, feeling, or response'}, {'embellish': 'make more attractive, as by adding ornament or color'}, {'empirical': 'derived from experiment and observation rather than theory'}, {'emulate': 'strive to equal or match, especially by imitating'}, {'endemic': 'native to or confined to a certain region'}, {'enervate': 'weaken physically, mentally, or morally'}, {'engender': 'call forth'}, {'enhance': 'increase'}, {'ephemeral': 'anything short-lived, as an insect that lives only for a day'}, {'equanimity': 'steadiness of mind under stress'}, {'equivocate': 'be deliberately ambiguous or unclear'}, {'erudite': 'having or showing profound knowledge'}, {'esoteric': 'understandable only by an enlightened inner circle'}, {'eulogy': 'a formal expression of praise for someone who has died'}, {'euphemism': 'an inoffensive expression substituted for an offensive one'}, {'exacerbate': 'make worse'}, {'exculpate': 'pronounce not guilty of criminal charges'}, {'exigency': 'a pressing or urgent situation'}, {'extrapolation': 'an inference about the future based on known facts'}, {'facetious': 'cleverly amusing in tone'}, {'facilitate': 'make easier'}, {'fallacious': 'containing or based on incorrect reasoning'}, {'fatuous': 'devoid of intelligence'}, {'fawning': 'attempting to win favor by flattery'}, {'felicitous': 'exhibiting an agreeably appropriate manner or style'}, {'fervor': 'feelings of great warmth and intensity'}, {'flag': 'a rectangular piece of cloth of distinctive design'}, {'fledgling': 'young bird that has just become capable of flying'}, {'flout': 'treat with contemptuous disregard'}, {'foment': 'try to stir up'}, {'forestall': 'keep from happening or arising; make impossible'}, {'frugality': 'prudence in avoiding waste'}, {'futile': 'producing no result or effect'}, {'gainsay': 'take exception to'}, {'garrulous': 'full of trivial conversation'}, {'goad': 'stab or urge on as if with a pointed stick'}, {'gouge': 'an impression in a surface, as made by a blow'}, {'grandiloquent': 'lofty in style'}, {'gregarious': 'temperamentally seeking and enjoying the company of others'}, {'guileless': 'innocent and free of deceit'}, {'gullible': 'naive and easily deceived or tricked'}, {'harangue': 'a loud bombastic declamation expressed with strong emotion'}, {'hyperbole': 'extravagant exaggeration'}, {'iconoclast': 'someone who attacks cherished ideas or institutions'}, {'idolatry': 'the worship of objects or images as gods'}, {'immutable': 'not subject or susceptible to change or variation'}, {'impair': 'make worse or less effective'}, {'impassive': 'having or revealing little emotion or sensibility'}, {'impede': 'be a hindrance or obstacle to'}, {'impermeable': 'preventing especially liquids to pass or diffuse through'}, {'imperturbable': 'marked by extreme calm and composure'}, {'impervious': 'not admitting of passage or capable of being affected'}, {'implacable': 'incapable of being appeased or pacified'}, {'implicit': 'suggested though not directly expressed'}, {'implode': 'burst inward'}, {'inadvertently': 'without knowledge or intention'}, {'inchoate': 'only partly in existence; imperfectly formed'}, {'incongruity': 'the quality of disagreeing'}, {'inconsequential': 'lacking worth or importance'}, {'incorporate': 'make into a whole or make part of a whole'}, {'indeterminate': 'not fixed or known in advance'}, {'indigence': 'a state of extreme poverty or destitution'}, {'indolent': 'disinclined to work or exertion'}, {'inert': 'unable to move or resist motion'}, {'ingenuous': 'lacking in sophistication or worldliness'}, {'inherent': 'existing as an essential constituent or characteristic'}, {'innocuous': 'not injurious to physical or mental health'}, {'insensible': 'barely able to be perceived'}, {'insinuate': 'suggest in an indirect or covert way; give to understand'}, {'insipid': 'lacking interest or significance or impact'}, {'insularity': 'the state of being isolated or detached'}, {'intractable': 'difficult to manage or mold'}, {'intransigence': 'stubborn refusal to compromise or change'}, {'inundate': 'fill or cover completely, usually with water'}, {'inured': 'made tough by habitual exposure'}, {'invective': 'abusive language used to express blame or censure'}, {'irascible': 'quickly aroused to anger'}, {'irresolute': 'uncertain how to act or proceed'}, {'itinerary': 'an established line of travel or access'}, {'laconic': 'brief and to the point'}, {'lassitude': 'a feeling of lack of interest or energy'}, {'latent': 'potentially existing but not presently evident or realized'}, {'laud': 'praise, glorify, or honor'}, {'lethargic': 'deficient in alertness or activity'}, {'levee': 'an embankment built to prevent a river from overflowing'}, {'levity': 'a manner lacking seriousness'}, {'loquacious': 'full of trivial conversation'}, {'lucid': 'transparently clear; easily understandable'}, {'luminous': 'softly bright or radiant'}, {'magnanimity': 'nobility and generosity of spirit'}, {'malingerer': 'someone shirking duty by feigning illness or incapacity'}, {'malleable': 'capable of being shaped or bent'}, {'maverick': 'someone who exhibits independence in thought and action'}, {'mendacious': 'given to lying'}, {'metamorphosis': 'striking change in appearance or character or circumstances'}, {'meticulous': 'marked by precise accordance with details'}, {'misanthrope': 'someone who dislikes people in general'}, {'mitigate': 'lessen or to try to lessen the seriousness or extent of'}, {'mollify': 'cause to be more favorably inclined'}, {'morose': 'showing a brooding ill humor'}, {'mundane': 'found in the ordinary course of events'}, {'negate': 'make ineffective by counterbalancing the effect of'}, {'neophyte': 'any new participant in some activity'}, {'obdurate': 'stubbornly persistent in wrongdoing'}, {'obsequious': 'attempting to win favor from influential people by flattery'}, {'obviate': 'do away with'}, {'occlude': 'block passage through'}, {'officious': 'intrusive in a meddling or offensive manner'}, {'onerous': 'burdensome or difficult to endure'}, {'oscillate': 'move or swing from side to side regularly'}, {'ostentatious': 'intended to attract notice and impress others'}, {'paragon': 'a perfect embodiment of a concept'}, {'partisan': 'a fervent and even militant proponent of something'}, {'pathological': 'relating to the study of diseases'}, {'paucity': 'an insufficient quantity or number'}, {'pedantic': 'marked by a narrow focus on or display of learning'}, {'penchant': 'a strong liking'}, {'penury': 'a state of extreme poverty or destitution'}, {'perennial': 'lasting an indefinitely long time'}, {'perfidious': 'tending to betray'}, {'perfunctory': 'hasty and without attention to detail; not thorough'}, {'permeable': 'allowing fluids or gases to pass or diffuse through'}, {'pervasive': 'spreading or spread throughout'}, {'phlegmatic': 'showing little emotion'}, {'piety': 'righteousness by virtue of being religiously devout'}, {'placate': 'cause to be more favorably inclined'}, {'plasticity': 'the property of being physically malleable'}, {'platitude': 'a trite or obvious remark'}, {'plethora': 'extreme excess'}, {'plummet': 'drop sharply'}, {'porous': 'full of holes'}, {'pragmatic': 'concerned with practical matters'}, {'preamble': 'a preliminary introduction, as to a statute or constitution'}, {'precarious': 'not secure; beset with difficulties'}, {'precipitate': 'bring about abruptly'}, {'precursor': 'something indicating the approach of something or someone'}, {'presumptuous': 'going beyond what is appropriate, permitted, or courteous'}, {'prevaricate': 'be deliberately ambiguous or unclear'}, {'pristine': 'immaculately clean and unused'}, {'probity': 'complete and confirmed integrity'}, {'problematic': 'making great mental demands'}, {'prodigal': 'recklessly wasteful'}, {'profound': 'situated at or extending to great depth'}, {'prohibitive': 'tending to discourage, especially of prices'}, {'proliferate': 'grow rapidly'}, {'propensity': 'a natural inclination'}, {'propitiate': 'make peace with'}, {'propriety': 'correct behavior'}, {'proscribe': 'command against'}, {'pungent': 'strong and sharp to the sense of taste or smell'}, {'qualified': 'meeting the proper standards and requirements for a task'}, {'quibble': 'evade the truth of a point by raising irrelevant objections'}, {'quiescent': 'being quiet or still or inactive'}, {'rarefied': 'of high moral or intellectual value'}, {'recalcitrant': 'stubbornly resistant to authority or control'}, {'recant': 'formally reject or disavow a formerly held belief'}, {'recluse': 'one who lives in solitude'}, {'recondite': 'difficult to understand'}, {'refractory': 'stubbornly resistant to authority or control'}, {'refute': 'overthrow by argument, evidence, or proof'}, {'relegate': 'assign to a lower position'}, {'reproach': 'express criticism towards'}, {'reprobate': 'a person without moral scruples'}, {'repudiate': 'refuse to acknowledge, ratify, or recognize as valid'}, {'rescind': 'cancel officially'}, {'resolution': 'a decision to do something or to behave in a certain manner'}, {'resolve': 'find a solution or answer'}, {'reticent': 'reluctant to draw attention to yourself'}, {'reverent': 'feeling or showing profound respect or veneration'}, {'sage': 'a mentor in spiritual and philosophical topics'}, {'salubrious': 'promoting health'}, {'sanction': 'official permission or approval'}, {'satiate': 'fill to satisfaction'}, {'saturate': 'infuse or fill completely'}, {'savor': 'a particular taste or smell, especially an appealing one'}, {'secrete': 'generate and separate from cells or bodily fluids'}, {'shard': 'a broken piece of a brittle artifact'}, {'skeptic': 'someone who habitually doubts accepted beliefs'}, {'soporific': 'inducing sleep'}, {'specious': 'plausible but false'}, {'spectrum': 'a broad range of related objects, values, or qualities'}, {'sporadic': 'recurring in scattered or unpredictable instances'}, {'stigma': 'a symbol of disgrace or infamy'}, {'stint': 'supply sparingly and with restricted quantities'}, {'stipulate': 'make an express demand or provision in an agreement'}, {'stolid': 'having or revealing little emotion or sensibility'}, {'strut': 'walk in a proud, confident way'}, {'strut': 'walk in a proud, confident way'}, {'subpoena': 'a writ issued to compel the attendance of a witness'}, {'subside': 'wear off or die down'}, {'substantiate': 'establish or strengthen as with new evidence or facts'}, {'supersede': 'take the place or move into the position of'}, {'supposition': 'the cognitive process of conjecturing'}, {'tacit': 'implied by or inferred from actions or statements'}, {'tangential': 'of superficial relevance if any'}, {'tenuous': 'very thin in gauge or diameter'}, {'tirade': 'a speech of violent denunciation'}, {'torpor': 'a state of motor and mental inactivity'}, {'tortuous': 'marked by repeated turns and bends'}, {'tractable': 'easily managed'}, {'transgression': 'the violation of a law or a duty or moral principle'}, {'truculence': 'stubborn and defiant aggressiveness'}, {'vacillate': 'be undecided about something'}, {'venerate': 'regard with feelings of respect and reverence'}, {'veracious': 'habitually speaking the truth'}, {'verbose': 'using or containing too many words'}, {'viable': 'capable of life or normal growth and development'}, {'viscous': 'having a relatively high resistance to flow'}, {'vituperative': 'marked by harshly abusive criticism'}, {'volatile': 'liable to lead to sudden change or violence'}, {'wary': 'marked by keen caution and watchful prudence'}, {'welter': 'a confused multitude of things'}, {'whimsical': 'determined by chance or impulse rather than by necessity'}, {'zealot': 'a fervent and even militant proponent of something'}, {'abate': 'become less in amount or intensity'}]

let iterationNumber = 1;
function init(){
    const wordsMeanings = document.getElementsByClassName("word-meaning");

    const alreadyChoosen = [];
    const mapping ={}

    let lowerIndex = (iterationNumber-1) * 16;
    let upperIndex = iterationNumber * 16 -1;
    
    for (i = 0; i < wordsMeanings.length; i++) {
        let randNumber1 = 0;
        do{
            randNumber1 = getRandomInt(lowerIndex,upperIndex);
        }while (alreadyChoosen.includes(randNumber1));

        alreadyChoosen.push(randNumber1)
        const index = Math.floor(randNumber1/2);
        const pair = dataSource[index];
        const key = Object.keys(pair)[0];
        const value = (randNumber1 % 2 === 0) ? key : pair[key];
        resetTile(wordsMeanings[i])
        wordsMeanings[i].innerHTML = value;
        mapping[value] = {gridIndex: i, primaryIndex: index, secondaryIndex: randNumber1 % 2}
    }
}


document.querySelectorAll('.previous')[0].addEventListener('click', function () {
    if(iterationNumber === 1) {return}
    iterationNumber -= 1;
    init()
});

document.querySelectorAll('.next')[0].addEventListener('click', function () {
    if(iterationNumber === 41) {return}
    iterationNumber += 1;
    init()
});



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const wordsMeanings = document.getElementsByClassName("word-meaning");

const alreadyChoosen = [];
const mapping ={}

let lowerIndex = (iterationNumber-1) * 16;
let upperIndex = iterationNumber * 16 -1;

for (i = 0; i < wordsMeanings.length; i++) {
    let randNumber1 = 0;
    do{
        randNumber1 = getRandomInt(lowerIndex,upperIndex);
    }while (alreadyChoosen.includes(randNumber1));

    alreadyChoosen.push(randNumber1)
    const index = Math.floor(randNumber1/2);
    const pair = dataSource[index];
    const key = Object.keys(pair)[0];
    const value = (randNumber1 % 2 === 0) ? key : pair[key];
    wordsMeanings[i].innerHTML = value;
    mapping[value] = {gridIndex: i, primaryIndex: index, secondaryIndex: randNumber1 % 2}
  }

function keepTileOnHold(element){
    element.style.color = "white";
    element.style.backgroundColor = "#cc9e9b";
}

function showSuccessTile(element){
    element.style.backgroundColor = "#7deb34";
    element.style.color = "white";
    element.style.border= "3px solid #7deb34";
    element.innerHTML = "done";
}

function resetTile(element){
    element.style.color = "#521c18";
    element.style.backgroundColor = "white";
    element.style.border= "3px solid #cc9e9b";
}

const currentValue = [];
document.querySelectorAll('.word-meaning').forEach(item => {
    item.addEventListener('click', event => {
        const value = event.target.innerHTML;
        
        if(value === "done"){
            return;
        }
        if(currentValue[0] === value){
            return;
        }
        let element1 = document.getElementsByClassName('word-meaning')[mapping[value].gridIndex];
        if(currentValue.length < 1){
            currentValue.push(value);
            keepTileOnHold(element1);
        }else{
            let element2 = document.getElementsByClassName('word-meaning')[mapping[currentValue[0]].gridIndex];
            if(mapping[value].primaryIndex === mapping[currentValue[0]].primaryIndex){
                showSuccessTile(element1);
                showSuccessTile(element2);
            }else{
                resetTile(element1);
                resetTile(element2);
            }
            
            currentValue.pop(value);
        }    
    })
  })