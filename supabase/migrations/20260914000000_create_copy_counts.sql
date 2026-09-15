create table if not exists copy_counts (
  event text primary key,
  count integer default 0 not null
);

alter table copy_counts enable row level security;

create policy "Allow anonymous reads" on copy_counts for select using (true);
create policy "Allow anonymous inserts" on copy_counts for insert with check (true);
create policy "Allow anonymous updates" on copy_counts for update using (true);
