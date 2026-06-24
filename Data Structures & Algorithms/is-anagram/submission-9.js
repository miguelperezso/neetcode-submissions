class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.split("").length !== t.split("").length) return false;
        const map = new Map();
        for (const l of s.split("")) {
            map.set(l, (map.get(l) || 0) + 1)
        }
        console.log(map);


        for (const l of t.split("")) {
            map.set(l, (map.get(l) || 0) - 1)
        }

        for (const conteo of map.values()) {
            if (conteo !== 0) {
                return false;
            }
        }
        return true;

    }
}
