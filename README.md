# BatCMS

## This is project is adapted from another vue3 cms project.


## Daily leetcode

Given an integer n, return the number of prime numbers that are strictly less than n.

1. start from arr=[2,3]
2. lastEle=arr[arr.length-1]; for a = lastEle++;a<=n, a++
3. arr.map a%arr[n]==0 continue default:arr.push(a)