def lengthOfLongestSubstring(s: str) -> int:
    a = {}
    v = 0
    l=[]
    for i,c in enumerate(s):
        
        if not a.get(c):
            v+=1
            a[c]=1
        else:
            l.append(v)
            v=1
            a ={c:1}
        print(a,'\n',l)
    l.append(v)
    return max(l)
print(lengthOfLongestSubstring("dvdf"))