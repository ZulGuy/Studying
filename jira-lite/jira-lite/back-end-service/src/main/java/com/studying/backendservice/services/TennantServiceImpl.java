package com.studying.backendservice.services;

import java.sql.Connection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class TennantServiceImpl implements TennantService {

  JdbcTemplate jdbcTemplate;

  @Autowired
  public TennantServiceImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void createTennant(String name) {
    jdbcTemplate.execute(
        "            CREATE SCHEMA IF NOT EXISTS " + name + ";\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".users (\n"
        + "                  id         SERIAL       PRIMARY KEY,\n"
        + "                  email      TEXT         NOT NULL UNIQUE,\n"
        + "                  username   TEXT         NOT NULL UNIQUE,\n"
        + "                  password   TEXT         NOT NULL,\n"
        + "                  role       VARCHAR(50)  NOT NULL,\n"
        + "                  tenant_id  TEXT         NOT NULL,\n"
        + "                  active     BOOLEAN      NOT NULL DEFAULT TRUE\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".projects (\n"
        + "                  id          SERIAL  PRIMARY KEY,\n"
        + "                  name        TEXT    NOT NULL UNIQUE,\n"
        + "                  description TEXT    UNIQUE\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".task_types (\n"
        + "                  id   SERIAL        PRIMARY KEY,\n"
        + "                  name VARCHAR(255)  NOT NULL\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".tasks (\n"
        + "                  id           SERIAL       PRIMARY KEY,\n"
        + "                  project_id   INTEGER      NOT NULL REFERENCES " + name + ".projects(id),\n"
        + "                  summary      TEXT         NOT NULL,\n"
        + "                  description  TEXT         NOT NULL,\n"
        + "                  assignee_id  INTEGER      REFERENCES " + name + ".users(id),\n"
        + "                  initiator_id INTEGER      REFERENCES " + name + ".users(id),\n"
        + "                  status       VARCHAR(20)  NOT NULL,\n"
        + "                  task_type_id INTEGER      REFERENCES " + name + ".task_types(id),\n"
        + "                  created_at   TIMESTAMP    DEFAULT NOW()\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".project_users (\n"
        + "                  id         SERIAL   PRIMARY KEY,\n"
        + "                  user_id    INTEGER  NOT NULL REFERENCES " + name + ".users(id),\n"
        + "                  project_id INTEGER  NOT NULL REFERENCES " + name + ".projects(id),\n"
        + "                  CONSTRAINT uq_project_users_" + name + " UNIQUE (user_id, project_id)\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".project_user_roles (\n"
        + "                  project_user_id INTEGER      NOT NULL REFERENCES " + name + ".project_users(id),\n"
        + "                  role            VARCHAR(50)\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".comments (\n"
        + "                  id          SERIAL   PRIMARY KEY,\n"
        + "                  task_id     INTEGER  NOT NULL REFERENCES " + name + ".tasks(id),\n"
        + "                  description TEXT     NOT NULL,\n"
        + "                  author_id   INTEGER  NOT NULL REFERENCES " + name + ".users(id)\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".custom_fields (\n"
        + "                  id    SERIAL        PRIMARY KEY,\n"
        + "                  name  VARCHAR(255)  NOT NULL,\n"
        + "                  value TEXT          NOT NULL,\n"
        + "                  type  VARCHAR(50)   NOT NULL\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".invitation_token (\n"
        + "                  id         SERIAL        PRIMARY KEY,\n"
        + "                  email      VARCHAR(255)  NOT NULL,\n"
        + "                  token      VARCHAR(255)  NOT NULL UNIQUE,\n"
        + "                  used       BOOLEAN       DEFAULT FALSE,\n"
        + "                  expires_at TIMESTAMP     NOT NULL\n"
        + "              );\n"
        + "\n"
        + "              CREATE TABLE IF NOT EXISTS " + name + ".password_reset_tokens (\n"
        + "                  id          SERIAL        PRIMARY KEY,\n"
        + "                  user_id     INTEGER       NOT NULL UNIQUE REFERENCES " + name + ".users(id),\n"
        + "                  token       VARCHAR(255)  NOT NULL UNIQUE,\n"
        + "                  expiry_date TIMESTAMP     NOT NULL,\n"
        + "                  created_at  TIMESTAMP     DEFAULT NOW()\n"
        + "              );\n"
        + "              CREATE INDEX IF NOT EXISTS idx_tasks_project_id_" + name + "       ON " + name + ".tasks(project_id);\n"
        + "              CREATE INDEX IF NOT EXISTS idx_tasks_status_" + name + "            ON " + name + ".tasks(status);\n"
        + "              CREATE INDEX IF NOT EXISTS idx_tasks_assignee_id_" + name + "       ON " + name + ".tasks(assignee_id);\n"
        + "              CREATE INDEX IF NOT EXISTS idx_invitation_token_email_" + name + "  ON " + name + ".invitation_token(email);\n"
        + "              CREATE INDEX IF NOT EXISTS idx_users_email_" + name + "             ON " + name + ".users(email);");
  }

  @Override
  public void deleteTennant(String name) {

  }

  @Override
  public void updateTennant(String oldName, String newName) {

  }
}
