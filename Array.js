// 1 ----->>>>>
const merge = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};


// 2 ------>>>>>
const removeElement = function(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};


// 3 ----->>>>>
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};


// 4 ----->>>>>
var removeDuplicatesII = function(nums) {
    if (nums.length <= 2) return nums.length;
    
    let j = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j - 2]) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};