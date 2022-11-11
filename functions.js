function addToZero(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j = i+1; j<arr.length; j++) {
            if (arr[i]+arr[j] === 0) {
                return true
            } 
        }
    }
    return false
}

console.log(addToZero([1,2,3,4,-1]))
console.log(addToZero([1,2,3,4]))

// Runtime is O(n^2)

function uniqueChars(str) {
    let newStr = str.split('')
    for (let i=0; i<newStr.length; i++) {
        for (let j = i+1; j<newStr.length; j++) {
            if (newStr[i] === newStr[j]){
                return false
            }
        }
    }
    return true
}

console.log('---------------')
console.log(uniqueChars('Monday'))
console.log(uniqueChars('Moonday'))

// Runtime is O(n^2)

function isPangram(str) {
    let a="abcdefghijklmnopqrstuvwxyz"
    let b = true
    for (let i=0; i<a.length;i++) {
        if (str.includes(a[i]) === false) {
            b = false
        }
    }
    return b
}
console.log('---------------')
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// Runtime is O(n)


function findLongestWord(arr) {
    let longer = arr.reduce((p, c) => {
        return p.length > c.length ? p : c
    })
    return longer.length
}


console.log('---------------')
console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(["donovan", "hello", "hypocrite", "hi"]))

// Runtime is O(n^2)