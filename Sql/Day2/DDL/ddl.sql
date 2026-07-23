CREATE DATABASE frontenddb;
USE frontenddb;

-- CREATE TABLE userstable (

-- column_name datatype constrians,
-- column_name datatype constrians,
-- column_name datatype constrians,
-- column_name datatype constrians,


-- );

CREATE TABLE stuusers (

userid int primary key auto_increment,
username varchar(50),
userage int,
useremail varchar(200) unique,
userpassword varchar(200),
created_by varchar(200) default "User",
created_at date,
updated_by varchar(200),
updated_at date 


);



DESC stuusers;

ALTER TABLE stuusers ADD userdob datetime;

ALTER TABLE stuusers MODIFY userage int;

ALTER TABLE stuusers CHANGE userage age int;

ALTER TABLE stuusers RENAME column age to userage;

ALTER TABLE stu DROP column userdob;
 
 
RENAME TABLE  stuusers TO stu;

truncate table stu;


drop table stu;
 
 
drop database frontenddb;
 