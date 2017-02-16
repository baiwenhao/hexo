---
title: LeetCode
categories: javascript
abbrlink: 6096f3d5
date: 2017-02-09 18:45:41
---

### 1 第一题
```
var twoSum = function(nums, target) {
  for(var i = 0, len = nums.length; i < len; i++) {
    var num = target - nums[i]
    for(var j = 0; j < len; j++) {
      if (j !== i) {
        if (num === nums[j]) {
          return [i, j]
        }
      }
    }
  }
}


```