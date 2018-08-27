var quotes = [
    'Set your Limits and never let anyone cross them',
    'You can do anything, but not everything. -David Allen',
    'You must be the change you wish to see in the world. -Gandhi',
    'I’d rather live with a good question than a bad answer. -Aryeh Frimer',
    'I am patient with stupidity but not with those who are proud of it. -Edith Sitwell',
    'The cure for boredom is curiosity. There is no cure for curiosity. -Ellen Parr',
    'When a person can no longer laugh at himself, it is time for others to laugh at him. -Thomas Szasz',
    'Arguing with a fool proves there are two. -Doris M. Smith',
    'I’ll go anywhere as long as it’s forward. -David Livingstone',
    'You will never find time for anything. You must make it. -Charles Buxton',
    'Sometimes you try to help people, and it backfires on you, and then they try to take advantage of you. -Bill Cosby',
    'I don`t care if you hate me now, I already know you only treat me nice when you think I am useful to you. -Aryeh Frimer',
    'Every minute ou waste in doing nothing, just remember that someone somewhere is getting smarter.',
    'Life is 10 percent what happens to you and 90 percent how you react to it.',
    'Give more than you take.',
    'Always Under-promise, then Over-deliver.',
    'Keep it simple, stupid.',
    'Keep business and personal separate. `coz relatives never miss a chance to take advantage of you.',
    'Do it right or don’t do it.',
    'A lack of boundaries invites a lack of respect.',
    'Never do a favour nor accept it, `coz favours are a costlier than money.',
    'Assume nothing, question everything.',
    'Realize and accept life isn’t always fair.',
    'Don’t complain. Make things better.',
    'Stop blaming others. Take responsibility for your life.',
    'Don’t wait. Start now!',
    'If you don’t go after what you want, you will never have it.',
    'People often claim ti hunger for truth, but seldom like its taste when its served.',
    'Always mean everything you say.',
    'Never forget what you are `coz the rest of the world won`t. Wear it like an armour and it can never be used to hurt you.',
    'A bruise is a lesson and ever ylesson makes us better.',
    'The man who fears losing has already lost, `coz fear cuts deeper than the swords.',
    'A lion does not concern himself with the opinion of the sheep.',
    'Not  Today!!!',
    'There is no shame in fear, what matters is how we face it.',
    'The past s the past, the future is all that`s worth discussing.',
    'A reader lives a thousand lives before he dies, the man who doesn`t lives only one.',
    'If you are good at something, never do it for free.',
    'Never waste your time with explanations, people only hear what they want to hear.',
    'Be Forgiving, Be understanding; but never be a fool.',
    'Confidence is silent; Insecurities are loud.',
    'A fish with closed mouth never get caught; The less you expect, the happier you will be.',
    'The best way to trick a fool, is to let the fool think he has fooled you.',
    'Never assume things! Loud isn`t strong; Quite isn`t weak.',
    'Sometimes you have to play the role of a fool to fool the fool who thinks he`s fooling you.',
    'If they stand behind you, Protect them; If they stand beside you, Respect them; If they stand against you, Defeat them!!',
    'Valar Morghulis; Valar Dohaeris'
    
]
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function ypnQuote() {
    window.stop();
    newQuote();
}