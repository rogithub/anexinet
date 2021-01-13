// https://otcatchup.util.repl.co/

let isValid = (stale, latest, otjson) => {
    let options = JSON.parse(otjson);
    let i = 0;
    let max = stale.length;
    let result = [];

    for (let it of options) {
        switch (it.op) {
            case "skip":
                result.push(stale.slice(i, i + it.count));
                i += it.count;
                break;
            case "delete":
                i += it.count;
                break;
            case "insert":
                result.push(it.chars);
                break;
        }

        if (i > max) {
            return false;
        }

    }
    let actual = result.join("") + stale.slice(i);
    console.assert(latest === actual, actual);

    return true;
}

console.assert(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
), "it should be true"); // true

console.assert(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
) === false, "it should be false"); // false, delete past end

console.assert(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
) === false, "it should be false"); // false, skip past end

console.assert(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
), "it should be true"); // true

console.assert(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
), "it should be true"); // true