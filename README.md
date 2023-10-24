# 온라인 청첩장 계약관리 프로젝트

## Project Description

## Others

## Database Table Info

### admin Table

```sql
CREATE TABLE express.admin(
    id int NOT NULL AUTO_INCREMENT,
    email VARCHAR(200) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    created_at datetime NOT NULL DEFAULT now(),
    updated_at datetime NOT NULL DEFAULT now(),
    deleted_at datetime,
    PRIMARY KEY(id)
)
    COMMENT = "관리자"
    ENGINE = InnoDB;
```

### contract_management table

```sql
CREATE TABLE express.contract_management(
    id int NOT NULL AUTO_INCREMENT,
    wedding_date datetime NOT NULL DEFAULT now(),
    weddinghall_location VARCHAR(255) NOT NULL,
    created_at datetime NOT NULL DEFAULT now(),
    updated_at datetime NOT NULL DEFAULT now(),
    deleted_at datetime,
    PRIMARY KEY(id)
)
    COMMENT = "계약관리"
    ENGINE = InnoDB;

```

### gallery Table

```sql
CREATE TABLE express.gallery(
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    image_url VARCHAR(300) NOt NULL,
    image_size VARCHAR(100) NOT NULL,
    created_at datetime NOT NULL DEFAULT now(),
    updated_at datetime NOT NULL DEFAULT now(),
    deleted_at datetime,
    contract_id int NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT contract_id_gallery
    FOREIGN KEY(contract_id)
    REFERENCES express.contract_management(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
COMMENT = "사진"
ENGINE = InnoDB;
```

### attendance_confirmation Table

```sql
CREATE TABLE express.attendance_confirmation(
    id int NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    bridal_side tinyint NOT NULL,
    present_number int NOT NULL,
    created_at datetime NOT NULL DEFAULT now(),
    updated_at datetime NOT NULL DEFAULT now(),
    deleted_at datetime,
    contract_id int NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT contract_id_attendance_confirmation
    FOREIGN KEY(contract_id)
    REFERENCES express.contract_management(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
COMMENT = "사진"
ENGINE = InnoDB;
```

### guestbook Table

```sql
CREATE TABLE express.guestbook(
    id int NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    content VARCHAR(300) NOT NULL,
    created_at datetime NOT NULL DEFAULT now(),
    updated_at datetime NOT NULL DEFAULT now(),
    deleted_at datetime,
    contract_id int NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT contract_id_guestbook
    FOREIGN KEY(contract_id)
    REFERENCES express.contract_management(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
COMMENT = "사진"
ENGINE = InnoDB;
```

### grooms_management

```sql
CREATE TABLE express.grooms_management(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    contact_number VARCHAR(13) NOT NULL,
    account_number VARCHAR(50) NOT NULL,
    father_account_number VARCHAR(50),
    mother_account_number VARCHAR(50),
    created_at datetime NOT NULL DEFAULT now(),
    updated_at datetime NOT NULL DEFAULT now(),
    deleted_at datetime,
    contract_id int NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT contract_id_grooms_management
    FOREIGN KEY(contract_id)
    REFERENCES express.contract_management(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
COMMENT = "사진"
ENGINE = InnoDB;
```

### bridal_management

```sql
CREATE TABLE express.bridal_management(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    contact_number VARCHAR(13) NOT NULL,
    account_number VARCHAR(50) NOT NULL,
    father_account_number VARCHAR(50),
    mother_account_number VARCHAR(50),
    created_at datetime NOT NULL DEFAULT now(),
    updated_at datetime NOT NULL DEFAULT now(),
    deleted_at datetime,
    contract_id int NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT contract_id_bridal_management
    FOREIGN KEY(contract_id)
    REFERENCES express.contract_management(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
COMMENT = "사진"
ENGINE = InnoDB;
```
