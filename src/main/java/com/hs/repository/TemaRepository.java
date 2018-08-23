package com.hs.repository;

import com.hs.domain.Tema;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Tema entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TemaRepository extends JpaRepository<Tema, Long> {

}
