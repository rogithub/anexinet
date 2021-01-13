// https://otcatchup.util.repl.co/
/*
'[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
'[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
'[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
'[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
'[]'

*/

let isValid = (stale, latest, otjson) => {
    let options = JSON.parse(otjson);
    let i = 0;
    let max = stale.length;
    let result = [];

    for(let it of options) {
        switch(it.op) {
            case "skip":
                result.push(stale.slice(i, it.count));
                i += it.count;
                if (i > max)  {
                    console.log("false, skip past end");
                    return false;
                }
                break;
            case "delete":
                i += it.count;
                if (i > max)  {
                    console.log("false, delete past end");
                    return false;
                }
                break;
            case "insert":
                result.push([...it.chars]);
                break;
        }
    }

    console.assert(latest === result.join(), result.join());
    console.log("true");
    return true;
}

isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
  ); // true

  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
  ); // false, delete past end
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
  ); // false, skip past end
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
  ); // true
  
  isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
  ); // true
