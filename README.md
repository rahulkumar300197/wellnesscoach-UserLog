# wellnesscoach-UserLog


Dummy UserId :- ["123","234","345","456","567","678","789","890","900","1231","2341","3451","4561","5671","6781","7891","8901","9001"]
Dummy ProductId :- ["4321","5432","6543","7654","8765","9876"]

http://localhost:3000/product/4321/user/activity?groupBy=daily

{"message":"Sucess","status":200,"data":[{"totalCount":45,"distinctCount":18,"ProductId":"4321"}]}

http://localhost:3000/product/4321/user/activity?groupBy=weekly

{"message":"Sucess","status":200,"data":[{"totalCount":342,"distinctCount":18,"ProductId":"4321"}]}

http://localhost:3000/product/4321/user/activity?groupBy=monthly

{"message":"Sucess","status":200,"data":[{"totalCount":648,"distinctCount":18,"ProductId":"4321"}]}

http://localhost:3000/product/4321/user/activity?groupBy=Custom&fromDate=2020-07-26&toDate=2020-07-28

{"message":"Sucess","status":200,"data":[{"totalCount":90,"distinctCount":18,"ProductId":"4321"}]}