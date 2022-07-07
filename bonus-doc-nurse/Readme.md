# The healthcareworks example

The purpose of this exercise is to show how important tests are when there a lot of small business rules. Just like in the real world. The exercises goes as follows:

The government is issuing corona money to healthcareworkers
The actual premium has not been decided yet
For doctors, the rules are as following:
 - Less than 10-year experience: x1,5
 - More than 10 or equal: x2
 - More than 20 or equal: x3
 - Never more than: 1000 (throw an error)

For nurses:
 - Less than 10-year experience: x1,2
 - More than 10 or equal: x1,3
 - More than 15 or equal: x1,5
 - More than 20 or equal: x1,7
 - Never more than: 500 (throw an error)
 - Any other profession should not get a premium (but no error should be thrown)

```json
{
    profession: "nurse" | "doctor" | "therapist" | "psychologist" ,
    experience: 11
} 
```

The base could be any number but test for the following number: 200, 300, 600
